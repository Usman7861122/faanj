import { useEffect, useRef } from 'react';
// Soft particles that gently drift away from the cursor. Very light on CPU.
export default function ParticleField({ color = '230,211,163', count = 46 }: { color?: string; count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!; const ctx = c.getContext('2d')!;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let w = 0, h = 0, raf = 0; const m = { x: -999, y: -999 };
    const P = Array.from({ length: count }, () => ({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 2, vx: (Math.random() - .5) * .0002, vy: (Math.random() - .5) * .0002, ox: 0, oy: 0 }));
    const size = () => { const r = c.getBoundingClientRect(); w = c.width = r.width; h = c.height = r.height; };
    size(); addEventListener('resize', size);
    const move = (e: MouseEvent) => { const r = c.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; };
    c.parentElement!.addEventListener('mousemove', move);
    c.parentElement!.addEventListener('mouseleave', () => { m.x = m.y = -999; });
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        p.x = (p.x + p.vx + 1) % 1; p.y = (p.y + p.vy + 1) % 1;
        const px = p.x * w + p.ox, py = p.y * h + p.oy; const dx = px - m.x, dy = py - m.y; const d = Math.hypot(dx, dy);
        if (d < 140) { p.ox += (dx / d) * (140 - d) * .02; p.oy += (dy / d) * (140 - d) * .02; }
        p.ox *= .96; p.oy *= .96;
        ctx.beginPath(); ctx.arc(p.x * w + p.ox, p.y * h + p.oy, p.r, 0, 7); ctx.fillStyle = `rgba(${color},.55)`; ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); };
  }, []);
  return <canvas ref={ref} aria-hidden className="absolute inset-0 h-full w-full" />;
}
