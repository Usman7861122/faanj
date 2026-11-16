import { locations } from './site';
import { serviceContent } from './serviceContent';
import type { LocalPage } from './achillesLocal';

export type LocalService = LocalPage & { slug: string };

const cities = [
  {
    id: 'scotch-plains',
    city: 'Scotch Plains',
    areas: 'Scotch Plains, Fanwood, Westfield, Plainfield, Cranford, Clark, Mountainside, Summit and the greater Union County area',
  },
  {
    id: 'jersey-city',
    city: 'Jersey City',
    areas: 'Jersey City, Hoboken, Bayonne, Union City, Weehawken, Harrison, Kearny, Newark and the greater Hudson County area',
  },
  {
    id: 'union',
    city: 'Union',
    areas: 'Union, Springfield, Elizabeth, Hillside, Roselle Park, Kenilworth, Irvington, Maplewood and the greater Union County area',
  },
];

interface Spec {
  slug: string;
  short: string;
  alt: [string, string, string]; // hero, consult, treatment
  descEnd: string;
  // each array below is [Scotch Plains, Jersey City, Union]
  lede: [string, string, string];
  whatTitle: [string, string, string];
  what2: [string, string, string];
  what3: [string, string, string];
  symptomsTitle: [string, string, string];
  causesTitle: [string, string, string];
  treatTitle: [string, string, string];
  treatText: [string, string, string];
  tipsTitle: [string, string, string];
  lastTip: [string, string, string];
  faqs: [[string, string][], [string, string][], [string, string][]];
}

