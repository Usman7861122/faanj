import { locations } from './site';

export interface LocalPage {
  id: string;
  city: string;
  address: string;
  phone: string;
  title: string;
  accent: string;
  lede: string;
  description: string;
  areas: string;
  heroAlt: string;
  whatTitle: string;
  what: string[];
  whatImgAlt: string;
  symptomsTitle: string;
  causesTitle: string;
  treatTitle: string;
  treatText: string;
  treatments: { t: string; d: string }[];
  treatImgAlt: string;
  tipsTitle: string;
  tips: string[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  locationsTitle: string;
}

const loc = (id: string) => locations.find((l) => l.id === id)!;
const sp = loc('scotch-plains');
const jc = loc('jersey-city');
const un = loc('union');

export const achillesLocalPages: LocalPage[] = [
  {
    id: 'scotch-plains',
    city: 'Scotch Plains',
    address: sp.address,
    phone: sp.phone,
    title: 'Achilles Tendonitis',
    accent: 'in Scotch Plains',
    lede: 'Heel pain on your morning walk or run? Get expert Achilles Tendonitis care in Scotch Plains from our board-certified foot & ankle team.',
    description:
      'Achilles Tendonitis in Scotch Plains, NJ. See our foot & ankle specialists at 2265 South Ave for diagnosis, non-surgical treatment and surgery only when needed.',
    areas:
      'Patients with Achilles Tendonitis are welcome from across Scotch Plains, Fanwood, Westfield, Plainfield, Cranford, Clark, Mountainside, Summit and the greater Union County area.',
    heroAlt: 'Achilles Tendonitis in Scotch Plains: runner holding a sore calf on a park path',
    whatTitle: 'What is Achilles Tendonitis?',
    what: [
      'Your Achilles is the thick tendon that links your calf muscle to your heel bone. It works hard with every step, jump and stride, which makes it one of the most common places for overuse pain.',
      'When the tendon gets irritated, you feel pain and stiffness at the back of the heel, often worst in the morning or at the start of a walk or run. Left alone, it can slow you down for months, so it pays to have it checked early.',
      'Many people from Scotch Plains, Fanwood and Westfield walk and jog on the local parks and trails, and that steady load can add up. At our Scotch Plains office, we look at your walking, your shoes and your training habits, then build a plan to treat your Achilles Tendonitis and get you back to your routine.',
    ],
    whatImgAlt: 'Achilles Tendonitis in Scotch Plains: doctor explaining a foot and ankle model to a patient',
    symptomsTitle: 'Signs of Achilles Tendonitis to watch for',
    causesTitle: 'What can cause Achilles Tendonitis?',
    treatTitle: 'How we treat Achilles Tendonitis in Scotch Plains',
    treatText:
      'Most patients get better without surgery. At our Scotch Plains office we start with gentle, proven steps and only talk about surgery if you are not improving.',
    treatments: [
      { t: 'A clear diagnosis', d: 'We examine your heel, calf and gait so your care starts with the real cause.' },
      { t: 'Relief and activity changes', d: 'You keep moving safely while the tendon calms down, with simple changes to your daily routine.' },
      { t: 'Stretching and strength work', d: 'A home plan for your calf and tendon, so your Achilles Tendonitis does not come back.' },
      { t: 'Shoes, heel lifts and orthotics', d: 'The right support takes strain off the tendon every time you stand, walk or run.' },
      { t: 'Advanced options and surgery', d: 'If your Achilles Tendonitis is severe, our surgeons will explain every option before you decide.' },
    ],
    treatImgAlt: 'Achilles Tendonitis treatment in Scotch Plains: resistance band ankle therapy',
    tipsTitle: 'Protect your Achilles: tips from our Scotch Plains office',
    tips: [
      'Warm up your calves before every walk, run or game',
      'Build up your mileage slowly, a little each week',
      'Replace worn shoes and pick a model with heel support',
      'Choose softer paths when you can, not only hard pavement',
      'Book a visit for Achilles Tendonitis in Scotch Plains as soon as heel pain lasts more than a few days',
    ],
    faqTitle: 'Achilles Tendonitis in Scotch Plains: common questions',
    faqs: [
      {
        q: 'Where can I get treated for Achilles Tendonitis in Scotch Plains?',
        a: `Our Scotch Plains office is at ${sp.address}. Call ${sp.phone} to book a visit for Achilles Tendonitis in Scotch Plains.`,
      },
      {
        q: 'Will I need surgery for Achilles Tendonitis?',
        a: 'Usually not. Most cases of Achilles Tendonitis improve with rest, stretching, better footwear and guided exercise. Surgery is kept for severe cases that do not respond.',
      },
      {
        q: 'How soon should I see a doctor about heel pain?',
        a: 'If the pain at the back of your heel lasts more than a few days, or it hurts to push off when you walk, it is a good time to be seen. Early care for Achilles Tendonitis is simpler.',
      },
    ],
    locationsTitle: 'Achilles Tendonitis in Scotch Plains, Jersey City and Union',
  },
  {
    id: 'jersey-city',
    city: 'Jersey City',
    address: jc.address,
    phone: jc.phone,
    title: 'Achilles Tendonitis',
    accent: 'in Jersey City',
    lede: 'Sore heel from city walking, commuting or the gym? Find Achilles Tendonitis treatment in Jersey City with our foot & ankle specialists.',
    description:
      'Achilles Tendonitis in Jersey City, NJ. Visit our Journal Square foot & ankle office for expert diagnosis and treatment of heel and Achilles tendon pain.',
    areas:
      'Patients with Achilles Tendonitis are welcome from across Jersey City, Journal Square, Hoboken, Bayonne, Newark, Weehawken, Union City, Secaucus and the greater Hudson County area.',
    heroAlt: 'Achilles Tendonitis in Jersey City: woman holding her calf and heel after a run',
    whatTitle: 'Why does my Achilles tendon hurt?',
    what: [
      'Life in Jersey City means a lot of steps. Commutes, stairs, long days on your feet and weekend runs along the waterfront all put load on your heel.',
      'Your Achilles tendon joins the calf muscle to the heel bone. When it is overworked, it becomes sore, stiff and sometimes swollen, and the pain can follow you through the whole day. This problem is called Achilles tendonitis.',
      'Our Journal Square office makes it easy to be seen. We find out why your tendon is irritated and give you a clear plan to feel better and keep moving around the city.',
    ],
    whatImgAlt: 'Achilles Tendonitis in Jersey City: foot and ankle specialist talking with a patient',
    symptomsTitle: 'How Achilles Tendonitis usually shows up',
    causesTitle: 'What triggers Achilles Tendonitis?',
    treatTitle: 'Our approach to Achilles Tendonitis in Jersey City',
    treatText:
      'You should not have to stop your life to heal. Our Jersey City care is built around simple, effective steps that fit your schedule.',
    treatments: [
      { t: 'Careful exam at Journal Square', d: 'We check the tendon, the calf and how you walk to understand what is causing your pain.' },
      { t: 'Smart rest and movement', d: 'We show you how to stay active on city streets and stairs without irritating the tendon.' },
      { t: 'Guided exercise', d: 'Easy calf stretches and strengthening you can do at home or at the gym.' },
      { t: 'Footwear and orthotics', d: 'Better shoes, heel lifts or custom orthotics for everyday walking on hard city surfaces.' },
      { t: 'Next-level treatment', d: 'For stubborn Achilles Tendonitis, we offer advanced therapy and surgical repair as a last step.' },
    ],
    treatImgAlt: 'Achilles Tendonitis in Jersey City: physical therapy with a red resistance band',
    tipsTitle: 'Everyday tips for Achilles Tendonitis in Jersey City',
    tips: [
      'Stretch your calves after long days of walking or standing',
      'Wear supportive shoes for commuting, not only for the gym',
      'Take the stairs at an easy pace if your heel is sore',
      'Add rest days between hard workouts',
      'Do not wait to call our Jersey City office if heel pain keeps coming back',
    ],
    faqTitle: 'Achilles Tendonitis in Jersey City: your questions answered',
    faqs: [
      {
        q: 'Where do I go for Achilles Tendonitis in Jersey City?',
        a: `Visit our Jersey City office at ${jc.address}. Call ${jc.phone} to book your Achilles Tendonitis appointment in Jersey City.`,
      },
      {
        q: 'Can I keep working while I treat Achilles Tendonitis?',
        a: 'In most cases, yes. We adjust your activity, shoes and exercises so you can keep up with work and daily life while the tendon heals.',
      },
      {
        q: 'What if the pain is only in the morning?',
        a: 'Morning heel stiffness is one of the classic signs of Achilles Tendonitis. It is worth getting it checked before it turns into constant pain.',
      },
    ],
    locationsTitle: 'Achilles Tendonitis in Jersey City, Scotch Plains and Union',
  },
  {
    id: 'union',
    city: 'Union',
    address: un.address,
    phone: un.phone,
    title: 'Achilles Tendonitis',
    accent: 'in Union',
    lede: 'Heel pain getting in the way of work, sport or family time? Our Union office treats Achilles Tendonitis with personal, modern care.',
    description:
      'Achilles Tendonitis in Union, NJ. Our Chestnut Street foot & ankle office offers expert care for Achilles tendon pain, from therapy to surgery when needed.',
    areas:
      'Patients with Achilles Tendonitis are welcome from across Union, Elizabeth, Springfield, Kenilworth, Roselle Park, Hillside, Maplewood, Irvington, Linden and the greater Union County area.',
    heroAlt: 'Achilles Tendonitis in Union: jogger with calf and heel pain on a park road',
    whatTitle: 'Is it Achilles Tendonitis?',
    what: [
      'If the back of your heel hurts when you walk, run or climb stairs, it may be Achilles tendonitis. It is one of the most frequent causes of heel and calf pain we see at our Union office.',
      'The Achilles is the strongest tendon in the body, but it can still become inflamed from sudden activity, tight calves or the wrong shoes. Pain, stiffness and swelling are the usual signs.',
      'Our Chestnut Street office is a friendly place to start. We explain what is going on in simple words and walk you through every step of treatment, so you know what to expect.',
    ],
    whatImgAlt: 'Achilles Tendonitis in Union: podiatrist reviewing a foot model with a senior patient',
    symptomsTitle: 'Common signs of Achilles Tendonitis',
    causesTitle: 'Common causes of Achilles Tendonitis',
    treatTitle: 'Treating Achilles Tendonitis in Union, step by step',
    treatText:
      'Our Union team builds a plan around your age, your activity and your goals. Most people recover with non-surgical care.',
    treatments: [
      { t: 'Friendly first visit', d: 'We listen, examine your heel and ankle, and explain what is causing your pain.' },
      { t: 'Protecting the tendon', d: 'Simple changes to your activity so the tendon can rest without you losing fitness.' },
      { t: 'Exercises that help', d: 'Calf stretches and strengthening that build a stronger, more flexible tendon.' },
      { t: 'Support for your feet', d: 'Heel lifts, orthotics and shoe advice that reduce pressure on the Achilles.' },
      { t: 'Surgery only if needed', d: 'For serious Achilles Tendonitis that does not improve, our surgeons can repair the tendon.' },
    ],
    treatImgAlt: 'Achilles Tendonitis in Union: ankle therapy using a resistance band',
    tipsTitle: 'Keep your Achilles healthy: tips from our Union office',
    tips: [
      'Stretch your calves gently each morning and evening',
      'Increase walking, running or sport slowly',
      'Swap out old shoes before the heel support wears down',
      'Rest when the back of your heel feels tight or sore',
      'Call our Union office about Achilles Tendonitis early, before the pain becomes constant',
    ],
    faqTitle: 'Achilles Tendonitis in Union: frequently asked questions',
    faqs: [
      {
        q: 'Where is your Union office for Achilles Tendonitis?',
        a: `We are at ${un.address}. Call ${un.phone} to book a visit for Achilles Tendonitis in Union.`,
      },
      {
        q: 'How long does Achilles Tendonitis take to heal?',
        a: 'It depends on how long you have had it and how well you follow your plan. Many people feel better within weeks, while long-standing cases can take longer.',
      },
      {
        q: 'Is walking okay with Achilles Tendonitis?',
        a: 'Gentle walking is often fine, but it depends on your pain. We will tell you what is safe at your visit so you do not make the tendon worse.',
      },
    ],
    locationsTitle: 'Achilles Tendonitis in Union, Scotch Plains and Jersey City',
  },
];
