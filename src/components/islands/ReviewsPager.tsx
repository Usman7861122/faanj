import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type R = { name: string; date: string; text: string; doctor?: string };

const initials = (n: string) => n.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((s) => s[0]).join('').toUpperCase();
const longDate = (d: string) => {
  const [m, day, y] = d.split('/');
  return new Date(2000 + Number(y), Number(m) - 1, Number(day)).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

export default function ReviewsPager({ items, perPage = 6 }: { items: R[]; perPage?: number }) {
  const pages = Math.ceil(items.length / perPage);
  const [page, setPage] = useState(1);
  const top = useRef<HTMLDivElement>(null);
  const go = (n: number) => {
    const next = Math.min(Math.max(n, 1), pages);
    if (next === page) return;
    setPage(next);
    top.current?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };
  const slice = items.slice((page - 1) * perPage, page * perPage);

  return (
    <div ref={top} className="scroll-mt-40">
      <AnimatePresence mode="wait">
        <motion.ul key={page} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {slice.map((r, i) => (
            <li key={r.name + r.date + i} className="group flex h-full flex-col rounded-[1.5rem] border border-ink/10 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-taupe hover:shadow-2xl hover:shadow-ink/15">
              <div className="flex gap-1 text-gold-deep" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 3 1.1-6L1.4 7.8l6-.8L10 1.5z" /></svg>
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-taupe-dark">“{r.text}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-ink/10 pt-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-serif text-lg text-white">{initials(r.name)}</span>
                <span>
                  <span className="block font-serif text-xl leading-tight">{r.name}</span>
                  <span className="block text-xs uppercase tracking-[0.15em] text-taupe-dark">{r.doctor ? `${r.doctor} · ` : ''}{longDate(r.date)}</span>
                </span>
              </figcaption>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      <nav className="mt-14 flex flex-wrap items-center justify-center gap-3" aria-label="Reviews pages">
        <button type="button" onClick={() => go(page - 1)} disabled={page === 1}
          className="rounded-full border border-ink/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-30">
          Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pages }).map((_, n) => (
            <button key={n} type="button" onClick={() => go(n + 1)} aria-label={`Page ${n + 1}`} aria-current={page === n + 1 ? 'page' : undefined}
              className={`h-11 w-11 rounded-full border text-sm transition ${page === n + 1 ? 'border-ink bg-ink text-white' : 'border-ink/20 hover:border-ink hover:bg-ink/5'}`}>
              {n + 1}
            </button>
          ))}
        </div>
        <button type="button" onClick={() => go(page + 1)} disabled={page === pages}
          className="rounded-full border border-ink/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-30">
          Next
        </button>
      </nav>
      <p className="mt-5 text-center text-sm text-taupe-dark">Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, items.length)} of {items.length} reviews</p>
    </div>
  );
}