const specs: Spec[] = [
  {
    slug: 'gout',
    short: 'Gout',
    alt: ['man holding a red, swollen big toe', 'podiatrist checking a swollen foot', 'close view of a painful toe joint'],
    descEnd: 'fast relief from gout flare-ups, clear answers and a plan to prevent the next one',
    lede: [
      'Woke up with a hot, swollen toe? Our Scotch Plains foot & ankle team calms a gout flare-up fast and helps keep it from returning.',
      'A sudden, throbbing toe can stop your whole day. Our Jersey City office treats gout quickly, so you can get back to work and your commute.',
      'Severe toe pain that came out of nowhere? Our Union office finds out if it is gout and starts easing the pain the same day.',
    ],
    whatTitle: ['Is it gout?', 'Why is my big toe so painful?', 'What causes a gout attack?'],
    what2: [
      'Gout happens when uric acid builds up and forms sharp crystals in a joint. The big toe is the favorite spot, and attacks often begin at night.',
      'Many people first think they hit their toe or sprained it. If the joint is red, hot and very tender, gout is a common reason.',
      'Uric acid is a normal waste product. When your body makes too much of it, or cannot clear it well, crystals can form and the joint swells.',
    ],
    what3: [
      'Our Scotch Plains office sees many patients whose flare-ups follow a big family meal or a stressful week. We look at your joint, your medicines and your diet, then plan the next steps with you.',
      'In Jersey City, long days on your feet and quick meals on the go can play a part. At our Journal Square Plaza office, we treat the pain first, then talk about simple ways to lower your risk.',
      'Our Union office is easy to reach from Chestnut Street. We test, treat the flare-up and work with your regular doctor on medicines that keep uric acid under control.',
    ],
    symptomsTitle: ['Signs of a gout attack', 'How gout feels', 'What a flare-up looks like'],
    causesTitle: ['Why gout flares up', 'What can set off gout', 'Common gout triggers'],
    treatTitle: ['How we calm gout in Scotch Plains', 'Gout care at our Jersey City office', 'Our approach to gout in Union'],
    treatText: [
      'The first goal is to ease the pain. After that, we help you lower the chance of another attack.',
      'You should not have to wait days to feel better. We start relief at your first visit and build a longer plan from there.',
      'Gout is manageable. We treat the attack and help you keep uric acid in a safer range for the long term.',
    ],
    tipsTitle: ['Keep gout away: tips from our Scotch Plains team', 'Simple gout tips for busy Jersey City days', 'Gout prevention tips from our Union office'],
    lastTip: [
      'Call our Scotch Plains office if a toe turns hot, red and sore overnight',
      'Call our Jersey City office early, since fast treatment shortens an attack',
      'Call our Union office when a joint swells up, even if the pain fades',
    ],
    faqs: [
      [
        ['Can I walk on a toe with gout?', 'You can usually walk a little, but it may hurt a lot. Rest the foot, avoid tight shoes and come in so we can ease the pain.'],
        ['Does gout go away on its own?', 'A single attack often fades in a week or two. Without a plan, it tends to return, and repeat attacks can damage the joint.'],
      ],
      [
        ['What foods should I limit?', 'Red meat, shellfish, sugary drinks and beer are common triggers. We give you a simple list that fits how you really eat.'],
        ['Is gout only in the big toe?', 'No. It can also affect the ankle, the midfoot and the knee, though the big toe is the most common place.'],
      ],
      [
        ['Do I need a blood test?', 'Often yes. A uric acid test helps, and in some cases we check the joint fluid for crystals to be sure.'],
        ['Will I need surgery?', 'Most people do not. Surgery is only for long-term gout that has damaged a joint or formed hard lumps.'],
      ],
    ],
  },
  {
    slug: 'hammer-toe',
    short: 'Hammer Toe',
    alt: ['bare feet showing curled toes', 'podiatrist examining a patient’s toes', 'two bare feet on a rug'],
    descEnd: 'gentle care first, and surgery only when your toe needs it',
    lede: [
      'A curled toe that rubs in your shoes? Our Scotch Plains team has gentle fixes and, when needed, a simple procedure to straighten it.',
      'Shoes pinching your toes on the way to work? Our Jersey City office can ease the pain and correct a hammer toe.',
      'Corns and sore toes holding you back? Our Union foot & ankle specialists help you walk comfortably again.',
    ],
    whatTitle: ['What is a hammer toe?', 'Why is my toe bending?', 'Is my bent toe a hammer toe?'],
    what2: [
      'A hammer toe bends at the middle joint and looks like a small claw. It usually affects the second, third or fourth toe.',
      'The muscles and tendons that keep a toe straight can get out of balance. Over time the toe curls and may stay that way.',
      'At first the toe can still be moved. Later it can get stiff, and shoes start to rub the top of the bent joint.',
    ],
    what3: [
      'Many of our Scotch Plains patients are on their feet in shops, schools and gardens. We check your toes, your shoes and the way you walk, then explain what will help most.',
      'City sidewalks and dress shoes are hard on toes. At our Jersey City office, we look at how your footwear fits and choose a plan that suits your day.',
      'Our Union office sees hammer toes in all ages. We take the time to show you your options, from pads and orthotics to a short procedure.',
    ],
    symptomsTitle: ['Signs of a hammer toe', 'What you may notice', 'How a hammer toe feels'],
    causesTitle: ['What bends the toe?', 'Why hammer toes form', 'Common reasons for hammer toe'],
    treatTitle: ['Hammer toe care in Scotch Plains', 'How we straighten toes in Jersey City', 'Treating hammer toe in Union'],
    treatText: [
      'Many people feel better with simple steps. If the toe is stiff and sore, surgery can fix its shape for good.',
      'We start with the least invasive options and only suggest surgery when it will truly help.',
      'Your plan depends on how flexible the toe is. We explain every option before you decide.',
    ],
    tipsTitle: ['Protect your toes: tips from our Scotch Plains team', 'Toe-friendly tips for Jersey City life', 'Hammer toe tips from our Union office'],
    lastTip: [
      'Visit our Scotch Plains office as soon as a toe starts to curl',
      'Visit our Jersey City office before a corn or sore turns into an open wound',
      'Visit our Union office if a bent toe is changing how you walk',
    ],
    faqs: [
      [
        ['Can a hammer toe be fixed without surgery?', 'Early on, often yes. Roomy shoes, pads and exercises can keep the toe flexible. A stiff toe may need a procedure.'],
        ['Is surgery hard to recover from?', 'It is usually a short outpatient procedure. Most patients walk soon after in a protective shoe, and we guide each step.'],
      ],
      [
        ['Are high heels a problem?', 'They can be. Heels push your toes forward into the front of the shoe, which can make a hammer toe worse.'],
        ['Why do I get corns on the toe?', 'The bent joint rubs against the shoe. We can remove the corn and help you stop the rubbing.'],
      ],
      [
        ['Does it run in families?', 'Foot shape can be inherited, so hammer toes sometimes run in families. Shoes and injuries also play a part.'],
        ['Should I see a doctor if it does not hurt?', 'It is wise. Treating a flexible toe early gives you more choices later.'],
      ],
    ],
  },
  {
    slug: 'ankle-injuries',
    short: 'Ankle Injuries',
    alt: ['runner holding an injured ankle', 'specialist examining an ankle', 'patient wearing a supportive ankle boot'],
    descEnd: 'in-office imaging, clear answers and a safe plan to get you moving again',
    lede: [
      'Rolled your ankle on a run or a step? Our Scotch Plains team finds out what happened and helps you heal the right way.',
      'A bad step on a busy street can mean more than a sprain. Our Jersey City office checks for breaks and treats ankle injuries fast.',
      'Swollen, painful ankle after a fall or game? Our Union office gives you a clear diagnosis and a plan the same visit.',
    ],
    whatTitle: ['Is my ankle sprained or broken?', 'What counts as an ankle injury?', 'Why does my ankle keep giving way?'],
    what2: [
      'A sprain stretches or tears the ligaments that hold your ankle steady. A fracture is a break in a bone. They can look alike, so an exam matters.',
      'Ankle injuries include sprains, breaks, tendon problems and long-term weakness. Most happen when the foot rolls or twists suddenly.',
      'If an old sprain never healed well, the ankle can feel loose and roll again and again. Proper care can rebuild its strength.',
    ],
    what3: [
      'Soccer fields, trails and icy steps are common places for injuries around Scotch Plains. We examine the ankle, take imaging in the office when needed and explain what we find.',
      'In Jersey City, curbs, stairs and crowded platforms lead to many twisted ankles. Our Journal Square Plaza office treats them quickly so you can get around safely.',
      'Our Union office sees injuries from sports, work and everyday falls. We build a plan that protects the ankle and fits your schedule.',
    ],
    symptomsTitle: ['Signs of an ankle injury', 'What you may feel', 'When an ankle needs a check'],
    causesTitle: ['How ankle injuries happen', 'What leads to an ankle injury?', 'Common causes'],
    treatTitle: ['Ankle injury care in Scotch Plains', 'How we treat ankle injuries in Jersey City', 'Healing an ankle in Union'],
    treatText: [
      'Most ankle injuries heal without surgery. We guide you step by step, from the first days to full activity.',
      'We start with a careful exam and imaging if needed, then choose the lightest treatment that works.',
      'Our goal is a strong, steady ankle. We protect it while it heals and then help you rebuild.',
    ],
    tipsTitle: ['Protect your ankles: tips from our Scotch Plains team', 'Ankle tips for Jersey City streets', 'Ankle safety tips from our Union office'],
    lastTip: [
      'Call our Scotch Plains office for any ankle that swells after a twist, even if you can walk',
      'Call our Jersey City office if you cannot put weight on your foot',
      'Call our Union office when an old sprain keeps coming back',
    ],
    faqs: [
      [
        ['How do I know if it is broken?', 'Strong pain over the bone, trouble standing on it or quick swelling can mean a break. An X-ray gives the answer.'],
        ['How long does a sprain take to heal?', 'Mild sprains often feel better in a few weeks. Worse ones can take longer, and good rehab helps prevent repeats.'],
      ],
      [
        ['Can I keep walking on a sprain?', 'Light walking can be fine for mild sprains. If it hurts a lot or looks bent, rest it and come in.'],
        ['Do you take X-rays?', 'Yes. We can check the bones and joint during your visit so you do not wait for answers.'],
      ],
      [
        ['Do I need a brace?', 'Often a brace or boot helps you heal and stops the ankle from rolling. We choose the right one for you.'],
        ['When is surgery needed?', 'Surgery is for serious breaks or ankles that stay unstable after proper treatment.'],
      ],
    ],
  },
  {
    slug: 'heel-pain',
    short: 'Heel Pain',
    alt: ['woman holding her sore heel', 'man holding the sole of his painful heel', 'person rubbing a painful heel and arch'],
    descEnd: 'a clear diagnosis and non-surgical care that works for most patients',
    lede: [
      'Stabbing pain with the first steps of the day? Our Scotch Plains foot & ankle team finds the cause and treats it.',
      'Heel pain slowing you down on the way to work? Our Jersey City office finds the cause and helps you walk comfortably.',
      'Heel hurting after work or exercise? Our Union specialists look past the pain to the real cause and treat it.',
    ],
    whatTitle: ['Why does my heel hurt?', 'What is behind heel pain?', 'Is my heel pain serious?'],
    what2: [
      'Heel pain has more than one cause. Plantar fasciitis, a heel spur, Achilles trouble and a stress fracture can all feel alike.',
      'The heel takes your full weight with every step. When something irritates it, the pain can be sharp, deep or burning.',
      'Most heel pain is not dangerous, but it will not always go away on its own. A short visit can save weeks of discomfort.',
    ],
    what3: [
      'Many people in Scotch Plains walk, run and stand on hard floors every day. We watch you stand and move, look at your shoes and tailor the plan to your routine.',
      'Walking the city all day, standing at work and riding the train can wear on your heels. At our Jersey City office, we find what is straining them and fix it.',
      'Our Union office sees heel pain in runners, nurses, factory workers and parents. We listen to your day, then choose care that fits.',
    ],
    symptomsTitle: ['Signs of heel pain', 'How heel pain shows up', 'What to look out for'],
    causesTitle: ['What causes heel pain?', 'Why your heel hurts', 'Common sources of heel pain'],
    treatTitle: ['Treating heel pain in Scotch Plains', 'Heel pain care at our Jersey City office', 'How we treat heel pain in Union'],
    treatText: [
      'Most heel pain gets better without surgery. We treat the cause, not just the pain.',
      'We start with simple, proven steps and add more only when you need them.',
      'Your plan fits your daily life, so you can keep working while you heal.',
    ],
    tipsTitle: ['Ease heel pain: tips from our Scotch Plains team', 'Heel tips for busy Jersey City days', 'Heel pain tips from our Union office'],
    lastTip: [
      'Do not wait months. Visit our Scotch Plains office when heel pain lasts a week or more',
      'Visit our Jersey City office early, since heel pain heals faster when treated sooner',
      'Visit our Union office if your heel hurts at night or even at rest',
    ],
    faqs: [
      [
        ['Why is it worst in the morning?', 'The tissue under your foot tightens overnight. The first steps stretch it suddenly, and that can hurt.'],
        ['Will shoe inserts help?', 'Often yes. Good arch support spreads pressure away from the heel. We can fit custom orthotics if you need them.'],
      ],
      [
        ['Can I keep exercising?', 'Usually with changes. We help you choose low-impact options while the heel recovers.'],
        ['Is heel pain a sign of something serious?', 'Usually not, but swelling, redness or pain at rest should be checked soon.'],
      ],
      [
        ['How long does it take to heal?', 'Many people improve within weeks of starting treatment. Longer-lasting cases can take a few months.'],
        ['Do I need an X-ray?', 'Sometimes. It helps us rule out a spur or a stress fracture.'],
      ],
    ],
  },
  {
    slug: 'heel-spur',
    short: 'Heel Spur',
    alt: ['doctor holding a foot X-ray', 'foot scan during an exam', 'doctor reviewing an X-ray with a patient'],
    descEnd: 'in-office X-rays, non-surgical care and surgery only when truly needed',
    lede: [
      'Sharp pain under your heel with every step? Our Scotch Plains team uses a quick X-ray to find a spur and a plan to ease it.',
      'Feels like a stone in your shoe? Our Jersey City office checks for a heel spur and treats the pain behind it.',
      'A painful bump under the heel? Our Union foot & ankle specialists confirm the cause and get you comfortable.',
    ],
    whatTitle: ['Do I have a heel spur?', 'What is a heel spur, and does it hurt?', 'Why does my heel feel like a stone?'],
    what2: [
      'A heel spur is a small bony growth on the underside of the heel bone. It forms slowly, over months or years.',
      'Many spurs cause no pain. The pain comes from the soft tissue around the spur, which gets irritated and inflamed.',
      'An X-ray can show the spur. Even when the spur stays, treating the inflammation usually brings relief.',
    ],
    what3: [
      'Our Scotch Plains office has X-ray imaging on site, so you can get answers during your visit. We then explain the picture and the plan in plain words.',
      'In Jersey City, long days on hard floors and pavement can add strain to your heels. We take an X-ray if needed and plan care around your schedule.',
      'At our Union office, we see heel spurs in active people and in those on their feet at work. Most find relief without surgery.',
    ],
    symptomsTitle: ['Signs of a heel spur', 'What a spur can feel like', 'Heel spur symptoms'],
    causesTitle: ['Why heel spurs form', 'What leads to a heel spur?', 'Common causes of heel spurs'],
    treatTitle: ['Heel spur care in Scotch Plains', 'How we treat heel spurs in Jersey City', 'Easing a heel spur in Union'],
    treatText: [
      'We treat the pain and the cause together. Most patients get better with non-surgical care.',
      'The spur itself is rarely the problem. We calm the inflamed tissue around it and take pressure off your heel.',
      'We try simple steps first. If months of care do not help, we talk through surgery with you.',
    ],
    tipsTitle: ['Keep spurs from hurting: tips from our Scotch Plains team', 'Heel spur tips for Jersey City life', 'Heel spur tips from our Union office'],
    lastTip: [
      'See our Scotch Plains office if heel pain lasts more than a few weeks',
      'See our Jersey City office when a sharp heel pain keeps returning',
      'See our Union office before heel pain changes the way you walk',
    ],
    faqs: [
      [
        ['Do I have to remove the spur?', 'Usually not. Treating the inflamed tissue often relieves the pain, even if the spur is still there.'],
        ['Will an X-ray show it?', 'Yes. A spur shows clearly on an X-ray, and we can take one in the office.'],
      ],
      [
        ['Is a heel spur the same as plantar fasciitis?', 'They are linked but not the same. Plantar fasciitis is irritation of the band under the foot, and a spur can form where it pulls.'],
        ['What helps at home?', 'Calf stretches, cushioned shoes and heel pads help. We also show you easy exercises for your foot.'],
      ],
      [
        ['How long will it take to feel better?', 'Many people feel better in weeks. Some need a few months, depending on the case.'],
        ['When is surgery an option?', 'Only if months of non-surgical care have not worked. Surgery is uncommon for spurs.'],
      ],
    ],
  },
  {
    slug: 'ingrown-toenail',
    short: 'Ingrown Toenail',
    alt: ['podiatrist treating an ingrown toenail', 'podiatrist carefully treating a toenail', 'toenail treated with a small instrument'],
    descEnd: 'quick in-office relief and a lasting fix with little downtime',
    lede: [
      'A toenail digging into your skin? Our Scotch Plains team treats it quickly and gently, often in a single visit.',
      'Painful toe in your work shoes? Our Jersey City office relieves an ingrown toenail fast, so you can get back to your day.',
      'Red, sore toe that will not settle? Our Union foot & ankle specialists treat it and help stop it from returning.',
    ],
    whatTitle: ['Is it an ingrown toenail?', 'Why is my toenail so painful?', 'What is an ingrown toenail?'],
    what2: [
      'An ingrown toenail happens when the edge of the nail grows into the skin beside it. The big toe is most often affected.',
      'It starts as tenderness and can turn into redness, swelling and infection. Do not cut it out yourself.',
      'The nail edge pushes into the skin, which hurts and can let germs in. Treating it early is simpler and more comfortable.',
    ],
    what3: [
      'At our Scotch Plains office, we numb the toe first, so treatment is comfortable. Many patients walk out feeling much better.',
      'In Jersey City, tight dress shoes and long days on your feet are common culprits. We treat the nail and give you simple tips to prevent it.',
      'Our Union office treats ingrown nails for children, adults and seniors. We choose the gentlest fix that will last.',
    ],
    symptomsTitle: ['Signs of an ingrown toenail', 'What to look for', 'How it feels'],
    causesTitle: ['Why toenails grow in', 'What causes ingrown nails?', 'Common causes'],
    treatTitle: ['Ingrown toenail care in Scotch Plains', 'Treating ingrown toenails in Jersey City', 'How we fix ingrown nails in Union'],
    treatText: [
      'Most ingrown nails are treated in the office in one short visit, and we keep you comfortable throughout.',
      'We choose the simplest option that will work, from nail lifting to a small partial nail removal.',
      'If it keeps coming back, we can fix the nail edge so the problem stays away.',
    ],
    tipsTitle: ['Prevent ingrown nails: tips from our Scotch Plains team', 'Toenail tips for Jersey City life', 'Ingrown nail tips from our Union office'],
    lastTip: [
      'Call our Scotch Plains office if the toe is red, swollen or draining',
      'Call our Jersey City office instead of digging at the nail yourself',
      'Call our Union office if you have diabetes and notice any toenail problem',
    ],
    faqs: [
      [
        ['Does the treatment hurt?', 'We numb the toe first, so you should feel pressure but not pain. Mild soreness can follow for a day or two.'],
        ['Can I go to work afterward?', 'Most people can. We tell you which shoes to wear while the toe heals.'],
      ],
      [
        ['Should I cut it out at home?', 'No. Cutting it yourself can leave a sharp edge behind and cause infection. Soak the foot and call us.'],
        ['How do I know it is infected?', 'Spreading redness, warmth, pus or fever are warning signs. Call us right away.'],
      ],
      [
        ['Will it come back?', 'It can, especially with curved nails or tight shoes. For repeat cases, we offer a lasting fix.'],
        ['Is it safe with diabetes?', 'You should not treat it at home. Come in so we can care for it safely.'],
      ],
    ],
  },
  {
    slug: 'athletes-foot',
    short: 'Athlete’s Foot',
    alt: ['toes with dry, peeling skin', 'feet with dry, flaky skin', 'hands checking the skin between the toes'],
    descEnd: 'an accurate diagnosis, effective treatment and tips to keep it from coming back',
    lede: [
      'Itchy, peeling skin between your toes? Our Scotch Plains team confirms the cause and clears it with the right treatment.',
      'Itching that will not stop after the gym or a long day? Our Jersey City office finds out what is going on and treats it.',
      'Cracked, flaky feet that keep coming back? Our Union specialists treat athlete’s foot and help you keep it away.',
    ],
    whatTitle: ['Is it athlete’s foot?', 'Why are my feet so itchy?', 'What is athlete’s foot?'],
    what2: [
      'Athlete’s foot is a common fungal infection of the skin on the feet. Doctors call it tinea pedis.',
      'The fungus loves warm, damp places, so it often starts between the toes. It can spread to the soles and the nails.',
      'Other skin problems can look the same, so a proper check matters. The right medicine clears it much faster.',
    ],
    what3: [
      'Pools, gyms and school locker rooms around Scotch Plains are common places to pick it up. We confirm the cause and explain how to stop it from spreading in your home.',
      'In Jersey City, sweaty shoes, long commutes and shared gym spaces can keep feet damp. We treat the infection and suggest easy habits that keep feet dry.',
      'Our Union office treats athlete’s foot in athletes, workers and families. We make sure the whole course of treatment is clear and simple.',
    ],
    symptomsTitle: ['Signs of athlete’s foot', 'What it looks like', 'How athlete’s foot feels'],
    causesTitle: ['How athlete’s foot spreads', 'What causes it?', 'Common causes'],
    treatTitle: ['Athlete’s foot treatment in Scotch Plains', 'How we clear athlete’s foot in Jersey City', 'Treating athlete’s foot in Union'],
    treatText: [
      'We confirm that it is a fungus, then treat it with the right medicine.',
      'Most cases clear up well when you finish the full course of treatment.',
      'If it keeps coming back, we look for the cause, such as damp shoes or a nail infection.',
    ],
    tipsTitle: ['Keep your feet healthy: tips from our Scotch Plains team', 'Athlete’s foot tips for Jersey City life', 'Athlete’s foot tips from our Union office'],
    lastTip: [
      'Visit our Scotch Plains office if store-bought creams have not worked',
      'Visit our Jersey City office when the itching keeps returning',
      'Visit our Union office if the skin is cracked, painful or the nails look yellow',
    ],
    faqs: [
      [
        ['Is athlete’s foot contagious?', 'Yes. It can spread through floors, towels and shared shoes. Keep your feet covered in shared spaces.'],
        ['How long does treatment take?', 'Many people see improvement in a few weeks, but you should finish the full course so the fungus does not return.'],
      ],
      [
        ['Why does it come back?', 'Damp shoes and socks help the fungus return. We help you find and fix the cause.'],
        ['Can it spread to my toenails?', 'Yes. Nail infections are harder to clear, so it is best to treat athlete’s foot early.'],
      ],
      [
        ['Do I need a prescription?', 'Mild cases can respond to store-bought creams. Stubborn cases need stronger treatment from us.'],
        ['Is it more serious with diabetes?', 'Yes. Cracked skin can let bacteria in, so please see us early.'],
      ],
    ],
  },
];

