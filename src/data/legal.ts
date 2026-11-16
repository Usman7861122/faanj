export interface LegalSection { h: string; p?: string[]; ul?: string[] }
export interface LegalDoc {
  slug: string;
  title: string;
  eyebrow: string;
  lede: string;
  description: string;
  updated: string;
  sections: LegalSection[];
}

const contact =
  'Foot & Ankle Specialists of New Jersey, 2265 South Ave, Scotch Plains, NJ 07076. Phone: 908-232-3346.';

export const privacyPolicy: LegalDoc = {
  slug: 'privacy-policy',
  title: 'Privacy Policy',
  eyebrow: 'Legal',
  lede: 'How we collect, use and protect information when you visit our website.',
  description: 'Privacy policy for Foot & Ankle Specialists of New Jersey website: what we collect, how we use it, cookies, security and your choices.',
  updated: 'November 16, 2026',
  sections: [
    {
      h: 'About this policy',
      p: [
        'Foot & Ankle Specialists of New Jersey cares about your privacy. This policy explains what information we collect through this website, how we use it and the choices you have. By using the website, you agree to the practices described here.',
        'This policy covers the website only. How we handle your health information as a patient is described in our Notice of Privacy Practices, which is available from the Our Practice menu and at your visit.',
      ],
    },
    {
      h: 'Information we collect',
      ul: [
        'Information you give us, such as your name, email address, phone number and the message you send through a form.',
        'General details that do not identify you, such as your ZIP code, age range or interests, if you choose to share them.',
        'Technical information collected automatically, such as your IP address, browser type, device, pages visited, the date and time of your visit and the site that referred you.',
        'Anything you post in a public area of the site, which others may be able to see.',
      ],
    },
    {
      h: 'Please do not send health details online',
      p: [
        'Website forms and email are not a secure way to share medical information. Please do not include diagnoses, test results or other health details in a message. To discuss your care, call the office or use the patient portal.',
      ],
    },
    {
      h: 'How we use information',
      ul: [
        'To run the website and respond to your questions and requests.',
        'To schedule, confirm and follow up on appointment requests.',
        'To understand how the site is used and to make it better.',
        'To tell you about our services, when you have asked to hear from us. You can opt out at any time.',
        'To meet legal and regulatory duties.',
      ],
    },
    {
      h: 'Sharing',
      p: [
        'We do not sell, rent or lease your personal information. We may share it with trusted service providers who help us run the website, send messages or analyze usage. They may only use it to provide those services and must keep it confidential.',
        'We may also share information when the law requires it, or to protect the rights, safety and property of our patients, our staff and the public.',
      ],
    },
    {
      h: 'Cookies and similar tools',
      p: [
        'We use cookies and similar technologies to keep the site working, remember your choices and, with your permission, measure how the site performs. You can change your choices at any time using the Cookie Settings link in the footer. See our Cookie Policy for details.',
      ],
    },
    {
      h: 'Security',
      p: [
        'We use reasonable technical and organizational measures to protect information on our servers from unauthorized access, and we use encryption (SSL) when information is sent to and from this site. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
      ],
    },
    {
      h: 'Links to other websites',
      p: ['Our site may link to other websites. We do not control them and are not responsible for their privacy practices. Please read their policies before sharing information.'],
    },
    {
      h: 'Children',
      p: ['This website is meant for adults. We do not knowingly collect personal information from children under 13 through the site. If you believe a child has sent us information, please contact us and we will delete it.'],
    },
    {
      h: 'Your choices',
      ul: [
        'Ask to see, correct or delete the personal information you sent us through the website.',
        'Opt out of marketing messages by following the instructions in the message or by contacting us.',
        'Change cookie choices at any time through Cookie Settings, or through your browser settings.',
      ],
    },
    {
      h: 'Changes to this policy',
      p: ['We may update this policy from time to time. The date at the top shows when it last changed. Please check back now and then.'],
    },
    { h: 'Contact us', p: [`If you have questions about this policy, contact ${contact}`] },
  ],
};

