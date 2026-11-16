import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const stages = [
  { title: 'Pain & swelling', text: 'Uric acid crystals build up in the big toe joint.' },
  { title: 'Medicine', text: 'Anti-inflammatory medicine calms the pain fast.' },
  { title: 'Crystals break down', text: 'Uric acid is lowered, so crystals slowly dissolve.' },
  { title: 'Relief & recovery', text: 'The joint heals and you walk without pain.' },
];

const glow = ['#e0645a', '#e0645a', '#d9a05a', '#5fb3a8'];
const size = [1, 0.95, 0.45, 0.04];
const crystals = [
  [548, 400, 22], [575, 372, 18], [610, 360, 24], [648, 372, 20], [676, 398, 26],
  [690, 436, 22], [660, 462, 20], [584, 430, 16], [630, 410, 26],
];
const toes = [
  [150, 250, 160], [205, 215, 200], [262, 205, 215], [320, 222, 190],
];

export default function GoutAnimation() {
  const reduce = useReducedMotion();
  const [s, setS] = useState(reduce ? 3 : 0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setS((v) => (v + 1) % stages.length), 3400);
    return () => clearInterval(t);
  }, [reduce]);

  const c = glow[s];

  return (
    <div className="img-sq relative aspect-square w-full overflow-hidden bg-ink-deep shadow-2xl shadow-ink/20" role="img" aria-label="Animation showing how gout is treated, from swollen joint to recovery">
      <svg viewBox="0 0 800 800" className="absolute inset-0 h-full w-full">
        <defs>
          <radialGradient id="g-bg" cx="30%" cy="35%" r="90%">
            <stop offset="0" stopColor="#14505a" />
            <stop offset="1" stopColor="#0a2a2e" />
          </radialGradient>
          <radialGradient id="g-glow">
            <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <clipPath id="lens"><circle cx="600" cy="420" r="170" /></clipPath>
        </defs>
        <rect width="800" height="800" fill="url(#g-bg)" />

        {/* foot */}
        <g fill="#f2f7f6" fillOpacity="0.9">
          {toes.map(([x, y, h], i) => (
            <rect key={i} x={x} y={y} width="34" height={h * 0.55} rx="17" fillOpacity={0.55} />
          ))}
          <rect x="330" y="240" width="46" height="120" rx="23" />
          <rect x="332" y="385" width="46" height="130" rx="23" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={152 + i * 56} y={430 + (i === 1 ? -30 : i === 2 ? -35 : 0) + 20} width="30" height="170" rx="15" fillOpacity="0.55" />
          ))}
          <rect x="200" y="600" width="170" height="150" rx="60" fillOpacity="0.4" />
        </g>
        <path d="M110 760 C120 600 150 430 150 330 L380 330 C390 450 410 600 400 760 Z" fill="#f2f7f6" fillOpacity="0.07" />

        {/* inflamed joint */}
        <motion.circle cx="354" cy="372" r="70" fill="url(#g-glow)" style={{ mixBlendMode: 'screen' }}
          animate={{ fill: c, opacity: s === 3 ? 0.25 : [0.55, 0.95, 0.55], scale: s === 3 ? 0.8 : [1, 1.15, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.circle cx="354" cy="372" r="64" animate={{ fill: c, opacity: 0.55 }} transition={{ duration: 1 }} style={{ filter: 'blur(26px)' }} />
        <motion.rect x="328" y="364" width="52" height="9" rx="4" animate={{ fill: s === 3 ? '#5fb3a8' : '#e0645a' }} transition={{ duration: 1 }} />

        {/* beam */}
        <motion.path d="M385 372 L592 262 L592 582 Z" animate={{ fill: c, opacity: 0.16 }} transition={{ duration: 1 }} />

        {/* lens */}
        <circle cx="600" cy="420" r="174" fill="#0a2a2e" />
        <g clipPath="url(#lens)">
          <rect x="420" y="240" width="360" height="360" fill="#0f3a3f" />
          <motion.rect x="420" y="240" width="360" height="360" animate={{ fill: c, opacity: s === 3 ? 0.08 : 0.22 }} transition={{ duration: 1 }} />
          {/* bone ends */}
          <path d="M560 230 H640 V380 Q600 396 560 380 Z" fill="#f2f7f6" fillOpacity="0.92" />
          <path d="M556 440 Q600 424 644 440 V620 H556 Z" fill="#f2f7f6" fillOpacity="0.92" />
          <motion.path d="M560 392 Q600 410 640 392 L644 430 Q600 414 556 430 Z" animate={{ fill: s === 3 ? '#5fb3a8' : '#e0645a', opacity: 0.75 }} transition={{ duration: 1 }} />
          {/* crystals */}
          {crystals.map(([x, y, r], i) => (
            <motion.circle key={i} cx={x} cy={y} r={r} fill="#c2a05a" stroke="#e6d3a3" strokeWidth="3"
              style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              animate={{ scale: size[s], opacity: s === 3 ? 0 : 1 }}
              transition={{ duration: 1.6, delay: i * 0.06, ease: 'easeInOut' }} />
          ))}
          {/* healed sparkle */}
          <AnimatePresence>
            {s === 3 && [0, 1, 2, 3, 4].map((i) => (
              <motion.circle key={i} cx={560 + i * 22} cy={410} r="5" fill="#e6d3a3"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: [0, 1, 0], y: -30 }} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }} />
            ))}
          </AnimatePresence>
          {/* medicine capsules */}
          <AnimatePresence>
            {s === 1 && [0, 1, 2].map((i) => (
              <motion.g key={i} initial={{ x: 220, y: -150, opacity: 0, rotate: 30 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 1, 0], rotate: 0 }} exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: i * 0.5, ease: 'easeIn' }}>
                <rect x={580 + i * 24 - 18} y={380 + (i % 2) * 14} width="36" height="14" rx="7" fill="#e6d3a3" />
                <rect x={580 + i * 24 - 18} y={380 + (i % 2) * 14} width="18" height="14" rx="7" fill="#f2f7f6" />
              </motion.g>
            ))}
          </AnimatePresence>
        </g>
        <circle cx="600" cy="420" r="174" fill="none" stroke="#c2a05a" strokeWidth="5" />
      </svg>

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-deep via-ink-deep/80 to-transparent p-6 pt-20 sm:p-8 sm:pt-24">
        <AnimatePresence mode="wait">
          <motion.div key={s} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.45 }}>
            <p className="text-[11px] uppercase tracking-[0.28em] text-taupe">Step {s + 1} of 4</p>
            <p className="mt-1 font-serif text-3xl text-white sm:text-4xl">{stages[s].title}</p>
            <p className="mt-1 text-sm text-white/75 sm:text-base">{stages[s].text}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-4 flex gap-2" aria-hidden="true">
          {stages.map((_, i) => (
            <span key={i} className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/20">
              <motion.span className="block h-full bg-taupe" initial={false} animate={{ width: i < s ? '100%' : i === s ? '100%' : '0%' }} transition={{ duration: i === s ? 3.4 : 0.3, ease: 'linear' }} style={{ originX: 0 }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
