// Hero photo for each area, and links from a condition to our main service pages
export const regionImages: Record<string, { img: string; alt: string; position: string }> = {
  'Toes and Toenails': { img: '/images/services/ingrown-toenail/exam.jpg', alt: 'Podiatrist examining a patient’s toes', position: 'center 55%' },
  'Ball of the Foot and Metatarsals': { img: '/images/services/hammer-toe/exam.jpg', alt: 'Podiatrist examining the front of a patient’s foot', position: 'center 55%' },
  'Midfoot and Arch': { img: '/images/practice/orthotics.jpg', alt: 'Foot specialist checking a patient’s arch and orthotics', position: 'center 55%' },
  'Heel and Hindfoot': { img: '/images/services/heel-pain/exam.jpg', alt: 'Podiatrist examining a patient’s heel', position: 'center 55%' },
  'Ankle': { img: '/images/services/ankle-injuries/exam.jpg', alt: 'Specialist examining a patient’s ankle', position: 'center 55%' },
  'Conditions Affecting Multiple Areas': { img: '/images/practice/consult.jpg', alt: 'Foot and ankle specialist talking with a patient', position: 'center 50%' },
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

// Photo for a single condition page (served from /images/conditions/<slug>.jpg). Missing ones fall back to the area photo.
import { conditions } from './conditions';
export const conditionImages: Record<string, string> = {};
// filled at build time by checking which files exist is not possible in the browser, so list the slugs that have photos:
export const slugsWithPhoto = new Set<string>([]);
