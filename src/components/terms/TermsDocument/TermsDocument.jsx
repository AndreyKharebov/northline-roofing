import './TermsDocument.css';

function TermsDocument({ sections }) {
  return (
    <section className='terms-document section'>
      <div className='container terms-document__layout'>
        <aside className='terms-document__sidebar'>
          <p className='terms-document__sidebar-title'>On This Page</p>

          <nav aria-label='Terms of service sections'>
            <ul className='terms-document__navigation'>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className='terms-document__content'>
          {sections.map((section) => (
            <section
              className='terms-document__section'
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
                <div className='terms-document__note'>
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

export default TermsDocument;