export const termsConditions: LegalDoc = {
  slug: 'terms-conditions',
  title: 'Terms & Conditions',
  eyebrow: 'Legal',
  lede: 'The rules for using our website, written in plain language.',
  description: 'Terms and conditions of use for the Foot & Ankle Specialists of New Jersey website.',
  updated: 'November 16, 2026',
  sections: [
    {
      h: 'Accepting these terms',
      p: ['Foot & Ankle Specialists of New Jersey provides this website to you on the condition that you accept these terms, conditions and notices. By using the site, you agree to them. If you do not agree, please do not use the site.'],
    },
    {
      h: 'Not medical advice',
      p: [
        'The information on this website is for general education only. It is not medical advice and does not create a doctor-patient relationship. It should not replace a visit with a qualified healthcare professional.',
        'If you have a medical emergency, call 911 or go to the nearest emergency room. Do not wait for a reply to a website message.',
      ],
    },
    {
      h: 'Changes to these terms',
      p: ['We may change these terms, conditions and notices, and any charges connected with using the site, at any time. Changes apply from the date they are posted, so please review this page from time to time.'],
    },
    {
      h: 'Appropriate use',
      p: ['You agree not to use the site in an unlawful way, or in a way that could damage it, overload it or interfere with anyone else’s use. You also agree not to try to reach any part of the site or its systems that is not intentionally made available to you.'],
    },
    {
      h: 'Content you submit',
      p: ['If you send us a review, comment or feedback, it must be relevant and respectful. It must not include:'],
      ul: [
        'Personal or health information about you or anyone else.',
        'Abusive, hateful or discriminatory material.',
        'Advertising, spam or chain letters.',
        'Anything illegal, or details of an ongoing legal matter.',
        'Files that contain viruses or other harmful code.',
      ],
    },
    {
      h: 'Our rights over submissions',
      p: ['We are not required to monitor what people post. We may remove anything that breaks these terms and may end a person’s access at any time. If you would like a review you wrote to be removed, contact us.'],
    },
    {
      h: 'Intellectual property',
      p: ['The text, images, logos and design of this website belong to Foot & Ankle Specialists of New Jersey or its licensors and are protected by law. You may view and print pages for your own personal use. Please do not copy, reuse or distribute them without our written permission.'],
    },
    {
      h: 'Links to other websites',
      p: ['We do not control websites that we link to and are not responsible for what is on them. Links are for your convenience and do not mean that we endorse the site or its owner.'],
    },
    {
      h: 'Disclaimer and limits of liability',
      p: [
        'The information on this site may contain errors and may change at any time without notice. The site is provided “as is”, without warranties of any kind, to the fullest extent allowed by law.',
        'To the fullest extent allowed by law, Foot & Ankle Specialists of New Jersey and its suppliers are not liable for damages that arise from using, or not being able to use, the site. If you are not satisfied with the site, your only remedy is to stop using it.',
      ],
    },
    {
      h: 'Governing law',
      p: ['These terms are governed by the laws of the State of New Jersey, without regard to its conflict of law rules.'],
    },
    { h: 'Notices and contact', p: [`Questions about these terms can be sent to ${contact}`] },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: 'cookie-policy',
  title: 'Cookie Policy',
  eyebrow: 'Legal',
  lede: 'What cookies are, which ones we use and how you can control them.',
  description: 'Cookie policy for the Foot & Ankle Specialists of New Jersey website, including how to change your cookie choices.',
  updated: 'November 16, 2026',
  sections: [
    {
      h: 'What are cookies?',
      p: ['Cookies are small text files that a website saves on your device. They cannot run programs or deliver viruses, and they can only be read by the server that created them. We use them to make the site work, to remember your choices and to learn how the site is used.'],
    },
    {
      h: 'The cookies we use',
      ul: [
        'Strictly necessary: needed for the site to work and to remember your cookie choice. These are always on.',
        'Preferences: remember choices you make on the site so you do not need to repeat them.',
        'Analytics: show us, in a combined form, how visitors use the site so we can improve it.',
        'Marketing and embedded content: allow content from other services, such as maps and videos, and help us measure how our advertising performs.',
      ],
    },
    {
      h: 'Your choices',
      p: [
        'When you first visit, you can accept all cookies, keep only the essential ones or choose by category. You can change your mind at any time with the Cookie Settings link in the footer of every page.',
        'You can also block or delete cookies in your browser settings. If you block all cookies, some parts of the site may not work as expected.',
      ],
    },
    {
      h: 'How long your choice is kept',
      p: ['We save your choice for up to 180 days, and then ask again. If you clear your browser data, we will ask again sooner.'],
    },
    { h: 'Questions', p: [`If you have questions about cookies, contact ${contact}`] },
  ],
};
