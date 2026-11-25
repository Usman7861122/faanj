// Area photos used until a page has its own photos (same style as the service pages: hero, exam, therapy)
const S = '/images/services';
const t = (hero: string, about: string, treat: string, alt: string) => ({ hero, about, treat, alt });
export const regionImages: Record<string, { hero: string; about: string; treat: string; alt: string }> = {
  'Toes and Toenails': t(`${S}/ingrown-toenail/hero.jpg`, `${S}/ingrown-toenail/exam.jpg`, `${S}/ingrown-toenail/therapy.jpg`, 'Toe and toenail care at a podiatry office'),
  'Ball of the Foot and Metatarsals': t(`${S}/hammer-toe/hero.jpg`, `${S}/hammer-toe/exam.jpg`, `${S}/hammer-toe/therapy.jpg`, 'Forefoot examination at a podiatry office'),
  'Midfoot and Arch': t(`${S}/heel-spur/hero.jpg`, `${S}/heel-spur/exam.jpg`, `${S}/heel-spur/therapy.jpg`, 'Arch and midfoot care at a podiatry office'),
  'Heel and Hindfoot': t(`${S}/heel-pain/hero.jpg`, `${S}/heel-pain/exam.jpg`, `${S}/heel-pain/therapy.jpg`, 'Heel examination at a podiatry office'),
  'Ankle': t(`${S}/ankle-injuries/hero.jpg`, `${S}/ankle-injuries/exam.jpg`, `${S}/ankle-injuries/therapy.jpg`, 'Ankle examination at a podiatry office'),
  'Conditions Affecting Multiple Areas': t(`${S}/athletes-foot/hero.jpg`, `${S}/athletes-foot/exam.jpg`, `${S}/athletes-foot/therapy.jpg`, 'Foot and ankle consultation at a podiatry office'),
};

export const relatedService: Record<string, string> = {
  'hammertoe-mallet-toe-and-claw-toe': 'hammer-toe',
  'ingrown-toenails': 'ingrown-toenail',
  'plantar-fasciitis-and-plantar-fasciosis': 'heel-pain',
  'heel-pain-and-symptomatic-heel-spurs': 'heel-spur',
  'achilles-tendinopathy': 'achilles-tendonitis',
  'ankle-sprains-and-ligament-injuries': 'ankle-injuries',
  'gout-and-inflammatory-arthritis': 'gout',
  'athletes-foot-and-other-fungal-skin-conditions': 'athletes-foot',
};

