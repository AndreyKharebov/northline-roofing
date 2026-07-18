import './RatingsSummary.css';

const ratings = [
  {
    id: 'average',
    icon: '★',
    value: '4.9',
    label: 'Average Rating',
    detail: 'Based on 210+ reviews',
    stars: true,
  },
  {
    id: 'google',
    icon: 'G',
    value: '4.9',
    label: 'Google Rating',
    detail: 'Based on 160+ reviews',
    stars: true,
  },
  {
    id: 'facebook',
    icon: 'f',
    value: '4.9',
    label: 'Facebook Rating',
    detail: 'Based on 50+ reviews',
    stars: true,
  },
  {
    id: 'recommend',
    icon: '✓',
    value: '100%',
    label: 'Recommend Us',
    detail: 'From satisfied homeowners',
    stars: false,
  },
];

function RatingsSummary() {
  return (
    <section
      className='ratings-summary section'
      aria-label='Customer rating summary'
    >
      <div className='container ratings-summary__grid'>
        {ratings.map((item) => (
          <article className='ratings-summary__item' key={item.id}>
            <div className='ratings-summary__heading'>
              <span
                className={`ratings-summary__icon ratings-summary__icon--${item.id}`}
                aria-hidden='true'
              >
                {item.icon}
              </span>

              <div>
                <strong className='ratings-summary__value'>{item.value}</strong>

                <span className='ratings-summary__label'>{item.label}</span>
              </div>
            </div>

            {item.stars && (
              <div
                className='ratings-summary__stars'
                aria-label='5 out of 5 stars'
              >
                <span aria-hidden='true'>★★★★★</span>
              </div>
            )}

            <p className='ratings-summary__detail'>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RatingsSummary;
