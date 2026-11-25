// Symptoms, causes and everyday tips for each condition page. Written as general patient education, for Dr. Patel's review.
export interface ConditionExtra { s: { t: string; d: string }[]; c: string[]; t: string[] }
export const conditionExtras: Record<string, ConditionExtra> = {
 "bunions-and-juvenile-bunions": {
  "s": [
   {
    "t": "A bump at the big toe",
    "d": "A bony bump grows on the inside edge of the foot at the base of the big toe."
   },
   {
    "t": "Soreness and redness",
    "d": "The bump can get red, sore or irritated, especially in tight shoes."
   },
   {
    "t": "Big toe leaning inward",
    "d": "The big toe may slowly turn toward the second toe and crowd the others."
   },
   {
    "t": "Stiff or painful joint",
    "d": "Walking, standing for long periods or wearing narrow shoes can make the joint ache."
   }
  ],
  "c": [
   "Inherited foot shape",
   "Narrow or pointed shoes",
   "Flat feet or loose joints",
   "Past foot injuries",
   "Arthritis in the big toe joint"
  ],
  "t": [
   "Choose shoes with a wide, roomy toe box",
   "Use soft pads to cut down on rubbing",
   "Avoid high heels for long days",
   "Have a child's growing bunion checked early"
  ]
 },
 "hallux-limitus-and-hallux-rigidus": {
  "s": [
   {
    "t": "Stiff big toe",
    "d": "The big toe joint bends less and less, especially upward."
   },
   {
    "t": "Pain when pushing off",
    "d": "Walking, climbing stairs or running hurts at the base of the big toe."
   },
   {
    "t": "A bump on top of the joint",
    "d": "Extra bone can form on top of the joint and rub on shoes."
   },
   {
    "t": "Swelling and aching",
    "d": "The joint may swell and feel worse in cold or damp weather."
   }
  ],
  "c": [
   "Past injury to the big toe",
   "Wear and tear arthritis",
   "Family history of joint problems",
   "Foot shape that adds stress to the joint",
   "Repeated stress from sports or work"
  ],
  "t": [
   "Wear stiff-soled shoes with a rocker bottom",
   "Skip very tight or flat shoes",
   "Keep a healthy weight to ease joint stress",
   "Get early care before the joint stiffens further"
  ]
 },
 "hallux-varus": {
  "s": [
   {
    "t": "Big toe drifts inward",
    "d": "The big toe points toward the middle of the foot instead of straight ahead."
   },
   {
    "t": "A gap between toes",
    "d": "A space may open between the big toe and the second toe."
   },
   {
    "t": "Rubbing in shoes",
    "d": "The toe can press on the shoe and become sore or red."
   },
   {
    "t": "Trouble with balance",
    "d": "Some people feel less steady when pushing off."
   }
  ],
  "c": [
   "Over-correction after bunion surgery",
   "Past injury to the big toe",
   "Inherited joint looseness",
   "Muscle or tendon imbalance",
   "Some nerve or muscle conditions"
  ],
  "t": [
   "See your surgeon if the toe starts to drift after surgery",
   "Wear shoes with a wide, deep toe box",
   "Use padding where the toe rubs",
   "Keep follow-up visits after any foot procedure"
  ]
 },
 "hammertoe-mallet-toe-and-claw-toe": {
  "s": [
   {
    "t": "A bent toe",
    "d": "The toe curls at the middle or end joint and looks like a hammer or claw."
   },
   {
    "t": "Corns and calluses",
    "d": "Skin thickens where the bent toe rubs on the shoe or the ground."
   },
   {
    "t": "Pain in shoes",
    "d": "The top of the toe or the tip can hurt when shoes press on it."
   },
   {
    "t": "Stiff toe joint",
    "d": "Early on the toe can be straightened by hand, but it can become fixed over time."
   }
  ],
  "c": [
   "Tight or short shoes",
   "Muscle imbalance in the toe",
   "Bunions and other foot shape problems",
   "Past toe injuries",
   "Nerve or muscle conditions"
  ],
  "t": [
   "Wear shoes with a deep, roomy toe box",
   "Use soft toe pads or sleeves",
   "Do simple toe stretches your provider shows you",
   "Treat early, while the toe still moves"
  ]
 },
 "crossover-overlapping-underlapping-curly": {
  "s": [
   {
    "t": "A toe over or under its neighbor",
    "d": "One toe rests on top of or tucks beneath the next toe."
   },
   {
    "t": "A curled toe",
    "d": "The toe curls in or sideways and may look twisted."
   },
   {
    "t": "Pressure and sores",
    "d": "Skin can rub, get thick or break down where toes press together."
   },
   {
    "t": "Trouble with shoes",
    "d": "Shoes can feel tight, and the toe may hurt when walking."
   }
  ],
  "c": [
   "Inherited toe shape",
   "Muscle and tendon imbalance",
   "Bunions or other toe deformities",
   "Tight shoes",
   "Toe injuries"
  ],
  "t": [
   "Wear shoes with plenty of room for the toes",
   "Use gel spacers between toes if advised",
   "Check the skin between toes often",
   "Have children checked early, when care is easier"
  ]
 },
 "toe-contractures-and-painful-toe-deformities": {
  "s": [
   {
    "t": "Toes that will not straighten",
    "d": "One or more toes stay bent and stiff."
   },
   {
    "t": "Pain on top of the toe",
    "d": "Shoes can press on the raised joints."
   },
   {
    "t": "Pain under the toe tip",
    "d": "The tip of the toe may press on the ground and hurt."
   },
   {
    "t": "Thick skin or open sores",
    "d": "Corns, calluses or sores can form where the toe rubs."
   }
  ],
  "c": [
   "Muscle and tendon imbalance",
   "Narrow or short shoes",
   "Nerve damage from diabetes or other conditions",
   "Arthritis",
   "Past injury or surgery"
  ],
  "t": [
   "Choose shoes with a deep toe box",
   "Check your toes every day for sore spots",
   "Use padding that your provider recommends",
   "Do not cut or shave corns yourself"
  ]
 },
 "arthritis-of-the-toe-joints": {
  "s": [
   {
    "t": "Joint pain",
    "d": "The toe joint aches, especially when walking or after rest."
   },
   {
    "t": "Swelling and warmth",
    "d": "The joint may look puffy and feel warm."
   },
   {
    "t": "Stiffness",
    "d": "The toe is hard to bend, often worst in the morning."
   },
   {
    "t": "Bumps around the joint",
    "d": "Extra bone can form and rub on shoes."
   }
  ],
  "c": [
   "Wear and tear over the years",
   "Past injury to the toe",
   "Gout or inflammatory arthritis",
   "Family history",
   "Foot shape that adds stress to a joint"
  ],
  "t": [
   "Wear supportive shoes with a stiff sole",
   "Stay active with low-impact exercise",
   "Keep a healthy weight",
   "Ask about injections or orthotics before pain limits your day"
  ]
 },
 "turf-toe-and-other-big-toe-sprains": {
  "s": [
   {
    "t": "Pain at the base of the big toe",
    "d": "The joint hurts, often after pushing off or a sudden bend."
   },
   {
    "t": "Swelling and bruising",
    "d": "The area may swell and turn purple or blue."
   },
   {
    "t": "Limited motion",
    "d": "The toe is stiff and bending it hurts."
   },
   {
    "t": "Pain with push-off",
    "d": "Running, jumping and walking on tiptoe can be hard."
   }
  ],
  "c": [
   "Forcing the toe upward during sports",
   "Playing on hard or artificial surfaces",
   "Shoes that are too flexible",
   "Sudden stops or pivots",
   "Stubbing or jamming the toe"
  ],
  "t": [
   "Wear stiff-soled shoes for sports",
   "Warm up and stretch before play",
   "Return to sport slowly after an injury",
   "Rest the toe fully when it first hurts"
  ]
 },
 "toe-fractures-and-dislocations": {
  "s": [
   {
    "t": "Sudden pain",
    "d": "Pain starts right after a stub, drop or twist."
   },
   {
    "t": "Swelling and bruising",
    "d": "The toe swells and may turn dark or purple."
   },
   {
    "t": "A crooked toe",
    "d": "A broken or dislocated toe can look bent or out of place."
   },
   {
    "t": "Trouble walking",
    "d": "It hurts to stand, walk or wear a shoe."
   }
  ],
  "c": [
   "Stubbing the toe",
   "Dropping a heavy object on the foot",
   "Sports injuries",
   "Twisting the foot",
   "Weak bones from other conditions"
  ],
  "t": [
   "Wear closed shoes around the house",
   "Wear safety shoes on jobs with heavy objects",
   "Keep walkways clear and well lit",
   "Get care soon for a crooked toe or an open wound"
  ]
 },
 "toe-sprains-bruises-and-soft-tissue-injuries": {
  "s": [
   {
    "t": "Pain and tenderness",
    "d": "The toe is sore to touch and to move."
   },
   {
    "t": "Swelling",
    "d": "The toe puffs up and may feel warm."
   },
   {
    "t": "Bruising",
    "d": "Color changes show up in the toe or foot over a day or two."
   },
   {
    "t": "Trouble in shoes",
    "d": "Tight shoes feel painful until the swelling goes down."
   }
  ],
  "c": [
   "Stubbing or jamming a toe",
   "A fall or twisting injury",
   "Sports and dance",
   "Heavy objects landing on the foot",
   "Walking barefoot on hard floors"
  ],
  "t": [
   "Rest and raise the foot after an injury",
   "Wear roomy shoes while healing",
   "Protect the toe with a stiff-soled shoe",
   "Ask for an exam if pain or swelling lasts more than a few days"
  ]
 },
 "nail-injuries-and-blood-beneath-the-nail": {
  "s": [
   {
    "t": "Dark blood under the nail",
    "d": "A dark red, purple or black spot appears beneath the nail."
   },
   {
    "t": "Throbbing pain",
    "d": "Pressure under the nail can cause a steady, strong ache."
   },
   {
    "t": "A loose or lifting nail",
    "d": "The nail may separate from the nail bed."
   },
   {
    "t": "Nail changes later",
    "d": "The nail can grow back thick, ridged or oddly shaped."
   }
  ],
  "c": [
   "Dropping something on the toe",
   "Stubbing the toe",
   "Shoes that are too short",
   "Long runs or hikes, especially downhill",
   "Repeated pressure on the nail"
  ],
  "t": [
   "Wear shoes with room in front of the toes",
   "Keep nails trimmed straight across",
   "Lace shoes snugly so the foot does not slide forward",
   "Get care if the pain is strong or the nail looks infected"
  ]
 },
 "ingrown-toenails": {
  "s": [
   {
    "t": "Pain along the nail edge",
    "d": "The side of the nail digs into the skin and hurts."
   },
   {
    "t": "Redness and swelling",
    "d": "The skin next to the nail turns red, puffy and tender."
   },
   {
    "t": "Drainage or pus",
    "d": "An infected nail edge may drain or smell."
   },
   {
    "t": "Overgrown skin",
    "d": "Extra tissue can grow over the nail edge."
   }
  ],
  "c": [
   "Cutting nails too short or curved",
   "Tight or narrow shoes",
   "Toe injuries",
   "Curved or thick nails",
   "Inherited nail shape"
  ],
  "t": [
   "Trim nails straight across",
   "Do not dig at the corners",
   "Choose shoes with a roomy toe box",
   "Seek care early, especially with diabetes or poor circulation"
  ]
 },
 "fungal-thickened-discolored-or-damaged": {
  "s": [
   {
    "t": "Thick nails",
    "d": "The nail gets thicker and is hard to trim."
   },
   {
    "t": "Yellow, brown or white color",
    "d": "The nail changes color and may look cloudy."
   },
   {
    "t": "Crumbly or brittle edges",
    "d": "The nail may crack, break or lift from the nail bed."
   },
   {
    "t": "Odor or soreness",
    "d": "Debris builds under the nail, and the toe can feel tender in shoes."
   }
  ],
  "c": [
   "Fungus that spreads in warm, damp places",
   "Walking barefoot in locker rooms and pools",
   "Sweaty feet and closed shoes",
   "Past nail injury",
   "Diabetes or poor circulation"
  ],
  "t": [
   "Keep feet clean and dry",
   "Wear breathable socks and change them often",
   "Do not share nail tools",
   "Wear sandals in public showers and pools"
  ]
 },
 "infected-nail-borders-and-nail-fold": {
  "s": [
   {
    "t": "Red, swollen skin",
    "d": "The skin around the nail turns red, shiny and puffy."
   },
   {
    "t": "Tenderness",
    "d": "The edge of the nail or the skin around it hurts to touch."
   },
   {
    "t": "Pus or drainage",
    "d": "A pocket of fluid or pus may form."
   },
   {
    "t": "Warmth",
    "d": "The area can feel warm and may throb."
   }
  ],
  "c": [
   "Ingrown nails",
   "Picking or cutting the skin around the nail",
   "Tight shoes",
   "Nail injuries",
   "Moist, damaged skin around the nail"
  ],
  "t": [
   "Keep the skin around nails clean and dry",
   "Do not pick or bite at the nail edges",
   "Trim nails straight across",
   "Get care soon if redness spreads or you have diabetes"
  ]
 },
 "corns-and-calluses-on-or-between-the-toes": {
  "s": [
   {
    "t": "Thick, hard skin",
    "d": "A firm patch of skin builds up on or between the toes."
   },
   {
    "t": "A small hard core",
    "d": "Corns have a tight center that can feel like a pebble."
   },
   {
    "t": "Pain when pressed",
    "d": "Walking in shoes can hurt where the skin presses."
   },
   {
    "t": "Soft corns between toes",
    "d": "Between toes the skin can look white, soft and moist."
   }
  ],
  "c": [
   "Tight or loose shoes",
   "Bent toes",
   "Bunions and other foot shape problems",
   "Walking without socks",
   "Extra pressure from the way you walk"
  ],
  "t": [
   "Wear shoes that fit well with room for the toes",
   "Use soft pads to cut down on pressure",
   "Moisturize the feet daily",
   "Do not use sharp tools or strong acids on corns"
  ]
 },
 "warts-on-the-toes": {
  "s": [
   {
    "t": "A rough bump",
    "d": "A small bump with a rough surface grows on the toe."
   },
   {
    "t": "Tiny black dots",
    "d": "Small dark specks inside the wart are common."
   },
   {
    "t": "Tenderness",
    "d": "The wart can hurt when pressed or in shoes."
   },
   {
    "t": "Spreading",
    "d": "New warts may appear nearby or in groups."
   }
  ],
  "c": [
   "A common virus that enters through small breaks in the skin",
   "Walking barefoot in pools and locker rooms",
   "Damp, warm skin",
   "Cuts or scrapes",
   "A weaker immune system"
  ],
  "t": [
   "Wear sandals in public showers and pools",
   "Keep feet clean and dry",
   "Do not pick at a wart",
   "Do not share towels or shoes"
  ]
 },
 "toe-sores-ulcers-and-pressure-areas": {
  "s": [
   {
    "t": "A red or dark pressure spot",
    "d": "Skin looks red or dark where the toe presses or rubs."
   },
   {
    "t": "An open sore",
    "d": "The skin breaks down and may look like a shallow crater."
   },
   {
    "t": "Drainage or odor",
    "d": "Fluid or a bad smell can be a sign of infection."
   },
   {
    "t": "Little or no pain",
    "d": "With nerve damage, a sore may not hurt at all."
   }
  ],
  "c": [
   "Diabetes and nerve damage",
   "Poor circulation",
   "Shoes that rub or press",
   "Toe deformities",
   "Long-lasting pressure on one spot"
  ],
  "t": [
   "Check your feet every day, including between the toes",
   "Wear well-fitting shoes and clean, dry socks",
   "Never walk barefoot",
   "Call us right away about any open sore"
  ]
 },
 "digital-cysts-and-small-soft-tissue-lumps": {
  "s": [
   {
    "t": "A small lump",
    "d": "A soft or firm bump appears on or near a toe."
   },
   {
    "t": "Few or no symptoms",
    "d": "Many lumps do not hurt."
   },
   {
    "t": "Shoe pressure",
    "d": "A lump may rub and become sore in shoes."
   },
   {
    "t": "Changes in size",
    "d": "A lump may grow, shrink or return."
   }
  ],
  "c": [
   "Fluid collecting near a joint or tendon",
   "Past injury",
   "Wear and tear of a toe joint",
   "Rubbing from shoes",
   "Other soft-tissue growths"
  ],
  "t": [
   "Wear roomy shoes to avoid pressure",
   "Do not try to pop or drain a lump",
   "Note any change in size or color",
   "Have a new or changing lump checked"
  ]
 },
 "metatarsalgia": {
  "s": [
   {
    "t": "Pain in the ball of the foot",
    "d": "A burning, aching or bruised feeling under the front of the foot."
   },
   {
    "t": "Feeling like a pebble",
    "d": "It may feel like you are stepping on a stone or a bunched-up sock."
   },
   {
    "t": "Pain that worsens with activity",
    "d": "Standing, walking and running make it worse; rest helps."
   },
   {
    "t": "Tingling or numb toes",
    "d": "Some people feel sharp or shooting pain toward the toes."
   }
  ],
  "c": [
   "High-impact sports",
   "Shoes that are tight, flat or high-heeled",
   "Foot shape such as a high arch or long metatarsal",
   "Extra body weight",
   "Bunions or hammertoes"
  ],
  "t": [
   "Wear cushioned shoes with room in front",
   "Use metatarsal pads or insoles if advised",
   "Replace worn running shoes",
   "Build up activity slowly"
  ]
 },
 "tailors-bunion-or-bunionette": {
  "s": [
   {
    "t": "A bump on the outside of the foot",
    "d": "A bony bump forms at the base of the little toe."
   },
   {
    "t": "Redness and swelling",
    "d": "The skin over the bump can get red, sore and thick."
   },
   {
    "t": "Pain in shoes",
    "d": "Narrow shoes press on the bump and rub."
   },
   {
    "t": "Calluses",
    "d": "Hard skin may form over the bump or under the ball of the foot."
   }
  ],
  "c": [
   "Inherited foot shape",
   "Narrow or tight shoes",
   "A little toe that turns inward",
   "Loose ligaments or flat feet",
   "Repeated pressure on the outer foot"
  ],
  "t": [
   "Wear shoes with a wide toe box",
   "Use a soft pad over the bump",
   "Avoid pointed shoes and high heels",
   "Treat early before the bump grows"
  ]
 },
 "mortons-neuroma-and-interdigital-nerve": {
  "s": [
   {
    "t": "Burning pain in the ball of the foot",
    "d": "The pain usually sits between the third and fourth toes."
   },
   {
    "t": "Tingling or numbness",
    "d": "Toes may tingle, feel numb or feel like they are on fire."
   },
   {
    "t": "Feeling of a lump or fold",
    "d": "It may feel like a rolled-up sock under the foot."
   },
   {
    "t": "Relief when shoes come off",
    "d": "Pain often eases when you rest and rub the foot."
   }
  ],
  "c": [
   "Tight, narrow or high-heeled shoes",
   "Repeated pressure on the front of the foot",
   "High-impact sports",
   "Foot shapes such as flat feet or bunions",
   "Past injury to the forefoot"
  ],
  "t": [
   "Wear shoes with a wide toe box and low heel",
   "Use padding your provider suggests",
   "Rest and change shoes during the day",
   "Replace worn work and sports shoes"
  ]
 },
 "intermetatarsal-bursitis": {
  "s": [
   {
    "t": "Pain between the toes",
    "d": "An ache or sharp pain between the long bones near the toes."
   },
   {
    "t": "Swelling",
    "d": "The area at the ball of the foot may look puffy."
   },
   {
    "t": "Pain when squeezing the foot",
    "d": "Pressing the front of the foot can hurt."
   },
   {
    "t": "Pain in tight shoes",
    "d": "Narrow shoes make it worse."
   }
  ],
  "c": [
   "Tight shoes",
   "Repeated pressure from running or jumping",
   "Foot shapes such as flat feet or bunions",
   "Arthritis",
   "Past injury"
  ],
  "t": [
   "Choose roomy, cushioned shoes",
   "Use pads to spread pressure",
   "Rest after long walks or runs",
   "Ease back into sports gradually"
  ]
 },
 "capsulitis-or-synovitis": {
  "s": [
   {
    "t": "Pain at the base of a toe",
    "d": "A deep ache under or around the joint at the ball of the foot."
   },
   {
    "t": "Swelling",
    "d": "The joint may look puffy and feel warm."
   },
   {
    "t": "A toe that drifts",
    "d": "A toe can slowly drift or lift as the joint weakens."
   },
   {
    "t": "Pain when pushing off",
    "d": "Walking, running and standing on tiptoe can hurt."
   }
  ],
  "c": [
   "Overload from sports or standing",
   "A long second metatarsal",
   "Bunions or other toe problems",
   "Tight calf muscles",
   "Shoes without enough cushion or support"
  ],
  "t": [
   "Wear supportive, cushioned shoes",
   "Stretch the calf muscles",
   "Avoid going barefoot on hard floors",
   "Get care early to protect the joint"
  ]
 },
 "plantar-plate-injury-tear-or-instability": {
  "s": [
   {
    "t": "Pain at the ball of the foot",
    "d": "Pain sits under the base of a toe, most often the second toe."
   },
   {
    "t": "Swelling at the toe base",
    "d": "The joint may look puffy and be sore to press."
   },
   {
    "t": "A toe that drifts or lifts",
    "d": "The toe may move out of line or float above the ground."
   },
   {
    "t": "Pain that grows over time",
    "d": "It often starts mild and gets worse with walking."
   }
  ],
  "c": [
   "Repeated stress on the toe joint",
   "A long second metatarsal",
   "Bunions",
   "Tight calf muscles",
   "Past injections or injuries near the joint"
  ],
  "t": [
   "Wear stiff, supportive shoes",
   "Use toe taping or padding as shown",
   "Do not ignore pain at the base of a toe",
   "Avoid barefoot walking on hard floors"
  ]
 },
 "sesamoiditis-sesamoid-fracture": {
  "s": [
   {
    "t": "Pain under the big toe joint",
    "d": "An ache below the base of the big toe, where two small bones sit."
   },
   {
    "t": "Swelling and tenderness",
    "d": "The area may be puffy and sore to touch."
   },
   {
    "t": "Pain when the toe bends up",
    "d": "Pushing off and going on tiptoe hurt."
   },
   {
    "t": "Pain that builds slowly or starts suddenly",
    "d": "A fracture can cause sudden pain after a fall or hard landing."
   }
  ],
  "c": [
   "Repeated pressure from running or dancing",
   "High-heeled shoes",
   "A high-arched foot",
   "A sudden fall or hard landing",
   "Bone stress from overuse"
  ],
  "t": [
   "Wear cushioned shoes and avoid high heels",
   "Use a pad that takes pressure off the area",
   "Build up sports slowly",
   "Rest at the first sign of pain under the big toe"
  ]
 },
 "metatarsal-fractures-and-stress-fractures": {
  "s": [
   {
    "t": "Pain on top of the foot",
    "d": "The pain is often in the middle of the foot and grows with walking."
   },
   {
    "t": "Swelling",
    "d": "The top of the foot can swell and may bruise."
   },
   {
    "t": "Pain that eases with rest",
    "d": "A stress fracture often hurts less when you stop."
   },
   {
    "t": "Sharp pain after a fall or twist",
    "d": "A sudden break can cause strong pain and trouble walking."
   }
  ],
  "c": [
   "A fall or heavy object",
   "A twisting injury",
   "Overuse in running or sports",
   "Doing too much too soon",
   "Weak bones"
  ],
  "t": [
   "Increase exercise slowly",
   "Wear shoes with good support",
   "Eat enough calcium and vitamin D",
   "Do not push through pain in the foot"
  ]
 },
 "delayed-healing-nonunion-and-malunion": {
  "s": [
   {
    "t": "Pain that does not go away",
    "d": "Pain at the old break stays longer than expected."
   },
   {
    "t": "Trouble walking",
    "d": "It is hard to put weight on the foot as you should."
   },
   {
    "t": "Swelling or tenderness",
    "d": "The area stays sore, swollen or warm."
   },
   {
    "t": "A change in foot shape",
    "d": "A bone that healed crooked can change how the foot looks and feels."
   }
  ],
  "c": [
   "Not enough rest or protection while healing",
   "Smoking",
   "Diabetes",
   "Poor blood flow",
   "Weak bones or low vitamin D"
  ],
  "t": [
   "Follow the plan for protecting the foot",
   "Do not smoke",
   "Keep follow-up visits and X-rays",
   "Tell us if pain returns or does not improve"
  ]
 },
 "freiberg-disease": {
  "s": [
   {
    "t": "Pain at the ball of the foot",
    "d": "The pain is often at the second toe joint."
   },
   {
    "t": "Pain when walking or pushing off",
    "d": "Activity makes the pain worse."
   },
   {
    "t": "Swelling and stiffness",
    "d": "The joint may be puffy and move less."
   },
   {
    "t": "A limp",
    "d": "Pain may make you favor the foot."
   }
  ],
  "c": [
   "Repeated stress on a toe bone",
   "Blood supply problems to the bone",
   "Common in teens and young adults",
   "A long second metatarsal",
   "High-impact sports"
  ],
  "t": [
   "Take breaks from high-impact sports",
   "Wear supportive, cushioned shoes",
   "Use pads or insoles if advised",
   "Come in early for pain at the toe joint in teens"
  ]
 },
 "arthritis-of-the-metatarsophalangeal-joints": {
  "s": [
   {
    "t": "Pain at the ball of the foot",
    "d": "The joints at the base of the toes ache, especially with walking."
   },
   {
    "t": "Stiffness",
    "d": "The toe joints feel stiff, mostly after rest."
   },
   {
    "t": "Swelling",
    "d": "The joints may look puffy and feel warm."
   },
   {
    "t": "Bumps or toe changes",
    "d": "Toes may shift, and bumps can form."
   }
  ],
  "c": [
   "Wear and tear",
   "Rheumatoid or other inflammatory arthritis",
   "Past injury",
   "Gout",
   "Family history"
  ],
  "t": [
   "Wear shoes with a stiff, cushioned sole",
   "Stay active with gentle exercise",
   "Keep a healthy weight",
   "Ask about treatment before the joint stiffens"
  ]
 },
 "brachymetatarsia-and-metatarsal-length": {
  "s": [
   {
    "t": "A short toe",
    "d": "One toe, often the fourth, looks shorter than the others."
   },
   {
    "t": "Pain at the ball of the foot",
    "d": "Other toes can carry extra pressure."
   },
   {
    "t": "Calluses",
    "d": "Hard skin can form under the neighboring bones."
   },
   {
    "t": "Trouble with shoes",
    "d": "Shoes may rub or feel uneven."
   }
  ],
  "c": [
   "Inherited bone growth patterns",
   "A bone that stopped growing early",
   "Past injury in childhood",
   "Some medical conditions",
   "Uneven foot shape"
  ],
  "t": [
   "Wear shoes with room and good cushion",
   "Use pads to spread pressure",
   "Check for calluses and sore spots",
   "Ask about options if pain or shoe fit is a problem"
  ]
 },
 "transfer-metatarsalgia-and-callus": {
  "s": [
   {
    "t": "A thick callus under the ball of the foot",
    "d": "Hard skin forms under one or more metatarsal heads."
   },
   {
    "t": "Pain when walking",
    "d": "It can feel like walking on a bruise."
   },
   {
    "t": "A shift in pressure",
    "d": "Pain moves to a new spot after another foot problem is treated."
   },
   {
    "t": "Pain or cracks in the skin",
    "d": "Thick skin can crack or become sore."
   }
  ],
  "c": [
   "Extra weight on the front of the foot",
   "Changes after bunion or other foot surgery",
   "A short or lifted metatarsal",
   "A tight calf",
   "Shoes without enough cushion"
  ],
  "t": [
   "Wear cushioned shoes or insoles",
   "Moisturize the feet daily",
   "Do not cut calluses at home",
   "Have calluses checked regularly if you have diabetes"
  ]
 },
 "fat-pad-thinning-or-displacement": {
  "s": [
   {
    "t": "Pain under the ball of the foot",
    "d": "Walking on hard floors feels like walking on bone."
   },
   {
    "t": "Bruised feeling",
    "d": "The ball of the foot feels tender and sore."
   },
   {
    "t": "Calluses",
    "d": "Hard skin builds up where cushioning is thin."
   },
   {
    "t": "Pain that worsens with barefoot walking",
    "d": "Hard floors and thin shoes make it worse."
   }
  ],
  "c": [
   "Aging",
   "Long-term high-heel wear",
   "Past injury or steroid shots",
   "Toe deformities that shift the pad",
   "Weight and activity level"
  ],
  "t": [
   "Wear shoes with thick cushioning",
   "Use gel or foam insoles",
   "Avoid walking barefoot on hard floors",
   "Choose lower heels"
  ]
 },
 "lisfranc-sprains-ligament-injuries-fractures": {
  "s": [
   {
    "t": "Pain in the middle of the foot",
    "d": "The arch and top of the midfoot hurt, often after a twist or fall."
   },
   {
    "t": "Swelling and bruising",
    "d": "Bruising may show on the sole of the foot, which is a warning sign."
   },
   {
    "t": "Trouble standing on the foot",
    "d": "It is hard to bear weight or stand on tiptoe."
   },
   {
    "t": "A widened or flatter midfoot",
    "d": "A severe injury can change the shape of the foot."
   }
  ],
  "c": [
   "A twisting fall with the foot planted",
   "A crush injury or heavy object",
   "Car accidents",
   "Sports like football and soccer",
   "Missteps on stairs or curbs"
  ],
  "t": [
   "Get care quickly for midfoot pain after a twist",
   "Wear supportive shoes for sports",
   "Use caution on uneven ground",
   "Follow weight-bearing instructions carefully"
  ]
 },
 "midfoot-fractures-and-stress-fractures": {
  "s": [
   {
    "t": "Pain in the middle of the foot",
    "d": "An ache on the top or arch of the foot that grows with activity."
   },
   {
    "t": "Swelling",
    "d": "The midfoot may swell and feel tender."
   },
   {
    "t": "Pain with push-off",
    "d": "Running and jumping hurt the most."
   },
   {
    "t": "Pain at rest in more serious cases",
    "d": "Pain may continue even when you are not active."
   }
  ],
  "c": [
   "A fall, twist or crush injury",
   "Overuse from running or jumping",
   "Rapid increase in training",
   "Low bone strength",
   "A high-arched foot"
  ],
  "t": [
   "Build training up slowly",
   "Wear supportive shoes and replace worn ones",
   "Eat enough calcium and vitamin D",
   "Do not ignore midfoot pain that keeps returning"
  ]
 },
 "midfoot-arthritis": {
  "s": [
   {
    "t": "Pain on top of the midfoot",
    "d": "A deep ache that is worse with walking and standing."
   },
   {
    "t": "A bump on top of the foot",
    "d": "Extra bone can form and rub on shoes."
   },
   {
    "t": "Stiffness",
    "d": "The arch feels stiff, especially after rest."
   },
   {
    "t": "Swelling",
    "d": "The joints may look puffy."
   }
  ],
  "c": [
   "Wear and tear",
   "Past midfoot injury",
   "Flatfoot or high arch",
   "Inflammatory arthritis",
   "Family history"
  ],
  "t": [
   "Wear shoes with a stiff, rocker-bottom sole",
   "Use arch supports",
   "Choose low-impact exercise",
   "Keep a healthy weight"
  ]
 },
 "midfoot-sprains-and-joint-instability": {
  "s": [
   {
    "t": "Pain in the arch or top of the foot",
    "d": "The pain is worse with weight on the foot."
   },
   {
    "t": "Swelling",
    "d": "The midfoot can swell and feel tender."
   },
   {
    "t": "A feeling of giving way",
    "d": "The foot may feel loose or unstable."
   },
   {
    "t": "Pain on uneven ground",
    "d": "Walking on grass or gravel can hurt more."
   }
  ],
  "c": [
   "A twist or fall",
   "Repeated stress in sports",
   "Flat or unstable foot shape",
   "A past midfoot injury",
   "Loose ligaments"
  ],
  "t": [
   "Wear supportive shoes",
   "Use caution on uneven surfaces",
   "Strengthen the foot and calf as advised",
   "Rest after any twisting injury"
  ]
 },
 "dorsal-midfoot-bone-spurs-and-prominence": {
  "s": [
   {
    "t": "A bump on top of the foot",
    "d": "A hard, bony bump on the top of the midfoot."
   },
   {
    "t": "Pain from shoes",
    "d": "Laces and shoe tongues press on the bump."
   },
   {
    "t": "Nerve irritation",
    "d": "Tingling or burning can spread toward the toes."
   },
   {
    "t": "Redness or swelling",
    "d": "The skin over the bump may look irritated."
   }
  ],
  "c": [
   "Arthritis in midfoot joints",
   "A high arch",
   "Past injury",
   "Tight shoes or tight lacing",
   "Repeated pressure on the top of the foot"
  ],
  "t": [
   "Use lacing patterns that avoid the bump",
   "Wear shoes with soft tongues",
   "Add padding over the bump",
   "Choose shoes with a roomy fit"
  ]
 },
 "adult-acquired-flatfoot-and-progressive": {
  "s": [
   {
    "t": "An arch that is slowly falling",
    "d": "The arch flattens over time in one or both feet."
   },
   {
    "t": "Pain on the inside of the ankle",
    "d": "Pain follows the inner ankle and arch."
   },
   {
    "t": "Swelling",
    "d": "The inner ankle may swell."
   },
   {
    "t": "Pain on the outside of the ankle",
    "d": "As the foot rolls outward, the outer ankle may hurt."
   }
  ],
  "c": [
   "Weak or worn tendon on the inside of the ankle",
   "Obesity",
   "Diabetes or high blood pressure",
   "A past ankle or foot injury",
   "Inflammatory arthritis"
  ],
  "t": [
   "Wear supportive shoes",
   "Use arch supports or braces if advised",
   "Keep a healthy weight",
   "Treat early, before the arch collapses"
  ]
 },
 "flexible-flatfoot-in-children-and-adolescents": {
  "s": [
   {
    "t": "Flat arches when standing",
    "d": "The arch looks flat when a child stands and returns when on tiptoe."
   },
   {
    "t": "Tired or sore feet",
    "d": "Some children feel achy after play or sports."
   },
   {
    "t": "Feet rolling inward",
    "d": "Heels may tilt inward when walking."
   },
   {
    "t": "Uneven shoe wear",
    "d": "Shoes may wear down on the inside edges."
   }
  ],
  "c": [
   "Normal growth and loose joints",
   "Family shape of the foot",
   "Tight calf muscles",
   "Extra weight",
   "Some medical conditions"
  ],
  "t": [
   "Choose supportive, well-fitting shoes",
   "Encourage active play",
   "Do not use stiff arch supports without advice",
   "Have pain or limping checked"
  ]
 },
 "posterior-tibial-tendon-dysfunction": {
  "s": [
   {
    "t": "Pain on the inside of the ankle",
    "d": "Pain follows the tendon along the inner ankle and arch."
   },
   {
    "t": "Swelling",
    "d": "The inner ankle can swell and feel warm."
   },
   {
    "t": "A flattening arch",
    "d": "The arch slowly lowers and the heel tilts outward."
   },
   {
    "t": "Trouble standing on tiptoe",
    "d": "It is hard to rise onto the toes on one foot."
   }
  ],
  "c": [
   "Overuse or a sudden injury",
   "Flat feet",
   "Obesity",
   "Diabetes or high blood pressure",
   "Inflammatory arthritis"
  ],
  "t": [
   "Wear supportive shoes with a firm heel",
   "Use arch supports or braces as advised",
   "Avoid sudden increases in activity",
   "Keep a healthy weight"
  ]
 },
 "accessory-navicular-syndrome": {
  "s": [
   {
    "t": "A bump on the inside of the midfoot",
    "d": "An extra bone forms a bump on the inner arch."
   },
   {
    "t": "Pain at the bump",
    "d": "The area is sore, especially in shoes."
   },
   {
    "t": "Redness or swelling",
    "d": "The skin over the bump can look irritated."
   },
   {
    "t": "Pain with sports",
    "d": "Running and jumping can bring on arch pain."
   }
  ],
  "c": [
   "An extra bone present from birth",
   "A flat arch",
   "Repeated stress on the inner arch",
   "Injuries such as twists",
   "Tight or rubbing shoes"
  ],
  "t": [
   "Wear shoes that do not press on the bump",
   "Use padding or arch supports",
   "Rest from sports when pain flares",
   "Ask about care early in teens"
  ]
 },
 "tarsal-coalition": {
  "s": [
   {
    "t": "A stiff, flat foot",
    "d": "The foot is hard to move from side to side."
   },
   {
    "t": "Pain in the hindfoot or midfoot",
    "d": "Pain is often worse with sports or on uneven ground."
   },
   {
    "t": "Frequent ankle sprains",
    "d": "The ankle may roll often."
   },
   {
    "t": "Teen onset",
    "d": "Symptoms often start in the early teen years."
   }
  ],
  "c": [
   "Bones that join together before birth",
   "Inherited foot shape",
   "Past injuries that trigger pain",
   "Growth spurts",
   "Increased activity"
  ],
  "t": [
   "Wear supportive shoes",
   "Rest and ice after pain flares",
   "Avoid uneven ground when sore",
   "Have a flat, stiff or painful teen foot checked"
  ]
 },
 "cavus-foot-or-high-arched-foot": {
  "s": [
   {
    "t": "A very high arch",
    "d": "The arch stays high even when standing."
   },
   {
    "t": "Pain at the ball and heel",
    "d": "Pressure builds up at the front and back of the foot."
   },
   {
    "t": "Frequent ankle sprains",
    "d": "The ankle may feel weak and roll to the outside."
   },
   {
    "t": "Calluses and hammertoes",
    "d": "Hard skin and curled toes may develop."
   }
  ],
  "c": [
   "Inherited foot shape",
   "Nerve or muscle conditions",
   "Past injuries",
   "Muscle imbalance",
   "Some neurologic conditions"
  ],
  "t": [
   "Wear cushioned shoes with good support",
   "Use orthotics that spread pressure",
   "Strengthen the ankle muscles",
   "Have new weakness or frequent sprains checked"
  ]
 },
 "metatarsus-adductus": {
  "s": [
   {
    "t": "A foot that turns inward",
    "d": "The front half of the foot bends toward the middle."
   },
   {
    "t": "A curved outer edge",
    "d": "The outside edge looks like a bean shape."
   },
   {
    "t": "Trouble with shoes",
    "d": "Shoes may not fit well."
   },
   {
    "t": "Intoeing in children",
    "d": "Walking with toes pointed in."
   }
  ],
  "c": [
   "Position in the womb",
   "Family history",
   "Muscle imbalance",
   "Birth conditions",
   "Often found in infants"
  ],
  "t": [
   "Have infants checked early",
   "Follow stretches shown by your provider",
   "Use shoes that fit the foot shape",
   "Come back for follow-up as a child grows"
  ]
 },
 "charcot-neuroarthropathy-of-the-midfoot": {
  "s": [
   {
    "t": "A warm, swollen foot",
    "d": "One foot is warmer and puffier than the other."
   },
   {
    "t": "Redness",
    "d": "The midfoot looks red, often with little pain."
   },
   {
    "t": "A change in foot shape",
    "d": "The arch may drop or collapse."
   },
   {
    "t": "Little pain",
    "d": "Nerve damage may hide the pain, so the problem can go unnoticed."
   }
  ],
  "c": [
   "Diabetes with nerve damage",
   "Other nerve disease",
   "A small injury that goes unnoticed",
   "Continued walking on a damaged foot",
   "Poor blood flow"
  ],
  "t": [
   "Check both feet every day",
   "Get care right away for a warm, swollen foot",
   "Wear protective shoes as advised",
   "Keep blood sugar in the target range"
  ]
 },
 "ganglion-cysts-and-other-midfoot-soft-tissue": {
  "s": [
   {
    "t": "A lump on the foot",
    "d": "A smooth, round bump on the top or side of the midfoot."
   },
   {
    "t": "Pressure or aching",
    "d": "The lump may feel sore, especially in shoes."
   },
   {
    "t": "Changes in size",
    "d": "It may get bigger or smaller."
   },
   {
    "t": "Tingling",
    "d": "If it presses on a nerve, you may feel tingling or burning."
   }
  ],
  "c": [
   "Fluid from a joint or tendon",
   "Past injury",
   "Joint wear and tear",
   "Repeated stress",
   "Other soft-tissue growths"
  ],
  "t": [
   "Pad or change shoes to avoid pressure",
   "Do not try to pop or drain a lump",
   "Keep note of any change",
   "Have new or fast-growing lumps checked"
  ]
 },
 "arch-pain-related-to-foot-structure-tendon": {
  "s": [
   {
    "t": "An ache in the arch",
    "d": "Pain along the middle of the foot."
   },
   {
    "t": "Pain after standing or walking",
    "d": "It often builds during the day."
   },
   {
    "t": "Tired, heavy feet",
    "d": "The arch may feel strained by evening."
   },
   {
    "t": "Swelling or tenderness",
    "d": "The arch may be tender to press."
   }
  ],
  "c": [
   "Flat or high-arched feet",
   "Tendon strain",
   "Joint problems",
   "Unsupportive shoes",
   "Extra body weight"
  ],
  "t": [
   "Wear supportive shoes",
   "Use arch supports if advised",
   "Stretch the calf and foot",
   "Avoid long periods barefoot on hard floors"
  ]
 },
 "plantar-fasciitis-and-plantar-fasciosis": {
  "s": [
   {
    "t": "Heel pain with first steps",
    "d": "Sharp pain under the heel when you get out of bed or stand after sitting."
   },
   {
    "t": "Pain along the arch",
    "d": "The band under the foot can ache and feel tight."
   },
   {
    "t": "Pain that eases then returns",
    "d": "It may improve with walking but come back after long standing."
   },
   {
    "t": "Tight calves",
    "d": "Stiff calf muscles often go along with the problem."
   }
  ],
  "c": [
   "Overuse from running or standing",
   "Tight calf muscles or Achilles tendon",
   "Flat feet or high arches",
   "Unsupportive shoes",
   "Extra body weight"
  ],
  "t": [
   "Wear supportive shoes with good cushioning",
   "Stretch the calf and arch daily",
   "Replace worn athletic shoes",
   "Avoid walking barefoot on hard floors"
  ]
 },
 "heel-pain-and-symptomatic-heel-spurs": {
  "s": [
   {
    "t": "Pain under or behind the heel",
    "d": "A sharp or aching pain when you stand or walk."
   },
   {
    "t": "Pain that is worse after rest",
    "d": "The first steps in the morning can be the hardest."
   },
   {
    "t": "Tenderness",
    "d": "The heel may be sore to press."
   },
   {
    "t": "Pain that limits activity",
    "d": "Walking and exercise become harder."
   }
  ],
  "c": [
   "Strain of the tissue under the heel",
   "Tight calf muscles",
   "A bony growth that forms over time",
   "Unsupportive shoes",
   "Overuse and extra weight"
  ],
  "t": [
   "Wear supportive shoes with cushioned heels",
   "Stretch the calves and arches",
   "Avoid hard floors in bare feet",
   "Keep a healthy weight"
  ]
 },
 "heel-fat-pad-pain-or-thinning": {
  "s": [
   {
    "t": "A bruised feeling in the heel",
    "d": "The heel hurts right in the center when you step."
   },
   {
    "t": "Pain on hard floors",
    "d": "Barefoot walking is the worst."
   },
   {
    "t": "Pain that grows with the day",
    "d": "Standing for long periods makes it worse."
   },
   {
    "t": "Tenderness in the middle of the heel",
    "d": "Pressing the center of the heel hurts."
   }
  ],
  "c": [
   "Aging, as the fat pad thins",
   "Hard landings from running or jumping",
   "Walking barefoot on hard floors",
   "Very flat, thin shoes",
   "Heel injuries"
  ],
  "t": [
   "Wear shoes with thick heel cushioning",
   "Use heel cups or gel pads",
   "Avoid going barefoot on hard floors",
   "Land softly during sports"
  ]
 },
 "calcaneal-fractures-and-stress-fractures": {
  "s": [
   {
    "t": "Heel pain after a fall",
    "d": "Strong pain, swelling and bruising after landing hard on the heel."
   },
   {
    "t": "Trouble standing",
    "d": "It is very hard to put weight on the heel."
   },
   {
    "t": "A heel that looks wider",
    "d": "A bad break can change the shape of the heel."
   },
   {
    "t": "Aching that grows with activity",
    "d": "A stress fracture often builds slowly and hurts with running."
   }
  ],
  "c": [
   "A fall from a height",
   "Car accidents",
   "Running and jumping sports",
   "Fast increase in training",
   "Weak bones"
  ],
  "t": [
   "Increase training slowly",
   "Wear well-cushioned shoes",
   "Eat enough calcium and vitamin D",
   "Get care quickly after a fall onto the heel"
  ]
 },
 "achilles-tendinopathy": {
  "s": [
   {
    "t": "Pain at the back of the heel",
    "d": "An ache along the tendon above the heel."
   },
   {
    "t": "Stiffness in the morning",
    "d": "The tendon feels tight when you first get moving."
   },
   {
    "t": "Swelling or a thick spot",
    "d": "The tendon may feel thicker or have a small lump."
   },
   {
    "t": "Pain with activity",
    "d": "Running, jumping and climbing stairs hurt."
   }
  ],
  "c": [
   "Sudden increase in activity",
   "Tight calf muscles",
   "Hill running or hard surfaces",
   "Worn or unsupportive shoes",
   "Age and flat feet"
  ],
  "t": [
   "Warm up and stretch the calves",
   "Increase activity slowly",
   "Replace worn shoes",
   "Rest early when the tendon starts to ache"
  ]
 },
 "achilles-tendon-tears-and-ruptures": {
  "s": [
   {
    "t": "A sudden pop or snap",
    "d": "A sharp feeling at the back of the ankle, as if kicked."
   },
   {
    "t": "Sudden pain and weakness",
    "d": "The back of the calf or ankle hurts and the foot feels weak."
   },
   {
    "t": "Swelling and bruising",
    "d": "The back of the ankle swells and may bruise."
   },
   {
    "t": "Trouble pushing off",
    "d": "It is hard to stand on tiptoe or walk normally."
   }
  ],
  "c": [
   "Sudden push-off in sports",
   "Tendon wear from years of strain",
   "Tight calf muscles",
   "Some medicines",
   "A past tendon injury"
  ],
  "t": [
   "Warm up before sports",
   "Stretch the calf muscles",
   "Treat Achilles pain early",
   "Get care right away for a sudden pop at the back of the ankle"
  ]
 },
 "haglunds-deformity-and-retrocalcaneal-bursitis": {
  "s": [
   {
    "t": "A bump on the back of the heel",
    "d": "A hard bump forms where the heel meets the Achilles tendon."
   },
   {
    "t": "Redness and swelling",
    "d": "The back of the heel can look red and puffy."
   },
   {
    "t": "Pain from shoes",
    "d": "Stiff heel counters rub on the bump."
   },
   {
    "t": "Pain with activity",
    "d": "Pain can build when running or walking uphill."
   }
  ],
  "c": [
   "A heel bone shape that sticks out",
   "Tight Achilles tendon",
   "High arches",
   "Stiff-backed shoes",
   "Repeated rubbing or stress"
  ],
  "t": [
   "Wear shoes with soft, open or padded backs",
   "Use heel lifts or pads as advised",
   "Stretch the calves",
   "Avoid shoes that rub the back of the heel"
  ]
 },
 "calcaneal-apophysitis-or-severs-disease": {
  "s": [
   {
    "t": "Heel pain in active children",
    "d": "Pain is common in kids ages 8 to 14."
   },
   {
    "t": "Pain with running or jumping",
    "d": "The heel hurts during or after sports."
   },
   {
    "t": "Tender back of the heel",
    "d": "Squeezing the sides of the heel is sore."
   },
   {
    "t": "Limping",
    "d": "Children may limp or walk on their toes."
   }
  ],
  "c": [
   "Growth spurts",
   "Tight calf muscles",
   "Lots of running and jumping",
   "Hard surfaces or flat cleats",
   "Pull of the Achilles tendon on a growing heel bone"
  ],
  "t": [
   "Choose cushioned, supportive shoes",
   "Use heel cups when advised",
   "Stretch the calves",
   "Rest from sports during pain flares"
  ]
 },
 "subtalar-arthritis-or-instability": {
  "s": [
   {
    "t": "Pain below the ankle",
    "d": "An ache in the hindfoot that grows with walking."
   },
   {
    "t": "Stiffness",
    "d": "Turning the foot side to side feels stiff."
   },
   {
    "t": "Pain on uneven ground",
    "d": "Grass, gravel and slopes make it worse."
   },
   {
    "t": "A feeling of giving way",
    "d": "The heel may feel unstable."
   }
  ],
  "c": [
   "A past heel or ankle fracture",
   "Past sprains or instability",
   "Wear and tear",
   "Inflammatory arthritis",
   "Flatfoot or alignment problems"
  ],
  "t": [
   "Wear sturdy shoes with good support",
   "Use a brace if advised",
   "Avoid uneven ground when sore",
   "Keep a healthy weight"
  ]
 },
 "sinus-tarsi-syndrome": {
  "s": [
   {
    "t": "Pain on the outside of the ankle",
    "d": "The pain is just in front of the outer ankle bone."
   },
   {
    "t": "Pain on uneven ground",
    "d": "Walking on slopes or grass hurts."
   },
   {
    "t": "A feeling of instability",
    "d": "The hindfoot may feel loose."
   },
   {
    "t": "Tenderness",
    "d": "Pressing the soft spot in front of the ankle bone is sore."
   }
  ],
  "c": [
   "A past ankle sprain",
   "Flat feet",
   "Repeated stress or overuse",
   "Inflammation of the joint lining",
   "Foot alignment problems"
  ],
  "t": [
   "Wear supportive shoes",
   "Use a brace or orthotic if advised",
   "Rehab sprains fully",
   "Avoid uneven ground while sore"
  ]
 },
 "hindfoot-valgus-or-varus-alignment": {
  "s": [
   {
    "t": "Heels tilted out or in",
    "d": "The heels lean toward the outside or the inside."
   },
   {
    "t": "Pain in the ankle or foot",
    "d": "Uneven pressure can cause aching."
   },
   {
    "t": "Frequent sprains",
    "d": "The ankle may roll often."
   },
   {
    "t": "Uneven shoe wear",
    "d": "Shoes wear out faster on one side."
   }
  ],
  "c": [
   "Inherited foot shape",
   "Flat or high-arched feet",
   "Past injury",
   "Muscle or tendon imbalance",
   "Growth conditions"
  ],
  "t": [
   "Wear supportive shoes",
   "Use orthotics if advised",
   "Strengthen the ankle muscles",
   "Have a child's leaning heels checked"
  ]
 },
 "flatfoot-or-cavus-deformity": {
  "s": [
   {
    "t": "A flat or very high arch",
    "d": "The arch looks different from normal."
   },
   {
    "t": "Pain in the heel or arch",
    "d": "The foot can ache after standing or walking."
   },
   {
    "t": "Ankle instability",
    "d": "The ankle may roll or feel weak."
   },
   {
    "t": "Uneven shoe wear",
    "d": "Shoes wear out on one side."
   }
  ],
  "c": [
   "Inherited foot shape",
   "Tendon problems",
   "Nerve or muscle conditions",
   "Past injury",
   "Arthritis"
  ],
  "t": [
   "Wear shoes with support that fits your arch",
   "Use orthotics as advised",
   "Do strengthening exercises",
   "Replace worn shoes often"
  ]
 },
 "peroneal-tendon-inflammation-tears": {
  "s": [
   {
    "t": "Pain on the outside of the ankle",
    "d": "The pain follows the tendon behind the outer ankle bone."
   },
   {
    "t": "Swelling",
    "d": "The outer ankle may swell and feel warm."
   },
   {
    "t": "A snapping feeling",
    "d": "The tendon may pop over the bone in some people."
   },
   {
    "t": "Weakness or instability",
    "d": "The ankle may feel weak or roll outward."
   }
  ],
  "c": [
   "Repeated ankle sprains",
   "Overuse in running or jumping",
   "A high-arched foot",
   "Tight or worn shoes",
   "A sudden twisting injury"
  ],
  "t": [
   "Wear supportive shoes",
   "Strengthen and balance the ankle",
   "Rehab sprains fully",
   "Rest when the outer ankle starts to ache"
  ]
 },
 "tarsal-coalition-involving-the-hindfoot": {
  "s": [
   {
    "t": "A stiff hindfoot",
    "d": "The heel does not move as it should."
   },
   {
    "t": "Pain below the ankle",
    "d": "Pain grows with activity."
   },
   {
    "t": "Flatfoot",
    "d": "The arch may look flat."
   },
   {
    "t": "Frequent sprains",
    "d": "The ankle may roll often."
   }
  ],
  "c": [
   "Bones that join together before birth",
   "Inherited foot shape",
   "Growth spurts",
   "Past injury",
   "Increased activity"
  ],
  "t": [
   "Wear supportive shoes",
   "Rest when pain flares",
   "Avoid uneven ground while sore",
   "Have a stiff, painful teen foot checked"
  ]
 },
 "heel-wounds-pressure-sores-and-ulcers": {
  "s": [
   {
    "t": "A red or dark spot on the heel",
    "d": "The skin looks red, dark or blistered."
   },
   {
    "t": "An open sore",
    "d": "A shallow or deep wound forms on the heel."
   },
   {
    "t": "Drainage or odor",
    "d": "Fluid, pus or a bad smell can mean infection."
   },
   {
    "t": "Little pain",
    "d": "With nerve damage or poor circulation, a wound may not hurt."
   }
  ],
  "c": [
   "Long periods in bed or a chair",
   "Diabetes",
   "Poor circulation",
   "Nerve damage",
   "Shoes or devices that rub"
  ],
  "t": [
   "Change position often",
   "Use pads or heel protectors",
   "Check your heels every day",
   "Call us right away about any open heel sore"
  ]
 },
 "ankle-sprains-and-ligament-injuries": {
  "s": [
   {
    "t": "Pain on the outside of the ankle",
    "d": "Pain starts after a roll or twist."
   },
   {
    "t": "Swelling",
    "d": "The ankle swells within hours."
   },
   {
    "t": "Bruising",
    "d": "Bruising can spread across the ankle and foot."
   },
   {
    "t": "Trouble walking",
    "d": "It hurts to put weight on the ankle."
   }
  ],
  "c": [
   "Rolling the ankle on uneven ground",
   "Sports with jumping or sudden turns",
   "Weak ankle muscles",
   "Unsupportive shoes",
   "A past sprain"
  ],
  "t": [
   "Strengthen the ankle and practice balance",
   "Wear supportive shoes",
   "Rehab a sprain fully",
   "Warm up before sports"
  ]
 },
 "chronic-ankle-instability": {
  "s": [
   {
    "t": "The ankle gives way",
    "d": "The ankle rolls during normal walking or sports."
   },
   {
    "t": "Repeated sprains",
    "d": "Sprains keep coming back."
   },
   {
    "t": "Ongoing soreness",
    "d": "The ankle may ache or swell after activity."
   },
   {
    "t": "Loss of confidence",
    "d": "You may avoid uneven ground or sports."
   }
  ],
  "c": [
   "Past sprains that did not heal fully",
   "Loose ligaments",
   "Weak ankle muscles",
   "Poor balance",
   "A high-arched foot"
  ],
  "t": [
   "Do balance and strength exercises",
   "Wear a brace for sports if advised",
   "Wear supportive shoes",
   "Do not return to sports too soon after a sprain"
  ]
 },
 "high-ankle-sprains-and-syndesmotic-injuries": {
  "s": [
   {
    "t": "Pain above the ankle",
    "d": "Pain sits higher on the ankle, between the lower leg bones."
   },
   {
    "t": "Pain with twisting",
    "d": "Turning the foot out or pushing off hurts."
   },
   {
    "t": "Swelling and bruising",
    "d": "The area above the ankle swells."
   },
   {
    "t": "Slow recovery",
    "d": "High ankle sprains often take longer to heal than regular sprains."
   }
  ],
  "c": [
   "A twist with the foot planted and the leg turning",
   "Contact sports",
   "Skiing and similar sports",
   "A forceful outward turn of the foot",
   "Falls"
  ],
  "t": [
   "Warm up before sports",
   "Strengthen the ankle and lower leg",
   "Do not rush back to sports",
   "Get a firm exam for pain above the ankle"
  ]
 },
 "deltoid-ligament-injuries": {
  "s": [
   {
    "t": "Pain on the inside of the ankle",
    "d": "Pain starts after a twist or fall."
   },
   {
    "t": "Swelling and bruising",
    "d": "The inner ankle swells and bruises."
   },
   {
    "t": "Pain with weight",
    "d": "It is hard to stand on the foot."
   },
   {
    "t": "Feeling of instability",
    "d": "The ankle may feel loose."
   }
  ],
  "c": [
   "Rolling the ankle outward",
   "Ankle fractures",
   "Sports injuries",
   "Falls",
   "Flat feet"
  ],
  "t": [
   "Wear supportive shoes",
   "Rehab ankle injuries fully",
   "Strengthen the ankle muscles",
   "Get a full exam after a big twist"
  ]
 },
 "ankle-fractures-including-malleolar-fractures": {
  "s": [
   {
    "t": "Strong pain after an injury",
    "d": "Pain is sharp after a fall, twist or hit."
   },
   {
    "t": "Swelling and bruising",
    "d": "The ankle swells quickly and may turn dark."
   },
   {
    "t": "A bent or odd-looking ankle",
    "d": "A bad break can change the shape of the ankle."
   },
   {
    "t": "Unable to stand on the foot",
    "d": "It hurts too much to walk."
   }
  ],
  "c": [
   "Falls",
   "Twisting injuries",
   "Car accidents",
   "Sports",
   "Weak bones"
  ],
  "t": [
   "Prevent falls at home",
   "Wear shoes with good grip",
   "Eat enough calcium and vitamin D",
   "Get care right away after a serious ankle injury"
  ]
 },
 "ankle-dislocations": {
  "s": [
   {
    "t": "Severe pain",
    "d": "Pain is sudden and very strong."
   },
   {
    "t": "A bent or out-of-place ankle",
    "d": "The ankle looks clearly wrong."
   },
   {
    "t": "Swelling and bruising",
    "d": "The ankle swells fast."
   },
   {
    "t": "Numbness or a cold foot",
    "d": "A serious injury can affect nerves and blood flow."
   }
  ],
  "c": [
   "High-force falls",
   "Car accidents",
   "Sports injuries",
   "Severe twisting",
   "Ankle fractures"
  ],
  "t": [
   "Get emergency care right away",
   "Keep the foot still until help arrives",
   "Follow weight-bearing rules after treatment",
   "Attend all follow-up visits"
  ]
 },
 "ankle-arthritis-including-post-traumatic": {
  "s": [
   {
    "t": "Ankle pain",
    "d": "An ache in the ankle that is worse with walking."
   },
   {
    "t": "Stiffness",
    "d": "The ankle feels stiff, especially after rest."
   },
   {
    "t": "Swelling",
    "d": "The joint may look puffy."
   },
   {
    "t": "Trouble with stairs and slopes",
    "d": "Going uphill or downhill is harder."
   }
  ],
  "c": [
   "A past ankle fracture or sprains",
   "Wear and tear",
   "Inflammatory arthritis",
   "Family history",
   "Extra body weight"
  ],
  "t": [
   "Wear supportive shoes",
   "Use a brace or cane as advised",
   "Keep a healthy weight",
   "Choose low-impact exercise"
  ]
 },
 "ankle-joint-replacement-or-total-ankle": {
  "s": [
   {
    "t": "Long-lasting ankle pain",
    "d": "Pain does not get better with other care."
   },
   {
    "t": "Stiffness",
    "d": "The ankle moves less and less."
   },
   {
    "t": "Trouble walking",
    "d": "Stairs, slopes and long walks hurt."
   },
   {
    "t": "Swelling",
    "d": "The joint may swell after activity."
   }
  ],
  "c": [
   "Advanced ankle arthritis",
   "A past ankle fracture",
   "Inflammatory arthritis",
   "Long-term wear",
   "Failed earlier treatment"
  ],
  "t": [
   "Follow the rehab plan after surgery",
   "Keep a healthy weight",
   "Choose low-impact activities",
   "Attend regular check-ups"
  ]
 },
 "osteochondral-lesions-of-the-talus": {
  "s": [
   {
    "t": "Deep ankle pain",
    "d": "A deep ache inside the ankle joint."
   },
   {
    "t": "Pain with activity",
    "d": "Pain is worse with walking and sports."
   },
   {
    "t": "Swelling",
    "d": "The ankle may swell after use."
   },
   {
    "t": "Catching or locking",
    "d": "The joint may catch or feel stuck."
   }
  ],
  "c": [
   "Ankle sprains and fractures",
   "Twisting injuries",
   "Repeated stress",
   "Blood supply problems",
   "Sports"
  ],
  "t": [
   "Rehab ankle sprains fully",
   "Wear supportive shoes",
   "Build up sports slowly",
   "Do not ignore ankle pain that lingers after a sprain"
  ]
 },
 "talar-fractures-avascular-necrosis": {
  "s": [
   {
    "t": "Pain after a fall or twist",
    "d": "Pain in the ankle after a high-force injury."
   },
   {
    "t": "Swelling",
    "d": "The ankle swells, often a lot."
   },
   {
    "t": "Trouble walking",
    "d": "It is hard to put weight on the foot."
   },
   {
    "t": "Pain that lingers or worsens",
    "d": "Pain may continue if bone blood supply is affected."
   }
  ],
  "c": [
   "High-force injuries",
   "Falls from a height",
   "Car accidents",
   "Some medicines or medical conditions",
   "Past ankle fractures"
  ],
  "t": [
   "Get care right away after a major ankle injury",
   "Follow the weight-bearing plan",
   "Attend all follow-up visits and scans",
   "Do not smoke"
  ]
 },
 "anterior-or-posterior-ankle-impingement": {
  "s": [
   {
    "t": "Pain in the front of the ankle",
    "d": "Pinching when the foot bends up."
   },
   {
    "t": "Pain at the back of the ankle",
    "d": "Pain when pointing the foot down."
   },
   {
    "t": "Swelling",
    "d": "The ankle can swell after activity."
   },
   {
    "t": "Limited motion",
    "d": "The ankle may not bend as far as before."
   }
  ],
  "c": [
   "Repeated stress in sports like soccer or ballet",
   "Past ankle sprains",
   "Bone spurs",
   "Soft tissue thickening",
   "Extra bone at the back of the ankle"
  ],
  "t": [
   "Warm up before activity",
   "Strengthen the ankle and calf",
   "Rehab sprains fully",
   "Avoid movements that cause pinching"
  ]
 },
 "os-trigonum-syndrome": {
  "s": [
   {
    "t": "Pain at the back of the ankle",
    "d": "Pain when the foot points down."
   },
   {
    "t": "Pain in dancers and kickers",
    "d": "Ballet, soccer and running can bring it on."
   },
   {
    "t": "Swelling",
    "d": "The back of the ankle can swell."
   },
   {
    "t": "Tenderness",
    "d": "The back of the ankle is sore to press."
   }
  ],
  "c": [
   "An extra bone at the back of the ankle",
   "Repeated pointing of the foot",
   "Ankle sprains",
   "Overuse",
   "Tight tissues behind the ankle"
  ],
  "t": [
   "Warm up before dance or sports",
   "Limit repeated pointing when sore",
   "Rest early when pain starts",
   "Stretch and strengthen the lower leg"
  ]
 },
 "ankle-synovitis-and-loose-bodies": {
  "s": [
   {
    "t": "Swelling in the ankle",
    "d": "The joint feels puffy and warm."
   },
   {
    "t": "Ankle pain",
    "d": "A steady ache that worsens with activity."
   },
   {
    "t": "Catching or clicking",
    "d": "The joint may catch or click."
   },
   {
    "t": "A feeling of something loose",
    "d": "Small pieces in the joint can cause locking."
   }
  ],
  "c": [
   "Past ankle injuries",
   "Wear and tear",
   "Inflammation of the joint lining",
   "Arthritis",
   "Repeated stress"
  ],
  "t": [
   "Rehab ankle injuries fully",
   "Wear supportive shoes",
   "Avoid pushing through ankle swelling",
   "Have clicking or locking checked"
  ]
 },
 "tendon-injuries-around-the-ankle": {
  "s": [
   {
    "t": "Pain along a tendon",
    "d": "The pain follows the tendon on the inside, outside, front or back of the ankle."
   },
   {
    "t": "Swelling",
    "d": "The area around the tendon can swell."
   },
   {
    "t": "Weakness",
    "d": "The foot or ankle may feel weak."
   },
   {
    "t": "Pain with activity",
    "d": "Pain is worse during or after sports."
   }
  ],
  "c": [
   "Overuse",
   "Sudden increase in activity",
   "Past ankle injury",
   "Tight or worn shoes",
   "Foot shape such as flat feet or high arches"
  ],
  "t": [
   "Warm up before sports",
   "Increase activity slowly",
   "Wear supportive shoes",
   "Rest when a tendon starts to ache"
  ]
 },
 "equinus-and-limited-upward-ankle-motion": {
  "s": [
   {
    "t": "Tight ankle",
    "d": "It is hard to pull the foot up toward the shin."
   },
   {
    "t": "Walking on tiptoes",
    "d": "You may walk on the balls of the feet."
   },
   {
    "t": "Pain in the heel, arch or ball of the foot",
    "d": "Tightness shifts pressure to other parts of the foot."
   },
   {
    "t": "Calf tightness",
    "d": "The calf muscles feel tight."
   }
  ],
  "c": [
   "Tight calf muscles",
   "A tight Achilles tendon",
   "Past ankle injury",
   "Some muscle or nerve conditions",
   "Wearing high heels often"
  ],
  "t": [
   "Stretch the calves daily",
   "Avoid high heels for long periods",
   "Wear supportive shoes",
   "Treat early before other foot pain starts"
  ]
 },
 "gastrocnemius-tightness-or-contracture": {
  "s": [
   {
    "t": "Tight calf muscle",
    "d": "The calf feels tight, especially when the knee is straight."
   },
   {
    "t": "Pain in the foot",
    "d": "Heel, arch or ball of foot pain can follow."
   },
   {
    "t": "Limited ankle motion",
    "d": "The ankle does not bend up as far as it should."
   },
   {
    "t": "Strain with walking",
    "d": "Walking or running feels tight and tiring."
   }
  ],
  "c": [
   "Tight muscles from habit or shoes",
   "A tight Achilles tendon",
   "Muscle imbalance",
   "Some nerve or muscle conditions",
   "Past injury"
  ],
  "t": [
   "Stretch the calves every day",
   "Wear shoes with a small heel lift if advised",
   "Stay active",
   "Treat calf tightness early"
  ]
 },
 "tarsal-tunnel-syndrome-and-other-ankle-nerve": {
  "s": [
   {
    "t": "Burning or tingling",
    "d": "Sensations in the inner ankle, heel or sole of the foot."
   },
   {
    "t": "Numbness",
    "d": "Part of the foot may feel numb."
   },
   {
    "t": "Pain that worsens with activity",
    "d": "Standing and walking can bring on symptoms."
   },
   {
    "t": "Night symptoms",
    "d": "Symptoms may be stronger at night."
   }
  ],
  "c": [
   "Flat feet",
   "Swelling or fluid near the nerve",
   "A past ankle injury",
   "Cysts or growths pressing on the nerve",
   "Diabetes or arthritis"
  ],
  "t": [
   "Wear supportive shoes",
   "Rest and raise the foot when symptoms flare",
   "Use orthotics if advised",
   "Have tingling or numbness checked early"
  ]
 },
 "diabetic-foot-conditions": {
  "s": [
   {
    "t": "Numbness or tingling",
    "d": "Feet may feel numb, tingly or burn."
   },
   {
    "t": "Sores that heal slowly",
    "d": "Cuts and blisters take a long time to heal or do not heal."
   },
   {
    "t": "Dry, cracked skin",
    "d": "Skin can crack and let germs in."
   },
   {
    "t": "Changes in foot shape",
    "d": "Feet may become red, warm or change shape over time."
   }
  ],
  "c": [
   "High blood sugar over time",
   "Nerve damage",
   "Poor circulation",
   "Poorly fitting shoes",
   "Past foot ulcers"
  ],
  "t": [
   "Check your feet every day",
   "Wash and dry feet well, including between toes",
   "Never go barefoot",
   "Keep regular foot exams and blood sugar in range"
  ]
 },
 "foot-and-ankle-wounds-ulcers-and-pressure": {
  "s": [
   {
    "t": "An open sore",
    "d": "A break in the skin that does not heal in a few weeks."
   },
   {
    "t": "Redness or warmth",
    "d": "The skin around the wound may be red or warm."
   },
   {
    "t": "Drainage or odor",
    "d": "Fluid or a bad smell can be a sign of infection."
   },
   {
    "t": "Swelling or pain",
    "d": "The area may swell or hurt, though some people feel little."
   }
  ],
  "c": [
   "Diabetes",
   "Poor circulation",
   "Nerve damage",
   "Pressure from shoes or from lying in bed",
   "Long-lasting swelling"
  ],
  "t": [
   "Check your feet every day",
   "Wear well-fitting shoes and clean socks",
   "Do not ignore a small sore",
   "See us early for any wound that is not healing"
  ]
 },
 "skin-and-soft-tissue-infections-cellulitis": {
  "s": [
   {
    "t": "Redness that spreads",
    "d": "The skin turns red and the redness grows."
   },
   {
    "t": "Warmth and swelling",
    "d": "The area is warm, puffy and tender."
   },
   {
    "t": "Pain or a lump",
    "d": "A painful lump or pocket of pus may form."
   },
   {
    "t": "Fever or chills",
    "d": "Feeling sick can be a sign the infection is spreading."
   }
  ],
  "c": [
   "A cut, scrape or insect bite",
   "Cracked skin from athlete's foot",
   "Diabetes",
   "Poor circulation",
   "Long-lasting swelling"
  ],
  "t": [
   "Clean and cover any cut or scrape",
   "Treat athlete's foot and dry, cracked skin",
   "Wear clean, dry socks",
   "Get care fast for spreading redness or fever"
  ]
 },
 "osteomyelitis-or-bone-infection": {
  "s": [
   {
    "t": "Deep, lasting pain",
    "d": "A deep ache in the foot or ankle that does not improve."
   },
   {
    "t": "Swelling and redness",
    "d": "The area may be swollen, red and warm."
   },
   {
    "t": "A wound that will not heal",
    "d": "An open sore may sit over the infected bone."
   },
   {
    "t": "Fever or drainage",
    "d": "Some people have fever, or drainage from the skin."
   }
  ],
  "c": [
   "A deep wound or ulcer",
   "Diabetes",
   "Poor circulation",
   "Past surgery or injury",
   "A spreading skin infection"
  ],
  "t": [
   "Treat foot wounds early",
   "Check your feet daily",
   "Keep blood sugar in range",
   "Do not ignore a sore that will not heal"
  ]
 },
 "puncture-wounds-and-retained-foreign-bodies": {
  "s": [
   {
    "t": "Pain at the site",
    "d": "The wound hurts, especially when walking."
   },
   {
    "t": "A small hole or break in the skin",
    "d": "The opening may look small but be deep."
   },
   {
    "t": "Redness, swelling or drainage",
    "d": "Signs of infection can appear in a few days."
   },
   {
    "t": "A feeling of something inside",
    "d": "You may feel a splinter, glass or other object."
   }
  ],
  "c": [
   "Stepping on a nail, glass or sharp object",
   "Walking barefoot outdoors",
   "Gardening or yard work",
   "Fishing or beach injuries",
   "Animal or insect injuries"
  ],
  "t": [
   "Wear shoes outdoors and at the beach",
   "Wash any puncture well right away",
   "Keep your tetanus shots up to date",
   "Get care soon for deep wounds or if something stays inside"
  ]
 },
 "peripheral-neuropathy-nerve-pain-numbness": {
  "s": [
   {
    "t": "Tingling or burning",
    "d": "Feet feel pins and needles or burn."
   },
   {
    "t": "Numbness",
    "d": "You may not feel hot, cold or small cuts."
   },
   {
    "t": "Sharp or shooting pain",
    "d": "Pain can come and go, often at night."
   },
   {
    "t": "Weakness or balance trouble",
    "d": "Feet may feel weak and you may stumble."
   }
  ],
  "c": [
   "Diabetes",
   "Vitamin deficiency",
   "Alcohol use",
   "Some medicines",
   "Other nerve and medical conditions"
  ],
  "t": [
   "Check your feet every day",
   "Wear protective, well-fitting shoes",
   "Keep blood sugar in range",
   "Avoid walking barefoot"
  ]
 },
 "drop-foot-and-muscle-imbalance": {
  "s": [
   {
    "t": "Toes that catch",
    "d": "The front of the foot does not lift well and toes drag."
   },
   {
    "t": "Slapping steps",
    "d": "The foot slaps the ground when you walk."
   },
   {
    "t": "High stepping",
    "d": "You may lift the knee higher to clear the foot."
   },
   {
    "t": "Frequent trips",
    "d": "Tripping and falls are more likely."
   }
  ],
  "c": [
   "Nerve injury or pressure near the knee or back",
   "Muscle conditions",
   "Stroke or other nerve conditions",
   "Diabetes",
   "Past injury or surgery"
  ],
  "t": [
   "Wear shoes that fit snugly",
   "Use a brace if advised",
   "Clear tripping hazards at home",
   "Have new foot weakness checked soon"
  ]
 },
 "gout-and-inflammatory-arthritis": {
  "s": [
   {
    "t": "Sudden joint pain",
    "d": "Often the big toe, with strong pain that may start at night."
   },
   {
    "t": "Redness and warmth",
    "d": "The joint looks red and feels hot."
   },
   {
    "t": "Swelling",
    "d": "The joint swells and is very tender."
   },
   {
    "t": "Stiffness",
    "d": "Joints may be stiff, especially in the morning, with other types of arthritis."
   }
  ],
  "c": [
   "High uric acid",
   "Foods and drinks high in purines",
   "Family history",
   "Some medicines",
   "Autoimmune conditions such as rheumatoid arthritis"
  ],
  "t": [
   "Drink plenty of water",
   "Limit red meat, shellfish and alcohol",
   "Keep a healthy weight",
   "Take medicines as prescribed"
  ]
 },
 "bone-cysts-ganglion-cysts-and-soft-tissue": {
  "s": [
   {
    "t": "A lump or swelling",
    "d": "A bump that may be soft or firm."
   },
   {
    "t": "Pain or pressure",
    "d": "The lump may ache or press on shoes."
   },
   {
    "t": "Tingling",
    "d": "A lump may press on a nerve."
   },
   {
    "t": "Changes in size",
    "d": "The lump can grow or shrink."
   }
  ],
  "c": [
   "Fluid from a joint or tendon",
   "Past injury",
   "Wear and tear",
   "Rare bone or soft-tissue growths",
   "Unknown causes"
  ],
  "t": [
   "Do not try to pop or drain a lump",
   "Wear shoes that do not press on it",
   "Note any change in size or color",
   "Have new or growing lumps checked"
  ]
 },
 "athletes-foot-and-other-fungal-skin-conditions": {
  "s": [
   {
    "t": "Itching and burning",
    "d": "Often between the toes or on the soles."
   },
   {
    "t": "Peeling or cracked skin",
    "d": "Skin may peel, flake or crack."
   },
   {
    "t": "Redness or scaling",
    "d": "The skin looks red or dry and scaly."
   },
   {
    "t": "Blisters or odor",
    "d": "Some types cause blisters or a bad smell."
   }
  ],
  "c": [
   "Fungus that thrives in warm, damp places",
   "Sweaty feet and closed shoes",
   "Walking barefoot in pools and locker rooms",
   "Sharing towels or shoes",
   "A weakened immune system"
  ],
  "t": [
   "Dry feet well, especially between toes",
   "Wear breathable socks and change them often",
   "Wear sandals in public showers",
   "Rotate shoes so they can dry"
  ]
 },
 "dermatitis-eczema-and-other-foot-rashes": {
  "s": [
   {
    "t": "Itching",
    "d": "The skin on the foot feels itchy."
   },
   {
    "t": "Redness",
    "d": "Patches of skin look red or irritated."
   },
   {
    "t": "Dry or flaky skin",
    "d": "The skin may scale or crack."
   },
   {
    "t": "Blisters or weeping",
    "d": "Some rashes blister or ooze."
   }
  ],
  "c": [
   "Allergies to shoes, socks or products",
   "Dry skin",
   "Sweat and moisture",
   "Eczema",
   "Fungal or other infections"
  ],
  "t": [
   "Wear breathable socks and shoes",
   "Moisturize daily",
   "Avoid harsh soaps and known triggers",
   "Have a rash that lasts or spreads checked"
  ]
 },
 "circulation-concerns-peripheral-arterial": {
  "s": [
   {
    "t": "Leg or foot pain when walking",
    "d": "Cramping that eases with rest."
   },
   {
    "t": "Cold feet",
    "d": "One foot may feel colder than the other."
   },
   {
    "t": "Color changes",
    "d": "Skin may look pale, blue or dark red."
   },
   {
    "t": "Slow-healing sores",
    "d": "Wounds heal slowly or not at all."
   }
  ],
  "c": [
   "Smoking",
   "Diabetes",
   "High blood pressure or cholesterol",
   "Age",
   "Vein problems and long-lasting swelling"
  ],
  "t": [
   "Do not smoke",
   "Stay active with walking",
   "Keep blood pressure, cholesterol and blood sugar in range",
   "Check your feet daily and report sores early"
  ]
 },
 "congenital-foot-and-ankle-conditions": {
  "s": [
   {
    "t": "A foot that looks different at birth",
    "d": "The shape or position of the foot is unusual."
   },
   {
    "t": "A stiff foot",
    "d": "The foot may be hard to move to a normal position."
   },
   {
    "t": "Trouble with walking",
    "d": "Children may walk with a limp or on the side of the foot."
   },
   {
    "t": "Uneven growth",
    "d": "One side may grow differently."
   }
  ],
  "c": [
   "Position in the womb",
   "Inherited traits",
   "Nerve or muscle conditions",
   "Genetic conditions",
   "Often unknown"
  ],
  "t": [
   "Have a baby's feet checked early",
   "Follow the care plan",
   "Keep regular visits as a child grows",
   "Ask about shoes and bracing"
  ]
 },
 "sports-related-foot-and-ankle-injuries": {
  "s": [
   {
    "t": "Pain during or after activity",
    "d": "The foot or ankle hurts when you play."
   },
   {
    "t": "Swelling and bruising",
    "d": "The area swells after an injury."
   },
   {
    "t": "Trouble pushing off",
    "d": "Running, cutting and jumping hurt."
   },
   {
    "t": "A feeling of instability",
    "d": "The foot or ankle gives way."
   }
  ],
  "c": [
   "Sudden twists or hard landings",
   "Overuse",
   "Training too much too soon",
   "Worn or unsuitable shoes",
   "Weak muscles or poor balance"
  ],
  "t": [
   "Warm up before play",
   "Build up training slowly",
   "Wear sport-specific, supportive shoes",
   "Rest and get care early for pain that does not settle"
  ]
 },
 "persistent-pain-after-injury-or-surgery": {
  "s": [
   {
    "t": "Pain that does not go away",
    "d": "Pain lasts longer than expected after healing."
   },
   {
    "t": "Stiffness",
    "d": "The joint does not move as before."
   },
   {
    "t": "Pain from hardware",
    "d": "Plates or screws may feel sore under the skin."
   },
   {
    "t": "Trouble walking",
    "d": "It is hard to stand or walk as you used to."
   }
  ],
  "c": [
   "A bone that did not heal",
   "A bone that healed crooked",
   "Scar tissue and stiffness",
   "Irritation from hardware",
   "Nerve irritation"
  ],
  "t": [
   "Keep follow-up visits",
   "Follow rehab and weight-bearing instructions",
   "Do not smoke",
   "Tell us early if pain returns or changes"
  ]
 }
};
