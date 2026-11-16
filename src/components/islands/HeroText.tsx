import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease } });

const versions = [
  { a: 'Expert Foot & Ankle Care,', b: 'Personally Delivered', text: 'Board-certified podiatrists and surgeons helping New Jersey walk, work and play without pain.' },
  { a: 'Back on Your Feet,', b: 'Pain-Free and Confident', text: 'From heel pain to complex surgery, we find the cause and build a plan that fits your life.' },
  { a: 'Three Offices,', b: 'One Caring Team', text: 'Visit us in Scotch Plains, Jersey City or Union and get same-week appointments with experts who listen.' },
];

export default function HeroText({ appointment, phone }: { appointment: string; phone: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % versions.length), 6000);
    return () => clearInterval(t);
  }, [reduce]);
  const v = versions[i];

  return (
    <div className="max-w-3xl">
      <motion.p {...up(0.2)} className="eyebrow !text-taupe-light">Scotch Plains · Jersey City · Union</motion.p>

      <div className="mt-5 min-h-[17rem] md:min-h-[21rem]">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={i === 0 ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.7, ease }}>
            <motion.h1 {...(i === 0 ? up(0.4) : {})} className="font-serif text-5xl leading-[1.05] text-white md:text-7xl">
              {v.a} <em className="text-taupe-light">{v.b}</em>
            </motion.h1>
            <motion.p {...(i === 0 ? up(0.65) : {})} className="mt-6 max-w-xl text-lg text-white/80">{v.text}</motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div {...up(0.85)} className="mt-6 flex flex-wrap items-center gap-4">
        <a href={appointment} className="btn-appt"><span className="btn-fill" /><span>Book Appointment</span></a>
        <a href={`tel:${phone.replace(/-/g, '')}`} className="btn btn-light">Call {phone}</a>
      </motion.div>

      <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero messages">
        {versions.map((_, n) => (
          <button key={n} type="button" onClick={() => setI(n)} aria-label={`Show message ${n + 1}`} aria-selected={n === i}
            className={`h-[3px] rounded-full transition-all duration-500 ${n === i ? 'w-12 bg-taupe' : 'w-6 bg-white/30 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
}
