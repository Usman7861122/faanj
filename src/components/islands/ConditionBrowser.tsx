import { useMemo, useState } from 'react';

type Item = { slug: string; title: string; region: string };

// Search box + area chips + grouped list of every condition.
export default function ConditionBrowser({ items, regions }: { items: Item[]; regions: string[] }) {
  const [q, setQ] = useState('');
  const [area, setArea] = useState<string>('All');
  const query = q.trim().toLowerCase();
  const shown = useMemo(
    () => items.filter((i) => (area === 'All' || i.region === area) && (!query || i.title.toLowerCase().includes(query))),
    [items, area, query],
  );
  const groups = regions.map((r) => ({ r, list: shown.filter((i) => i.region === r) })).filter((g) => g.list.length);

  return (
    <div>
      <div className="mx-auto max-w-xl">
        <label htmlFor="cond-search" className="sr-only">Search conditions</label>
        <div className="relative">
          <svg viewBox="0 0 24 24" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-taupe-dark" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          <input id="cond-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search, for example bunion or heel"
            className="w-full rounded-full border border-ink/20 bg-white py-4 pl-14 pr-6 text-base outline-none transition focus:border-ink focus:ring-2 focus:ring-taupe" />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter by area of the foot">
        {['All', ...regions].map((r) => (
          <button key={r} type="button" onClick={() => setArea(r)} aria-pressed={area === r}
            className={`rounded-full border px-4 py-2 text-[12px] font-medium uppercase tracking-[0.12em] transition ${area === r ? 'border-ink bg-ink text-white' : 'border-ink/20 bg-white hover:border-ink'}`}>
            {r}
          </button>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-taupe-dark" aria-live="polite">{shown.length} {shown.length === 1 ? 'condition' : 'conditions'}</p>

      <div className="mt-10 space-y-14">
        {groups.map((g) => (
          <section key={g.r} aria-labelledby={`r-${g.r}`}>
            <h2 id={`r-${g.r}`} className="border-b border-ink/15 pb-4 font-serif text-3xl md:text-4xl">{g.r}</h2>
            <ul className="mt-6 grid gap-x-10 gap-y-1 md:grid-cols-2">
              {g.list.map((c) => (
                <li key={c.slug}>
                  <a href={`/conditions/${c.slug}`} className="group flex items-center justify-between gap-4 border-b border-ink/10 py-4 transition-colors hover:text-gold-deep">
                    <span className="font-serif text-xl leading-snug">{c.title}</span>
                    <span className="-translate-x-2 text-gold-deep opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" aria-hidden="true">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {groups.length === 0 && <p className="text-center text-lg text-taupe-dark">No match. Try a shorter word, or call us and we will help.</p>}
      </div>
    </div>
  );
}
