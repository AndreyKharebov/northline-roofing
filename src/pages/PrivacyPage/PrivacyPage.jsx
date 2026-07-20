import PrivacyDocument from '../../components/privacy/PrivacyDocument/PrivacyDocument';
import PrivacyContact from '../../components/privacy/PrivacyContact/PrivacyContact';

import PageHero from '../../components/common/PageHero/PageHero';

const privacySections = [
  {
    id: 'introduction',
    title: '1. Introduction',
    paragraphs: [
      'Northline Roofing & Exteriors respects your privacy. This Privacy Policy explains what information may be collected when you visit this website, submit a form, request an estimate, or otherwise contact us.',
      'By using this website, you acknowledge the practices described in this policy.',
    ],
  },
  {
    id: 'information-we-collect',
    title: '2. Information We Collect',
    paragraphs: [
      'We may collect information that you voluntarily provide through estimate forms, contact forms, question forms, telephone calls, emails, and other communications.',
    ],
    items: [
      'Your name.',
      'Telephone number.',
      'Email address.',
      'Property address, city, and ZIP code.',
      'Requested service or project category.',
      'Information about your property or project.',
      'Preferred method of communication.',
      'Any additional information included in your message.',
    ],
  },
  {
    id: 'automatic-information',
    title: '3. Information Collected Automatically',
    paragraphs: [
      'When analytics, security, or hosting services are enabled, certain technical information may be collected automatically when you use the website.',
    ],
    items: [
      'Internet Protocol address.',
      'Browser and device type.',
      'Operating system.',
      'Pages viewed and time spent on the website.',
      'Referring website or search source.',
      'Approximate geographic region.',
      'Website performance and error information.',
    ],
    note: 'This demonstration project does not currently connect its forms to a production database or analytics platform. This section must be updated when real services are added.',
  },
  {
    id: 'how-we-use-information',
    title: '4. How We Use Information',
    paragraphs: [
      'Information collected through the website may be used to respond to inquiries, review project requests, prepare estimates, schedule inspections, provide customer service, and operate the website.',
    ],
    items: [
      'Respond to estimate and service requests.',
      'Contact you about a submitted inquiry.',
      'Schedule an inspection or consultation.',
      'Prepare a project recommendation or proposal.',
      'Improve website performance and user experience.',
      'Maintain website security and prevent misuse.',
      'Comply with applicable legal obligations.',
    ],
  },
  {
    id: 'communications',
    title: '5. Phone, Email, and Text Communications',
    paragraphs: [
      'When you provide contact information, you authorize us to respond to your inquiry using the communication methods you selected or supplied.',
      'Submitting a website form does not require you to purchase a service. Message and data rates may apply to text communications.',
    ],
  },
  {
    id: 'cookies',
    title: '6. Cookies and Similar Technologies',
    paragraphs: [
      'Cookies are small files that websites may store on a device. They can support website functionality, remember preferences, measure traffic, and help identify technical problems.',
      'If analytics, advertising, embedded maps, or third-party media are added, those services may use their own cookies or similar technologies.',
    ],
  },
  {
    id: 'sharing-information',
    title: '7. How Information May Be Shared',
    paragraphs: [
      'We do not sell personal information submitted through the website. Information may be shared with service providers only when reasonably necessary to operate the website or respond to an inquiry.',
    ],
    items: [
      'Website hosting providers.',
      'Email and communication providers.',
      'Customer relationship management services.',
      'Analytics and website-security providers.',
      'Contractors or service partners involved in a requested project.',
      'Government authorities when disclosure is legally required.',
    ],
  },
  {
    id: 'data-retention',
    title: '8. Data Retention',
    paragraphs: [
      'Personal information may be retained for as long as reasonably necessary to respond to an inquiry, maintain business records, provide requested services, resolve disputes, or satisfy legal obligations.',
      'Retention periods may vary depending on the type of information and the purpose for which it was collected.',
    ],
  },
  {
    id: 'data-security',
    title: '9. Data Security',
    paragraphs: [
      'Reasonable administrative and technical measures may be used to protect information submitted through the website. However, no internet transmission, email communication, or electronic storage system can be guaranteed to be completely secure.',
      'Do not submit highly sensitive information, financial account information, passwords, or government identification numbers through general website forms.',
    ],
  },
  {
    id: 'your-choices',
    title: '10. Your Choices',
    paragraphs: [
      'You may contact us to request that we update or correct information you previously submitted. You may also ask us to stop nonessential marketing communications.',
      'Certain information may still be retained when required for legal, contractual, security, or recordkeeping purposes.',
    ],
  },
  {
    id: 'third-party-links',
    title: '11. Third-Party Links and Services',
    paragraphs: [
      'The website may contain links to third-party websites or services, including social media platforms, review websites, maps, financing providers, or manufacturers.',
      'Northline Roofing & Exteriors is not responsible for the privacy practices or content of third-party websites. Review their policies before submitting personal information.',
    ],
  },
  {
    id: 'children',
    title: '12. Children’s Privacy',
    paragraphs: [
      'This website is intended for homeowners, property managers, and other adults seeking roofing or exterior services. It is not directed to children, and we do not knowingly seek personal information from children.',
    ],
  },
  {
    id: 'policy-updates',
    title: '13. Changes to This Privacy Policy',
    paragraphs: [
      'This policy may be updated when website functionality, business practices, or legal requirements change. The updated version will be posted on this page with a revised effective date.',
    ],
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    paragraphs: [
      'Questions about this Privacy Policy or information submitted through the website may be directed to Northline Roofing & Exteriors using the contact details below.',
    ],
    items: [
      'Email: info@northlineroofing.com',
      'Phone: (215) 555-0198',
      'Mailing address: 1234 Northline Drive, Philadelphia, PA 19154',
    ],
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow='July 18, 2026'
        title='Privacy Policy'
        description='This policy explains how information may be collected, used, stored, and shared when you interact with the Northline Roofing & Exteriors website.'
        type='minimal'
        size='compact'
      />
      <PrivacyDocument sections={privacySections} />
      <PrivacyContact />
    </>
  );
}

export default PrivacyPage;