const loc = (id: string) => locations.find((l) => l.id === id)!;

export const serviceLocalPages: LocalService[] = specs.flatMap((s) => {
  const base = serviceContent.find((c) => c.slug === s.slug)!;
  return cities.map((c, i) => {
    const l = loc(c.id);
    const lower = s.short.toLowerCase();
    return {
      slug: s.slug,
      id: c.id,
      city: c.city,
      address: l.address,
      phone: l.phone,
      title: s.short,
      accent: `in ${c.city}`,
      lede: s.lede[i],
      description: `${s.short} in ${c.city}, NJ. See our foot & ankle specialists at ${l.address} for ${s.descEnd}.`,
      areas: `Patients are welcome from across ${c.areas}.`,
      heroAlt: `${s.short} in ${c.city}: ${s.alt[0]}`,
      whatTitle: s.whatTitle[i],
      what: [base.what[0], s.what2[i], s.what3[i]],
      whatImgAlt: `${s.short} in ${c.city}: ${s.alt[1]}`,
      symptomsTitle: s.symptomsTitle[i],
      causesTitle: s.causesTitle[i],
      treatTitle: s.treatTitle[i],
      treatText: s.treatText[i],
      treatments: base.treatments,
      treatImgAlt: `${s.short} treatment in ${c.city}: ${s.alt[2]}`,
      tipsTitle: s.tipsTitle[i],
      tips: [...base.tips.slice(0, 4), s.lastTip[i]],
      faqTitle: `Questions about ${lower} in ${c.city}`,
      faqs: [
        ...s.faqs[i].map(([q, a]) => ({ q, a })),
        { q: `Where is your ${c.city} office?`, a: `We are at ${l.address}. Call ${l.phone} to book, or use the appointment button on this page.` },
      ],
      locationsTitle: `Get ${lower} care in ${c.city} or nearby`,
    };
  });
});
