export interface Review {
  name: string;
  date: string; // MM/DD/YY, as submitted
  text: string;
  doctor?: string;
}

const raw: [string, string, string][] = [
  ['Nicholas C.', '04/17/25', 'I had a fairly urgent need. The staff scheduled me in asap. Dr. Kozin is just the best and I recommend this practice to anyone and everyone.'],
  ['Brian B.', '04/16/25', 'Dr Chi is first rate highly professional has helped with my leg and foot issues'],
  ['Margarita G.', '04/15/25', 'Thank you for Great service'],
  ['Shirley L.', '04/15/25', 'Best Drs around for foot and ankle issues. You are also seen within a few minutes. This group has no long wait times!!! I would definitely recommend them hands down. Shirley'],
  ['Arlene C.', '04/14/25', 'Absolutely excellent . She is a great doctor.'],
  ['Susan S.', '04/13/25', 'Dr. Chi does an amazing job of taking care of my feet as I am a diabetic. He explains things in an easy to understand way. I walk out of my appointment feeling like I am walking on air. I highly revommend Dr. Chi.'],
  ['James P.', '04/12/25', 'Great sevevice.true professionals'],
  ['Nancy C.', '04/12/25', 'As a professional dancer, I was very appreciative of the time and attention Dr. Chi took to get to the root of the issue. He is extremely knowledgeable and thorough. I also had to bring my toddler to the appointment and the medical assistants and front desk staff were all incredibly kind and helpful. Cannot recommend highly enough!'],
  ['Regetta S.', '04/08/25', 'Always a great visit'],
  ['Jadwiga R.', '04/04/25', 'Professional and empathetic as well as very knowledgeable'],
  ['Linda C.', '04/03/25', 'Dr O. Mgbako always give excellent foot care, informative, professional and have a great personality. Thank you!'],
  ['Regina', '04/02/25', 'I am a new patient of Dr Chubi Mgbako. My PCP recommended him and I’m so glad I followed up! Everyone I came in contact with was friendly and capable. I immediately felt comfortable and confident with Dr M. He took time to listen to my concerns and answered all my questions clearly. I highly recommend Dr Mgbako!'],
  ['Angelica R.', '04/02/25', 'The most caring and kind doctor you made want under your care. I recommend her to any patient who is in need of a foot MD.'],
  ['Jeffrey L.', '04/02/25', 'From the helpfulness of the front desk staff to Dr. Kozin, herself, it was clear that they were professional, extremely competent, and very caring. Dr. Kozin spent a great deal of time examining and explaining. A full 5 stars from me!!'],
  ['Nkemdilm O.', '04/01/25', 'Dr. Chi was phenomenal. He listened to my concerns, clearly processed probable reasons for my discomfort, and laid out a plan on how to move forward with treatment.'],
  ['Pamela P.', '03/29/25', 'Dr Mgbako is excellent. He’s kind, calming and very knowledgeable.'],
  ['Glinder K.', '03/27/25', 'I always have a great Experience when I visit this office everyone there has always been great and very knowledgeable and helpful.'],
  ['Robert T.', '03/25/25', 'very professional'],
  ['James P.', '03/23/25', 'Very nice'],
];

const doctorOf = (t: string) =>
  /Kozin/.test(t) ? 'Dr. Kozin' : /\bChi\b/.test(t) ? 'Dr. Chi' : /Mgbako/.test(t) ? 'Dr. Mgbako' : undefined;

export const reviews: Review[] = raw.map(([name, date, text]) => ({ name, date, text, doctor: doctorOf(text) }));
