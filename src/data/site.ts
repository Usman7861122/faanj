export const site = {
  name: 'Foot & Ankle Specialists of New Jersey',
  short: 'FAASNJ',
  tagline: 'Expert Foot & Ankle Care in New Jersey',
  description:
    'Board-certified podiatrists and foot & ankle surgeons in Scotch Plains, Jersey City and Union, NJ. Personal, modern care to restore your mobility and comfort.',
  url: 'https://footandanklespecialistsofnj.com',
  phone: '908-232-3346',
  appointment: '/appointment',
  // Paste a form service URL here (for example a Formspree endpoint) to send contact-form messages
  formEndpoint: '',
};

const FORMS = '/forms';

export type NavItem = {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
};

// Same structure as the live website
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Practice',
    href: '/our-practice',
    children: [
      {
        label: 'Forms',
        children: [
          { label: 'New Patient Forms', href: `${FORMS}/Patient-Form.pdf`, external: true },
          { label: 'Notice Of Privacy Practices', href: `${FORMS}/Notice-Privacy-Practices.pdf`, external: true },
          { label: 'Medicare', href: `${FORMS}/Medicare.pdf`, external: true },
        ],
      },
    ],
  },
  { label: 'Patient Portal', href: 'https://11307.portal.athenahealth.com/', external: true },

  {
    label: 'Providers',
    href: '/providers',
    children: [
      { label: 'Krupa Patel', href: '/providers/patel' },
      { label: 'Dr. Obinna O. Mgbako', href: '/providers/mgbako' },
      { label: 'Dr. Yu-Ching Terence Chi', href: '/providers/yu-ching' },
      { label: 'Lara Kozin', href: '/providers/kozin' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Achilles Tendonitis', href: '/services/achilles-tendonitis' },
      { label: 'Gout', href: '/services/gout' },
      { label: 'Hammer Toe', href: '/services/hammer-toe' },
      { label: 'Ankle Injuries', href: '/services/ankle-injuries' },
      { label: 'Heel Pain', href: '/services/heel-pain' },
      { label: 'Heel Spur', href: '/services/heel-spur' },
      { label: 'Ingrown Toenail', href: '/services/ingrown-toenail' },
      { label: 'Athlete’s Foot', href: '/services/athletes-foot' },
      { label: 'View More Services', href: '/services' },
    ],
  },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Testimonials', href: '/testimonials'},
  { label: 'Contact', href: '/contact' },
];

export const services = [
  { slug: 'achilles-tendonitis', title: 'Achilles Tendonitis', img: '/images/services/achilles/exam.jpg', text: 'Relief for pain and stiffness along the back of the ankle, with a plan to get you moving again.' },
  { slug: 'gout', title: 'Gout', img: '/images/services/gout/exam.jpg', text: 'Fast treatment for sudden joint pain and swelling, plus steps to prevent future flare-ups.' },
  { slug: 'hammer-toe', title: 'Hammer Toe', img: '/images/services/hammer-toe/exam.jpg', text: 'Gentle and surgical options to correct toe deformity and ease daily discomfort.' },
  { slug: 'ankle-injuries', title: 'Ankle Injuries', img: '/images/services/ankle-injuries/exam.jpg', text: 'Care for sprains, fractures and instability so you can return to the things you love.' },
  { slug: 'heel-pain', title: 'Heel Pain', img: '/images/services/heel-pain/exam.jpg', text: 'Find the real cause of heel pain and treat it for lasting comfort.' },
  { slug: 'heel-spur', title: 'Heel Spur', img: '/images/services/heel-spur/exam.jpg', text: 'Targeted treatment to calm inflammation and remove the sharp pain with each step.' },
  { slug: 'ingrown-toenail', title: 'Ingrown Toenail', img: '/images/services/ingrown-toenail/exam.jpg', text: 'Quick, gentle in-office care for painful nails, with a lasting fix for repeat problems.' },
  { slug: 'athletes-foot', title: 'Athlete’s Foot', img: '/images/services/athletes-foot/exam.jpg', text: 'Clear the itch and the infection, and learn simple steps to keep it from returning.' },
];

export const providers = [
  { slug: 'patel', name: 'Krupa Patel', creds: 'DPM, FACFAS', role: 'Foot & Ankle Surgery & Podiatry', img: '/images/team/krupa-patel.webp', href: '/providers/patel' },
  { slug: 'mgbako', name: 'Dr. Obinna O. Mgbako', creds: 'DPM, FACFAS, FAPWCA', role: 'Foot & Ankle Surgery & Podiatry', img: '/images/team/obinna-mgbako.webp', href: '/providers/mgbako' },
  { slug: 'yu-ching', name: 'Dr. Yu-Ching Terence Chi', creds: 'DPM, FACFAS', role: 'Foot & Ankle Surgery & Podiatry', img: '/images/team/yu-ching-chi.webp', href: '/providers/yu-ching' },
  { slug: 'kozin', name: 'Lara Kozin', creds: 'DPM, FACFAS', role: 'Foot & Ankle Surgeon & Podiatrist', img: '/images/team/lara-kozin.webp', href: '/providers/kozin' },
];

export const locations = [
  { id: 'scotch-plains', name: 'Scotch Plains', address: '2265 South Ave, Scotch Plains, NJ 07076', phone: '908-232-3346' },
  { id: 'jersey-city', name: 'Jersey City', address: '1 Journal Square Plaza, 2nd Floor, Jersey City, NJ 07306', phone: '908-232-3346' },
  { id: 'union', name: 'Union', address: '440 Chestnut Street, 2nd Floor, Union, NJ 07083', phone: '908-688-0113' },
];

export const insurance = [
  '1771751.png', 'Insurance-1.png', 'Insurance-12.png', 'Insurance-13.jpg', 'Insurance-14.png', 'Insurance-15.png',
  'Insurance-16.png', 'Insurance-17.png', 'Insurance-18.png', 'Insurance-119.png', 'Insurance-1112.png',
].map((f) => `/images/insurance/${f}`);

export const posts = [
  { title: 'Foot Pain When Getting Back Into Exercise: What Your Feet May Be Telling You', href: '/foot-pain-when-getting-back-into-exercise-what-your-feet-may-be-telling-you', img: '/images/site/blog-exercise.png' },
  { title: 'Why Does My Heel Hurt? Understanding Common Causes of Heel Pain', href: '/why-does-my-heel-hurt-understanding-common-causes-of-heel-pain-and-what-you-can-do-about-it', img: '/images/site/blog-1.jpg' },
  { title: 'Foot Pain After Exercise: Here’s What You Might Be Doing Wrong', href: '/foot-pain-after-exercise-heres-what-you-might-be-doing-wrong', img: '/images/site/blog-2.jpg' },
];
