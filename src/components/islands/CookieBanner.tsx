import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Customisable cookie banner.
 * - Edit CATEGORIES below to add, remove or rename cookie groups.
 * - The visitor's choice is saved in localStorage and a first-party cookie.
 * - Any script can listen: window.addEventListener('cookie-consent', (e) => e.detail.analytics)
 * - Anything can reopen the panel: window.dispatchEvent(new Event('open-cookie-settings'))
 *   (the footer "Cookie Settings" button does this).
 */
const STORAGE_KEY = 'faasnj-cookie-consent';
const VERSION = 1;

const CATEGORIES = [
  {
    id: 'necessary',
    title: 'Strictly necessary',
    text: 'Keep the website working, for example remembering your cookie choice and keeping forms secure. These are always on.',
    locked: true,
  },
  {
    id: 'preferences',
    title: 'Preferences',
    text: 'Remember choices you make on the site, such as the office you pick, so you do not have to repeat them.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    text: 'Help us understand how visitors use the site, so we can make it clearer and faster. Data is collected in a combined form.',
  },
  {
    id: 'marketing',
    title: 'Marketing and embedded content',
    text: 'Allow content from other services, such as maps and videos, and measure how our ads perform.',
  },
] as const;

type Id = (typeof CATEGORIES)[number]['id'];
type Choice = Record<Id, boolean>;

const allOn = (): Choice => ({ necessary: true, preferences: true, analytics: true, marketing: true });
const allOff = (): Choice => ({ necessary: true, preferences: false, analytics: false, marketing: false });

function read(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const d = JSON.parse(raw);
    return d.v === VERSION ? (d.choice as Choice) : null;
  } catch {
    return null;
  }
}

function save(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: VERSION, choice, ts: Date.now() }));
  } catch {
    /* storage may be blocked; the choice then lasts for this visit only */
  }
  document.cookie = `${STORAGE_KEY}=${Object.entries(choice).filter(([, on]) => on).map(([k]) => k).join('.')}; max-age=${60 * 60 * 24 * 180}; path=/; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: choice }));
}

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [choice, setChoice] = useState<Choice>(allOff());
  const first = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const saved = read();
    if (saved) {
      setChoice(saved);
      window.dispatchEvent(new CustomEvent('cookie-consent', { detail: saved }));
    } else {
      setOpen(true);
    }
    const reopen = () => {
      setChoice(read() ?? allOff());
      setCustom(true);
      setOpen(true);
    };
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  useEffect(() => {
    if (open) first.current?.focus({ preventScroll: true });
  }, [open, custom]);

  const finish = (c: Choice) => {
    setChoice(c);
    save(c);
    setOpen(false);
    setCustom(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onKeyDown={(e) => e.key === 'Escape' && !custom && finish(read() ?? allOff())}
          className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-sm rounded-2xl border border-white/10 bg-ink px-5 py-4 text-white shadow-xl shadow-black/30 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:mx-0"
        >
          <h2 id="cookie-title" className="sr-only">Cookie choices</h2>
          <p className="text-[13px] leading-relaxed text-white/80">
            We use cookies to improve this site.{' '}
            <a href="/cookie-policy" className="underline underline-offset-4 hover:text-white">Learn more</a>
          </p>

          {custom && (
            <ul className="mt-3 max-h-[40vh] space-y-2 overflow-y-auto pr-1">
              {CATEGORIES.map((c) => {
                const locked = 'locked' in c && c.locked;
                const on = choice[c.id];
                return (
                  <li key={c.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <label htmlFor={`ck-${c.id}`} className="font-medium">{c.title}</label>
                      <button
                        id={`ck-${c.id}`}
                        type="button"
                        role="switch"
                        aria-checked={on}
                        disabled={locked}
                        onClick={() => setChoice({ ...choice, [c.id]: !on })}
                        className={`relative h-7 w-12 shrink-0 rounded-full transition ${on ? 'bg-gold-deep' : 'bg-white/25'} ${locked ? 'opacity-60' : ''}`}
                      >
                        <span className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition-all ${on ? 'left-[1.4rem]' : 'left-0.5'}`} />
                        <span className="sr-only">{c.title}</span>
                      </button>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{c.text}</p>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {custom ? (
              <>
                <button ref={first} type="button" onClick={() => finish(choice)} className="rounded-full bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink transition hover:bg-taupe-light">
                  Save
                </button>
                <button type="button" onClick={() => finish(allOn())} className="rounded-full border border-white/40 px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-ink">
                  Accept all
                </button>
              </>
            ) : (
              <>
                <button ref={first} type="button" onClick={() => finish(allOn())} className="rounded-full bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-ink transition hover:bg-taupe-light">
                  Accept
                </button>
                <button type="button" onClick={() => finish(allOff())} className="rounded-full border border-white/40 px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition hover:bg-white hover:text-ink">
                  Decline
                </button>
                <button type="button" onClick={() => { setChoice(read() ?? allOff()); setCustom(true); }} className="ml-auto px-1 py-2 text-[11px] uppercase tracking-[0.15em] text-white/70 underline underline-offset-4 hover:text-white">
                  Customize
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
