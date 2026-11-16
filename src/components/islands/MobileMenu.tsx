import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Item = { label: string; href?: string; external?: boolean; children?: Item[] };

export default function MobileMenu({ items, phone, appointment }: { items: Item[]; phone: string; appointment: string }) {
  const [open, setOpen] = useState(false);
  const flat = (c: Item[]): Item[] => c.flatMap((i) => (i.children ? [{ label: i.label }, ...flat(i.children)] : [i]));
  const close = () => setOpen(false);
  return (
    <>
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Toggle menu"
        className="btn btn-light !min-h-11 !px-5 !py-2">{open ? 'Close' : 'Menu'}</button>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-full max-h-[80svh] overflow-y-auto border-t border-white/10 bg-ink-deep px-6 py-6">
            <ul className="space-y-1">
              {items.map((i) => (
                <li key={i.label} className="border-b border-white/10 py-3">
                  <a href={i.href} onClick={close} target={i.external ? '_blank' : undefined} rel={i.external ? 'noopener' : undefined}
                    className="text-sm uppercase tracking-[0.16em] text-white">{i.label}</a>
                  {i.children && (
                    <ul className="mt-2 space-y-1 pl-4">
                      {flat(i.children).map((c) => c.href ? (
                        <li key={c.label}><a href={c.href} onClick={close} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener' : undefined} className="block py-1 text-sm text-white/70">{c.label}</a></li>
                      ) : (<li key={c.label} className="pt-2 text-[10px] uppercase tracking-[0.25em] text-taupe">{c.label}</li>))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href={appointment} className="btn-appt"><span className="btn-fill" /><span>Book Appointment</span></a>
              <a href={`tel:${phone.replace(/-/g, '')}`} className="btn btn-light">Call {phone}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
