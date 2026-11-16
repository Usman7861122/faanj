import { moreServices } from './moreServices';

export interface ServiceContent {
  slug: string;
  title: string;
  lede: string;
  description: string;
  hero: string;
  heroAlt: string;
  heroPos?: string;
  whatTitle: string;
  what: string[];
  whatImg: string;
  whatImgAlt: string;
  areas: string;
  symptomsTitle: string;
  symptoms: { t: string; d: string }[];
  causesTitle: string;
  causes: string[];
  treatTitle: string;
  treatText: string;
  treatments: { t: string; d: string }[];
  treatImg: string;
  treatImgAlt: string;
  tipsTitle: string;
  tips: string[];
}

const base: ServiceContent[] = [
  {
    slug: 'achilles-tendonitis',
    title: 'Achilles Tendonitis',
    lede: 'Heel and calf pain that slows you down? Our foot & ankle specialists find the cause and help you move comfortably again.',
    description:
      'Treatment for Achilles tendonitis in Scotch Plains, Jersey City and Union, NJ. Expert diagnosis, non-surgical care and surgery only when needed.',
    hero: '/images/services/achilles/hero.jpg',
    heroAlt: 'Runner holding her ankle with Achilles tendon pain',
    heroPos: '50% 40%',
    whatTitle: 'What is Achilles tendonitis?',
    what: [
      'The Achilles tendon is the strong cord that connects your calf muscles to your heel bone. You use it every time you walk, run or jump.',
      'Achilles tendonitis happens when this tendon becomes irritated and inflamed. It often starts as a mild ache and gets worse if it is ignored.',
      'The good news: most people get better with the right care. The earlier you come in, the simpler the treatment usually is.',
    ],
    whatImg: '/images/services/achilles/exam.jpg',
    whatImgAlt: 'Podiatrist examining a patient’s foot and ankle',
    areas:
      'Patients are welcome from across Scotch Plains, Jersey City, Union, Westfield, Plainfield, Elizabeth, Hoboken, Newark and the greater Union and Hudson County areas.',
    symptomsTitle: 'Common signs to watch for',
    symptoms: [
      { t: 'Pain at the back of the heel', d: 'A dull ache or burning feeling above the heel, often worse after activity.' },
      { t: 'Morning stiffness', d: 'The tendon feels tight and sore when you take your first steps of the day.' },
      { t: 'Swelling or thickening', d: 'The area may look puffy, or you may feel a small lump along the tendon.' },
      { t: 'Pain when you push off', d: 'Walking uphill, climbing stairs or running becomes uncomfortable.' },
    ],
    causesTitle: 'What can cause it?',
    causes: [
      'Sudden increase in running, walking or sports activity',
      'Tight calf muscles or not warming up',
      'Worn-out shoes or shoes without good heel support',
      'Flat feet or other foot structure problems',
      'Hill running or hard surfaces',
      'Age, since tendons lose flexibility over time',
    ],
    treatTitle: 'How we treat it',
    treatText:
      'Your treatment is built around you. Most patients heal with simple, non-surgical steps. Surgery is only considered when other care has not worked.',
    treatments: [
      { t: 'Rest and activity changes', d: 'We help you stay active in ways that do not strain the tendon while it heals.' },
      { t: 'Stretching and strengthening', d: 'Guided exercises that make the calf and tendon stronger and more flexible.' },
      { t: 'Supportive footwear and orthotics', d: 'Heel lifts, custom orthotics or better shoes take pressure off the tendon.' },
      { t: 'Advanced therapies', d: 'Options such as injections or other in-office treatments when they are the right fit.' },
      { t: 'Surgery when needed', d: 'For severe or long-lasting cases, our surgeons repair the damaged tendon.' },
    ],
    treatImg: '/images/services/achilles/therapy.jpg',
    treatImgAlt: 'Specialist gently stretching a patient’s ankle during therapy',
    tipsTitle: 'Simple ways to protect your Achilles',
    tips: [
      'Warm up and stretch your calves before exercise',
      'Increase activity slowly, not all at once',
      'Wear shoes that fit well and support your heel',
      'Mix hard workouts with lower-impact days',
      'Do not ignore heel pain. Call us early.',
    ],
  },
];

export const serviceContent: ServiceContent[] = [...base, ...moreServices];
