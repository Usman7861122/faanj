import { motion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1] as const;
const up = (d: number) => ({ initial: { opacity: 0, y: 36 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, delay: d, ease } });
export default function HeroText({ appointment, phone }: { appointment: string; phone: string }) {
  return (
    <div className="max-w-3xl">
      <motion.p {...up(0.2)} className="eyebrow !text-taupe-light">Scotch Plains · Jersey City · Union</motion.p>
      <motion.h1 {...up(0.4)} className="mt-5 font-serif text-5xl leading-[1.05] text-white md:text-7xl">
        Expert Foot &amp; Ankle Care, <em className="text-taupe-light">Personally Delivered</em>
      </motion.h1>
      <motion.p {...up(0.65)} className="mt-6 max-w-xl text-lg text-white/80">
        Board-certified podiatrists and surgeons helping New Jersey walk, work and play without pain.
      </motion.p>
      <motion.div {...up(0.85)} className="mt-10 flex flex-wrap items-center gap-4">
        <a href={appointment} className="btn-appt"><span className="btn-fill" /><span>Book Appointment</span></a>
        <a href={`tel:${phone.replace(/-/g, '')}`} className="btn btn-light">Call {phone}</a>
      </motion.div>
    </div>
  );
}
