import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type T = { text: string; name: string; doctor?: string };

export default function TestimonialSlider({ items }: { items: T[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 6500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  const go = (n: number) => setI((n + items.length) % items.length);
  const t = items[i];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <svg className="h-12 w-12 text-taupe/50" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true">
        <path d="M20 8C11 11 6 18 6 28v12h14V26h-7c0-6 3-10 9-12L20 8zm22 0c-9 3-14 10-14 20v12h14V26h-7c0-6 3-10 9-12L42 8z" />
      </svg>

      <div className="relative mt-4 min-h-[15rem] sm:min-h-[13rem]">
        <AnimatePresence mode="wait">
          <motion.figure key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
            <div className="flex gap-1 text-taupe" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <motion.svg key={s} initial={{ opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 + s * 0.08 }}
                  className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6L10 15l-5.3 3 1.1-6L1.4 7.8l6-.8L10 1.5z" /></motion.svg>
              ))}
            </div>
            <blockquote className="mt-4 font-serif text-2xl italic leading-snug text-ink/85 sm:text-[1.7rem]">“{t.text}”</blockquote>
            <figcaption className="mt-5 text-sm uppercase tracking-[0.18em] text-taupe-dark">
              {t.name}{t.doctor ? ` · Patient of ${t.doctor}` : ''}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center gap-5">
        <button onClick={() => go(i - 1)} aria-label="Previous review" className="btn btn-dark !min-h-11 !px-4 !py-2">←</button>
        <button onClick={() => go(i + 1)} aria-label="Next review" className="btn btn-dark !min-h-11 !px-4 !py-2">→</button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose review">
          {items.map((_, n) => (
            <button key={n} onClick={() => setI(n)} aria-label={`Review ${n + 1}`} aria-selected={n === i} role="tab"
              className="relative h-1.5 overflow-hidden rounded-full bg-ink/15 transition-all duration-500" style={{ width: n === i ? 40 : 14 }}>
              {n === i && <motion.span key={`${i}-${paused}`} className="absolute inset-y-0 left-0 bg-ink" initial={{ width: 0 }} animate={{ width: paused ? '100%' : '100%' }} transition={{ duration: paused ? 0 : 6.5, ease: 'linear' }} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
