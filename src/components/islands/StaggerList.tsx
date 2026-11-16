import { motion } from 'framer-motion';

interface Item {
  slug: string;
  title: string;
  summary: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StaggerList({ items }: { items: Item[] }) {
  return (
    <motion.ul
      className="grid gap-6 md:grid-cols-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((s) => (
        <motion.li
          key={s.slug}
          variants={item}
          className="rounded-lg border border-neutral-200 p-6"
        >
          <h3 className="font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-neutral-600">{s.summary}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}
