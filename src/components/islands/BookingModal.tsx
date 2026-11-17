import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export type BookingOffice = { id: string; name: string; address: string; url: string };

// Opens when any link to /appointment is clicked, or when the "open-booking" event fires.
export default function BookingModal({ offices }: { offices: BookingOffice[] }) {
  const [open, setOpen] = useState(false);
  const first = useRef<HTMLAnchorElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href="/appointment"]') as HTMLElement | null;
      if (!a) return;
      e.preventDefault();
      opener.current = a;
      setOpen(true);
    };
    const onOpen = () => setOpen(true);
    document.addEventListener('click', onClick);
    window.addEventListener('open-booking', onOpen);
    return () => { document.removeEventListener('click', onClick); window.removeEventListener('open-booking', onOpen); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', key);
    const t = setTimeout(() => first.current?.focus({ preventScroll: true }), 50);
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', key); clearTimeout(t); opener.current?.focus?.(); };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
          role="dialog" aria-modal="true" aria-labelledby="booking-title"
        >
          <button type="button" aria-label="Close" onClick={() => setOpen(false)} className="absolute inset-0 cursor-default bg-black/70" />
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-ink p-7 text-white shadow-2xl shadow-black/50 md:p-9"
          >
            <button type="button" onClick={() => setOpen(false)} aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <p className="eyebrow !text-taupe">Book online</p>
            <h2 id="booking-title" className="mt-3 font-serif text-3xl leading-tight md:text-4xl">Book Your Appointment</h2>
            <p className="mt-3 text-sm text-white/70">Choose the office you want to visit. You will go to our secure scheduling page.</p>
            <ul className="mt-6 space-y-3">
              {offices.map((o, i) => (
                <li key={o.id}>
                  <a ref={i === 0 ? first : undefined} href={o.url} target="_blank" rel="noopener"
                    className="group flex items-center gap-4 rounded-xl border border-taupe/60 px-5 py-4 transition duration-300 hover:bg-taupe hover:text-black focus-visible:bg-taupe focus-visible:text-black">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-taupe transition-colors group-hover:text-black group-focus-visible:text-black" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold uppercase tracking-[0.14em]">{o.name} Location</span>
                      <span className="mt-0.5 block text-xs text-white/60 transition-colors group-hover:text-black/70 group-focus-visible:text-black/70">{o.address}</span>
                    </span>
                    <span className="-translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
