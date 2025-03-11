import s from './features.module.scss';

const Features = () => {
  return (
    <section className="section is-padding-block">
      <div className="container">
        <h2 className='heading-h2 mb-8 is-centered'>
          Features
        </h2>

        <div className={s.featuresCards}>
          <div className={s.featuresCard}>
            <h3 className="heading-h5 mb-8">
              Comprehensive Program Management
            </h3>

            <p className="text">
              Handle everything from eligibility screening and documentation to certification submissions and tracking.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.featuresCard}>
            <h3 className="heading-h5 mb-8">
              Real-Time Reporting
            </h3>

            <p className="text">
              Gain instant visibility into credit opportunities, submission statuses, and ROI metrics through intuitive dashboards.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.featuresCard}>
            <h3 className="heading-h5 mb-8">
              Advanced Technology Integration
            </h3>

            <p className="text">
              Automate credit calculations and compliance checks. Seamlessly integrate with your existing systems.
            </p>
          </div>

          <div className={s.cardsSeparatorMob}></div>

          <div className={s.featuresCard}>
            <h3 className="heading-h5 mb-8">
              Regulatory Expertise
            </h3>

            <p className="text">
              Stay compliant with ever-changing tax credit regulations at both the federal and state levels.
            </p>
          </div>

          <div className={s.cardsSeparator}></div>
          <div className={s.cardsSeparatorVertical}></div>
        </div>
      </div>
    </section>
  )
};

export default Features;
