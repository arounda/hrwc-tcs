import s from './cards.module.scss';

const WOTCListItems = [
  {
    id: 'w1',
    title: 'Eligibility Screening',
    text: 'Identify qualified candidates for tax credits up to $9,600 per hire.',
  },
  {
    id: 'w2',
    title: 'Seamless Integration',
    text: 'Our system integrates with your payroll and HR software.',
  },
  {
    id: 'w3',
    title: 'Timely Filings',
    text: 'We handle IRS Form 8850 and ETA Form 9061 submissions so you don’t have to.',
  },
  {
    id: 'w4',
    title: 'Receive Credit Determinations',
    text: 'Calculate Credit Amounts based on Hour & Wage Data',
  },
  {
    id: 'w5',
    title: 'Claim Credits',
    text: 'Quick, seamless credit processing for your business.',
  },
];

const EZListItems = [
  {
    id: 'ez1',
    title: 'Targeted Screening',
    text: 'Identify opportunities based on your location and workforce',
  },
  {
    id: 'ez2',
    title: 'Customized Solutions',
    text: 'Tailored strategies to claim all eligible credits efficiently',
  },
];

const SCListItems = [
  {
    id: 'sc1',
    title: 'Customized Solutions',
    text: 'Tailored strategies to claim all eligible credits efficiently',
  },
];

const Cards = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.cardsWrapper}>
          <div className={s.cardsCard}>
            <div className={s.cardTop}>
              <p className='text'>
                Turn Hiring into Savings
              </p>

              <p className='text'>
                Up to
                <span>$9,600</span>
              </p>
            </div>

            <div className={s.cardMain}>
              <h2 className='heading-h3'>
                Work Opportunity Tax Credit (WOTC)
              </h2>

              <ul className={s.cardList}>
                {WOTCListItems.map(item => (
                  <li
                    className={s.cardListItem}
                    key={item.id}
                  >
                    <p className='text'>
                      <span />
                      {item.title}
                    </p>

                    <p className='text'>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={s.cardsCard}>
            <div className={s.cardTop}>
              <p className='text'>
                Turn Hiring into Savings
              </p>

              <p className='text'>
                Up to
                <span>$3,000</span>
              </p>
            </div>

            <div className={s.cardMain}>
              <h2 className='heading-h3'>
                Federal Empowerment Zones (EZ)
              </h2>

              <ul className={s.cardList}>
                {EZListItems.map(item => (
                  <li
                    className={s.cardListItem}
                    key={item.id}
                  >
                    <p className='text'>
                      <span />
                      {item.title}
                    </p>

                    <p className='text'>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={s.cardsCard}>
            <div className={s.cardTop}>
              <p className='text'>
                Access Localized Benefits
              </p>

              <p className='text'>
                Up to
                <span>$3,000</span>
              </p>
            </div>

            <div className={s.cardMain}>
              <h2 className='heading-h3'>
                State Credits
              </h2>

              <ul className={s.cardList}>
                {SCListItems.map(item => (
                  <li
                    className={s.cardListItem}
                    key={item.id}
                  >
                    <p className='text'>
                      <span />
                      {item.title}
                    </p>

                    <p className='text'>
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards;
