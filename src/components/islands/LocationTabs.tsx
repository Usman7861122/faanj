import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
type Loc = { id: string; name: string; address: string; phone: string };
export default function LocationTabs({ locations }: { locations: Loc[] }) {
  const [id, setId] = useState(locations[0].id);
  const loc = locations.find((l) => l.id === id)!;
  return (
    <div>
      <div role="tablist" className="grid grid-cols-3 gap-3">
        {locations.map((l) => (
          <button key={l.id} role="tab" aria-selected={l.id === id} onClick={() => setId(l.id)}
            className={`btn !px-3 ${l.id === id ? 'border-ink bg-ink text-white' : 'text-ink hover:bg-ink/5'}`}>{l.name}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={loc.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .4 }} className="mt-8">
          <h3 className="font-serif text-4xl">{loc.name}</h3>
          <p className="mt-3 text-lg text-taupe-dark">{loc.address}</p>
          <a className="mt-2 inline-block text-xl underline-offset-4 hover:underline" href={`tel:${loc.phone.replace(/-/g, '')}`}>{loc.phone}</a>
          <div className="mt-6 aspect-[16/10] overflow-hidden rounded-[1.25rem] border border-ink/10">
            <iframe title={`Map of ${loc.name} office`} loading="lazy" className="h-full w-full grayscale" src={`https://www.google.com/maps?q=${encodeURIComponent(loc.address)}&output=embed`} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
