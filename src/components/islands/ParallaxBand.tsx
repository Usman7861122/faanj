import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function ParallaxBand({ image, eyebrow, title, cta }: { image: string; eyebrow?: string; title: string; cta?: { label: string; href: string } }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink">
      <motion.img src={image} alt="" loading="lazy" style={{ y, willChange: 'transform' }} className="absolute inset-0 h-[130%] w-full -top-[15%] object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/60" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center text-white">
        {eyebrow && <p className="eyebrow !text-taupe-light">{eyebrow}</p>}
        <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">{title}</h2>
        {cta && <a href={cta.href} className="btn-appt btn-ghost mt-10"><span className="btn-fill" /><span>{cta.label}</span></a>}
      </div>
    </section>
  );
}
