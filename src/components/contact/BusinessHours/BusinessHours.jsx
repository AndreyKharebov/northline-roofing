import './BusinessHours.css';

const businessHours = [
  {
    day: 'Monday – Friday',
    hours: '8:00 AM – 6:00 PM',
  },
  {
    day: 'Saturday',
    hours: '9:00 AM – 2:00 PM',
  },
  {
    day: 'Sunday',
    hours: 'Closed',
  },
];

function BusinessHours() {
  return (
    <section className='business-hours section'>
      <div className='container business-hours__inner'>
        <div className='business-hours__content'>
          <p className='business-hours__eyebrow'>Business Hours</p>

          <h2 className='business-hours__title'>When You Can Reach Us</h2>

          <p className='business-hours__description'>
            Contact us during normal business hours to discuss your project or
            schedule an estimate.
          </p>
        </div>

        <div className='business-hours__schedule'>
          {businessHours.map((item) => (
            <div className='business-hours__row' key={item.day}>
              <strong>{item.day}</strong>
              <span>{item.hours}</span>
            </div>
          ))}

          <div className='business-hours__emergency'>
            <strong>Storm damage?</strong>

            <p>
              Call <a href='tel:+12155550198'>(215) 555-0198</a> and leave a
              detailed message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessHours;
