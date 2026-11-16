import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Background image that moves slower than the page while scrolling (parallax)
export default function ParallaxImage({ src, alt = '', range = 12, className = '' }: { src: string; alt?: string; range?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.18, 1.12]);
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden={alt ? undefined : true}>
      <motion.img src={src} alt={alt} loading="lazy" style={{ y, scale }}
        className="absolute left-0 top-[-15%] h-[130%] w-full object-cover will-change-transform" />
    </div>
  );
}
