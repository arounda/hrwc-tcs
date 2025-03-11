import s from './hiw.module.scss';

const Hiw = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.hiwWrapper}>
          <div className={s.hiwTop}>
            <h2 className='heading-h2 mb-8'>
              How it Works
            </h2>

            <p className='text'>
              We assess your business and workforce for eligibility, assist with documentation filing with state and federal agencies, and help you claim credits to maximize savings and reinvest in your business.
            </p>
          </div>

          <div className={s.hiwCards}>
            <div className={s.hiwCard}>
              <h3 className="heading-h5 mb-8">
                Assess Opportunities
              </h3>

              <p className="text">
                We analyze your business to uncover eligible credits, including federal programs like WOTC and EZ.
              </p>
            </div>

            <div className={s.cardsSeparator}></div>

            <div className={s.hiwCard}>
              <h3 className="heading-h5 mb-8">
                Simplify Filing
              </h3>

              <p className="text">
                Our team manages the paperwork and ensures compliance.
              </p>
            </div>

            <div className={s.cardsSeparator}></div>

            <div className={s.hiwCard}>
              <h3 className="heading-h5 mb-8">
                Maximize Savings
              </h3>

              <p className="text">
                Claim your credits and reinvest in your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hiw;
