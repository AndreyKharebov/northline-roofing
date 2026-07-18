import './PrivacyDocument.css';

function PrivacyDocument({ sections }) {
  return (
    <section className='privacy-document section'>
      <div className='container privacy-document__layout'>
        <aside className='privacy-document__sidebar'>
          <p className='privacy-document__sidebar-title'>On This Page</p>

          <nav aria-label='Privacy policy sections'>
            <ul className='privacy-document__navigation'>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className='privacy-document__content'>
          {sections.map((section) => (
            <section
              className='privacy-document__section'
              id={section.id}
              key={section.id}
            >
              <h2>{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.note && (
                <div className='privacy-document__note'>
                  <p>{section.note}</p>
                </div>
              )}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}

export default PrivacyDocument;
