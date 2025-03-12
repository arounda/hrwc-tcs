import React from 'react';
import s from './target.module.scss';

const tableItems = [
  {
    id: 't1',
    title: 'Veterans',
    price: '$9,600',
  },
  {
    id: 't2',
    title: 'Ex-Felons',
    price: '$2,400',
  },
  {
    id: 't3',
    title: 'Vocational Rehabilitation Referral',
    price: '$2,400',
  },
  {
    id: 't4',
    title: 'Designated Community Residents (DCR)',
    price: '$2,400',
  },
  {
    id: 't5',
    title: 'Short-Term (TANF) Recipients',
    price: '$2,400',
  },
  {
    id: 't6',
    title: 'Food Stamp (SNAP) Recipients',
    price: '$2,400',
  },
  {
    id: 't7',
    title: 'Long-Term Unemployed',
    price: '$2,400',
  },
  {
    id: 't8',
    title: 'Summer Youth Employee',
    price: '$1,200',
  },
  {
    id: 't9',
    title: 'Supplemental Security Income (SSI) Recipient',
    price: '$2,400',
  },
  {
    id: 't10',
    title: 'Long-Term (TANF) Recipients',
    price: '$9,000',
  },
];

const TargetGroup = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <div className={s.targetWrapper}>
          <div className={s.targetTop}>
            <h2 className="heading-h3 is-centered mb-8">
              WOTC Eligible Target Groups
            </h2>
            <p className="text is-centered">
              You can earn tax credits ranging from <span className="is-bold">$1,200 to $9,600 </span>per qualified individual.
            </p>
          </div>

          <div className={s.targetTable}>
            {tableItems.map(item => (
              <React.Fragment key={item.id}>
                <div className={s.targetTableItem}>
                  <p className="text">
                    {item.title}
                  </p>

                  <span>
                    {item.price}
                  </span>
                </div>

                <div className={s.tableItemsDivider}></div>
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default TargetGroup;
