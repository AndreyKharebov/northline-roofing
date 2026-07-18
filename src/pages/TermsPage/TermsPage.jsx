import TermsHero from '../../components/terms/TermsHero/TermsHero';
import TermsDocument from '../../components/terms/TermsDocument/TermsDocument';
import TermsContact from '../../components/terms/TermsContact/TermsContact';

const termsSections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    paragraphs: [
      'These Terms of Service govern your use of the Northline Roofing & Exteriors website. By accessing or using this website, you agree to these terms.',
      'If you do not agree with these terms, you should discontinue use of the website.',
    ],
  },
  {
    id: 'website-purpose',
    title: '2. Website Purpose',
    paragraphs: [
      'This website provides general information about roofing, exterior services, service areas, completed projects, and methods for contacting Northline Roofing & Exteriors.',
      'Website content is provided for general informational and promotional purposes. It is not a substitute for an on-site inspection, written estimate, signed proposal, or professional evaluation of a specific property.',
    ],
  },
  {
    id: 'service-requests',
    title: '3. Estimate and Service Requests',
    paragraphs: [
      'Submitting a contact form, question form, or estimate request does not create a contractor-client relationship and does not obligate either party to proceed with a project.',
      'A project is accepted only after the required inspection, scope review, pricing process, and execution of a written agreement by the appropriate parties.',
    ],
    items: [
      'Website estimates are not final construction proposals.',
      'Project availability may depend on location, schedule, materials, weather, and project scope.',
      'Additional information or an inspection may be required before pricing can be provided.',
      'Northline Roofing & Exteriors may decline a request that falls outside its services or service area.',
    ],
  },
  {
    id: 'website-information',
    title: '4. Accuracy of Website Information',
    paragraphs: [
      'We make reasonable efforts to present accurate and current information. However, website content may contain errors, omissions, outdated information, or general descriptions that do not apply to every property.',
      'Services, service areas, materials, schedules, availability, warranties, and pricing may change without prior website notice.',
    ],
  },
  {
    id: 'pricing',
    title: '5. Pricing and Proposals',
    paragraphs: [
      'Any prices, ranges, financing examples, or cost descriptions displayed on the website are general informational examples unless expressly identified as part of a written project proposal.',
      'Actual project pricing depends on the property condition, measurements, accessibility, selected materials, required permits, labor, disposal, structural conditions, and other project-specific factors.',
    ],
    note: 'Only a written proposal or contract signed by the relevant parties should be treated as the controlling project document.',
  },
  {
    id: 'scheduling',
    title: '6. Scheduling and Weather',
    paragraphs: [
      'Inspection dates, project start dates, and completion timelines may be affected by weather, material availability, permit processing, property access, hidden conditions, supplier delays, and other circumstances.',
      'Any timeframe discussed before a signed agreement is an estimate and may change as additional project information becomes available.',
    ],
  },
  {
    id: 'warranties',
    title: '7. Warranties',
    paragraphs: [
      'Website references to warranties are general descriptions only. Warranty coverage may vary by manufacturer, product, installation method, project type, and written contract.',
      'The applicable written proposal, contract, manufacturer documentation, and workmanship warranty terms control the warranty available for a specific project.',
    ],
  },
  {
    id: 'insurance',
    title: '8. Insurance-Related Information',
    paragraphs: [
      'Northline Roofing & Exteriors may assist with documenting visible property damage and preparing project information. However, the company does not determine insurance coverage, claim approval, policy interpretation, or payment amounts.',
      'Insurance decisions are made by the property owner and the insurance carrier. Homeowners remain responsible for reviewing their policy, deductible, claim documents, and coverage decisions.',
    ],
  },
  {
    id: 'user-responsibilities',
    title: '9. User Responsibilities',
    paragraphs: [
      'You agree to provide accurate information when submitting a form or communicating through the website.',
    ],
    items: [
      'Do not impersonate another person or submit information without authorization.',
      'Do not attempt to disrupt, damage, or gain unauthorized access to the website.',
      'Do not submit malicious code, automated spam, or fraudulent service requests.',
      'Do not use website content for unlawful or misleading purposes.',
      'Do not submit highly sensitive financial, identification, or account information through general forms.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '10. Intellectual Property',
    paragraphs: [
      'Unless otherwise indicated, the website design, branding, text, graphics, logos, photographs, layouts, and other original content are owned by or licensed to Northline Roofing & Exteriors.',
      'You may view and print reasonable portions of the website for personal, noncommercial use. You may not reproduce, distribute, modify, sell, republish, or commercially exploit website content without permission.',
    ],
  },
  {
    id: 'project-images',
    title: '11. Project Images and Examples',
    paragraphs: [
      'Project photographs and examples are provided to illustrate types of work and general capabilities. Results vary based on property condition, design, materials, budget, and project scope.',
      'An image or project example does not guarantee that the same result, material, configuration, schedule, or price is available for another property.',
    ],
  },
  {
    id: 'third-party-links',
    title: '12. Third-Party Websites',
    paragraphs: [
      'The website may contain links to third-party websites, including manufacturers, review platforms, financing providers, maps, or social media services.',
      'Northline Roofing & Exteriors does not control third-party websites and is not responsible for their content, availability, security, products, services, or privacy practices.',
    ],
  },
  {
    id: 'disclaimer',
    title: '13. Website Disclaimer',
    paragraphs: [
      'The website is provided on an as-available basis for general informational purposes. We do not guarantee that the website will always be available, error-free, secure, or suitable for every purpose.',
      'Nothing on the website should be interpreted as a guarantee regarding property condition, project outcome, claim result, schedule, cost, or product performance.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '14. Limitation of Liability',
    paragraphs: [
      'To the extent permitted by applicable law, Northline Roofing & Exteriors will not be responsible for indirect, incidental, special, consequential, or similar losses arising solely from the use of, inability to use, or reliance on general website content.',
      'This limitation does not replace or modify responsibilities expressly stated in a signed project agreement.',
    ],
  },
  {
    id: 'indemnification',
    title: '15. Indemnification',
    paragraphs: [
      "You agree to be responsible for claims, losses, or expenses resulting from your unlawful misuse of the website, violation of these terms, or unauthorized submission of another person's information.",
    ],
  },
  {
    id: 'privacy',
    title: '16. Privacy',
    paragraphs: [
      'Information submitted through the website is handled in accordance with the Privacy Policy.',
      'Review the Privacy Policy to understand what information may be collected and how it may be used.',
    ],
  },
  {
    id: 'changes',
    title: '17. Changes to These Terms',
    paragraphs: [
      'These terms may be updated when website functionality, services, business practices, or operational requirements change.',
      'The revised terms will be posted on this page with an updated effective date. Continued use of the website after an update constitutes acceptance of the revised terms.',
    ],
  },
  {
    id: 'termination',
    title: '18. Suspension or Termination of Access',
    paragraphs: [
      'We may restrict or terminate access to the website when reasonably necessary to protect website security, prevent misuse, comply with legal obligations, or address violations of these terms.',
    ],
  },
  {
    id: 'governing-terms',
    title: '19. Controlling Project Documents',
    paragraphs: [
      'These website terms govern use of the website only. They do not replace the terms of a written estimate, proposal, construction contract, warranty, financing agreement, or other project document.',
      'When a website statement conflicts with a signed project agreement, the signed project agreement controls for that project.',
    ],
  },
  {
    id: 'contact',
    title: '20. Contact Information',
    paragraphs: [
      'Questions about these Terms of Service may be directed to Northline Roofing & Exteriors.',
    ],
    items: [
      'Email: info@northlineroofing.com',
      'Phone: (215) 555-0198',
      'Mailing address: 1234 Northline Drive, Philadelphia, PA 19154',
    ],
  },
];

function TermsPage() {
  return (
    <>
      <TermsHero
        title='Terms of Service'
        description='These terms explain the conditions governing your use of the Northline Roofing & Exteriors website and its online forms.'
        updatedDate='July 18, 2026'
      />

      <TermsDocument sections={termsSections} />

      <TermsContact />
    </>
  );
}

export default TermsPage;
