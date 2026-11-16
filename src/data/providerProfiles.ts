// Content for each provider page. Wording comes from the live site's provider bios.
export type Step = { i: string; k: string; t: string; d: string };
export type Profile = {
  slug: string;
  short: string; // "Dr. Patel"
  title: string; // page H1
  lede: string;
  description: string;
  hero: string;
  heroAlt: string;
  heroPos: string;
  heading: string;
  about: string[];
  summary: string; // one line for cards
  focusTitle: string;
  focus: { t: string; i: string }[];
  sectionImg: string;
  sectionAlt: string;
  trainingEyebrow?: string;
  trainingTitle: string;
  steps: Step[];
  personal?: string;
  offices: string[];
};

export const profiles: Profile[] = [
  {
    slug: 'patel',
    short: 'Dr. Patel',
    title: 'Dr. Krupa Patel',
    lede: 'A podiatrist and surgeon who treats bunions, hammertoes and diabetic foot problems at our Scotch Plains and Union offices.',
    description: 'Meet Dr. Krupa Patel, DPM, FACFAS, podiatrist and foot and ankle surgeon at Foot & Ankle Specialists of New Jersey in Scotch Plains and Union, NJ.',
    hero: '/images/providers/surgery-hero.jpg',
    heroAlt: 'Surgeons working together in a bright operating room',
    heroPos: 'center 45%',
    heading: 'Skilled surgery. Caring, steady attention.',
    about: [
      'Dr. Krupa Patel is a talented podiatrist who practices at the Scotch Plains and Union, New Jersey offices of Foot & Ankle Specialists of New Jersey.',
      'She specializes in podiatric surgeries, diabetic foot wounds, and treatments for bunions, hammertoes, and diabetic issues including wound care, infections, and poor circulation.',
      'Dr. Patel is dedicated to providing excellent care to all of her patients.',
    ],
    summary: 'Podiatric surgery, diabetic foot wounds, bunions and hammertoes.',
    focusTitle: 'What Dr. Patel treats',
    focus: [
      { t: 'Podiatric surgery', i: 'scissors' },
      { t: 'Diabetic foot wounds', i: 'drop' },
      { t: 'Bunions', i: 'feet' },
      { t: 'Hammertoes', i: 'feet' },
      { t: 'Wound care, infections and poor circulation', i: 'pulse' },
    ],
    sectionImg: '/images/providers/wound-care.jpg',
    sectionAlt: 'Podiatrist wearing gloves dressing a patient’s toes',
    trainingTitle: 'An outstanding student, now an experienced surgeon',
    steps: [
      { i: 'cap', k: 'Undergraduate', t: 'New York University', d: 'Bachelor’s degree.' },
      { i: 'award', k: 'Medical school', t: 'New York College of Podiatric Medicine', d: 'Doctor of Podiatric Surgery and Medicine, graduating at the top of her class. Winner of several awards, including the ABMPS Diabetic Wound Care Award.' },
      { i: 'steth', k: 'Residency', t: 'Morristown Memorial Hospital', d: 'Residency, where she became chief resident and performed over 1,500 foot and ankle surgeries.' },
      { i: 'flask', k: 'Research', t: 'Published research', d: 'Additional research on diabetic foot wounds and on surgical treatment for bunions.' },
    ],
    personal: 'When she is not practicing podiatry, Dr. Patel enjoys reading, going to the movies, and spending time with her husband and two sons.',
    offices: ['Scotch Plains', 'Union'],
  },
  {
    slug: 'mgbako',
    short: 'Dr. Mgbako',
    title: 'Dr. Obinna O. Mgbako',
    lede: 'Limb salvage, diabetic wound care and reconstructive foot and ankle surgery, including minimally invasive and arthroscopic techniques.',
    description: 'Meet Dr. Obinna O. Mgbako, DPM, FACFAS, FAPWCA, podiatrist and foot and ankle surgeon at Foot & Ankle Specialists of New Jersey in Scotch Plains and Union, NJ.',
    hero: '/images/practice/hero.jpg',
    heroAlt: 'Bright, modern reception area at a podiatry office in New Jersey',
    heroPos: 'center 60%',
    heading: 'Limb salvage, wound care and reconstructive surgery',
    about: [
      'Dr. Obinna Mgbako is a gifted podiatrist providing care to patients at the Scotch Plains & Union, New Jersey offices of Foot & Ankle Specialists of New Jersey.',
      'Dr. Mgbako is certified to treat all foot and ankle pathology and specializes in lower leg limb salvage, diabetic wound care, and reconstructive and reparative foot and ankle surgery including minimally invasive and arthroscopic techniques.',
      'He takes a special interest in treating sports-related injuries and enjoys learning new insights to sports medicine, putting them into practice for the benefit of his patients.',
    ],
    summary: 'Lower leg limb salvage, diabetic wound care and reconstructive surgery.',
    focusTitle: 'What Dr. Mgbako treats',
    focus: [
      { t: 'All foot and ankle pathology', i: 'feet' },
      { t: 'Lower leg limb salvage', i: 'shield' },
      { t: 'Diabetic wound care', i: 'drop' },
      { t: 'Reconstructive and reparative surgery', i: 'scissors' },
      { t: 'Minimally invasive and arthroscopic techniques', i: 'scissors' },
      { t: 'Sports-related injuries', i: 'activity' },
    ],
    sectionImg: '/images/providers/ankle-rehab.jpg',
    sectionAlt: 'Clinician examining a patient’s foot and ankle',
    trainingTitle: 'Training and professional memberships',
    steps: [
      { i: 'cap', k: 'Undergraduate', t: 'New York University', d: 'Bachelor’s degree.' },
      { i: 'award', k: 'Medical school', t: 'New York College of Podiatric Medicine', d: 'Doctor of Podiatric Surgery and Medicine.' },
      { i: 'steth', k: 'Residency', t: 'Morristown Memorial Hospital', d: 'Surgical residency.' },
      { i: 'users', k: 'Memberships', t: 'Professional organizations', d: 'Fellow of the American Professional Wound Care Association, associate member of the American College of Foot and Ankle Surgeons, and member of the American Diabetes Association, the American Podiatric Medical Association, the American Podiatric Association of Sports Medicine, and the American Academy of Podiatric Practice Management.' },
    ],
    offices: ['Scotch Plains', 'Union'],
  },
  {
    slug: 'yu-ching',
    short: 'Dr. Chi',
    title: 'Dr. Yu-Ching Terence Chi',
    lede: 'A board-certified podiatric surgeon treating all aspects of foot and ankle conditions with skill and compassion.',
    description: 'Meet Dr. Yu-Ching Terence Chi, DPM, FACFAS, board-certified podiatric surgeon at Foot & Ankle Specialists of New Jersey in Westfield and Union, NJ.',
    hero: '/images/providers/surgery-hero.jpg',
    heroAlt: 'Surgeons working together in a bright operating room',
    heroPos: 'center 30%',
    heading: 'Surgical training and a broad foot and ankle practice',
    about: [
      'Yu-Ching Terence Chi, DPM, is a board-certified podiatric surgeon at Foot and Ankle Specialists of NJ, offering expert care in Westfield and Union, New Jersey.',
      'His experience spans pediatric emergencies, vascular conditions, and sports medicine, including care for Division I athletes.',
      'Dr. Chi is dedicated to treating all aspects of foot and ankle conditions with skill and compassion.',
    ],
    summary: 'Podiatric surgery, pediatric emergencies, vascular conditions and sports medicine.',
    focusTitle: 'What Dr. Chi treats',
    focus: [
      { t: 'Podiatric surgery', i: 'scissors' },
      { t: 'Pediatric emergencies', i: 'smile' },
      { t: 'Vascular conditions', i: 'pulse' },
      { t: 'Sports medicine, including Division I athletes', i: 'activity' },
      { t: 'All aspects of foot and ankle conditions', i: 'feet' },
    ],
    sectionImg: '/images/practice/exam.jpg',
    sectionAlt: 'Podiatrist examining a patient’s foot',
    trainingTitle: 'Education and surgical training',
    steps: [
      { i: 'cap', k: 'Undergraduate', t: 'Tulane University', d: 'Undergraduate degree in music composition.' },
      { i: 'award', k: 'Medical school', t: 'New York College of Podiatric Medicine', d: 'Doctorate, where he received the president’s award for excellence.' },
      { i: 'steth', k: 'Residency', t: 'Northwell-Long Island Jewish Medical Center and North Shore University Hospital', d: 'A comprehensive three-year surgical residency.' },
      { i: 'users', k: 'Teaching', t: 'Lenox Hill Hospital', d: 'Trained residents at Lenox Hill Hospital.' },
    ],
    offices: ['Westfield', 'Union'],
  },
  {
    slug: 'kozin',
    short: 'Dr. Kozin',
    title: 'Dr. Lara Kozin',
    lede: 'A board-certified podiatrist who specializes in sports-related injuries, with a conservative-first approach to care.',
    description: 'Meet Dr. Lara Kozin, DPM, FACFAS, board-certified podiatrist at Foot & Ankle Specialists of New Jersey, seeing patients in Westfield, Union and Morristown, NJ.',
    hero: '/images/providers/running-hero.jpg',
    heroAlt: 'A runner jogging along a country road at sunrise',
    heroPos: 'center 55%',
    heading: 'Sports-minded care, conservative first',
    about: [
      'Lara Kozin, DPM, is a board-certified podiatrist joining Foot and Ankle Specialists of New Jersey, seeing patients in Westfield, Union, and Morristown.',
      'She specializes in sports-related injuries and treats conditions like plantar fasciitis, ankle sprains, and tendon tears with a conservative-first approach.',
    ],
    summary: 'Sports-related injuries, plantar fasciitis, ankle sprains and tendon tears.',
    focusTitle: 'What Dr. Kozin treats',
    focus: [
      { t: 'Sports-related injuries', i: 'activity' },
      { t: 'Plantar fasciitis', i: 'feet' },
      { t: 'Ankle sprains', i: 'bandage' },
      { t: 'Tendon tears', i: 'bandage' },
      { t: 'A conservative-first approach', i: 'pulse' },
    ],
    sectionImg: '/images/practice/orthotics.jpg',
    sectionAlt: 'Podiatrist fitting a custom orthotic insole for a patient',
    trainingTitle: 'From the lacrosse field to the operating room',
    steps: [
      { i: 'cap', k: 'Undergraduate', t: 'Tufts University', d: 'Where she was an All-American lacrosse player.' },
      { i: 'award', k: 'Medical school', t: 'New York College of Podiatric Medicine', d: 'Doctorate in podiatric medicine.' },
      { i: 'steth', k: 'Residency', t: 'Hoboken University Medical Center', d: 'A rigorous three-year surgical residency with extensive training in foot and ankle surgery.' },
    ],
    personal: 'Outside of work, Dr. Kozin enjoys running, hiking, skiing, playing tennis, watching movies, and reading.',
    offices: ['Westfield', 'Union', 'Morristown'],
  },
];
