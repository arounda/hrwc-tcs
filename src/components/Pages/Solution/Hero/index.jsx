import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className='section is-hero'>
      <div className="container">
        <h2 className='heading-h2 mb-8'>
          Tax Credit Solutions
        </h2>

        <p className='text mb-32'>
          Unlock Your Business’s Potential with Expert Guidance
        </p>

        <div className={s.heroCards}>
          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 18L18 20L22 16M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h3 className='heading-h5 mb-8 is-white'>
              Work Opportunity Tax Credit (WOTC)
            </h3>

            <p className='text is-white'>
              A federal tax credit offering up to $2,400–$9,600 per eligible employee, incentivizing businesses to hire individuals from targeted groups who face barriers to employment.
            </p>
          </div>

          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className='heading-h5 mb-8 is-white'>
              Federal Empowerment Zones (EZ)
            </h3>

            <p className='text is-white'>
              Businesses in designated economically distressed areas can claim tax credits of up to $3,000 annually per eligible employee to encourage job creation and economic growth.
            </p>
          </div>

          <div className={s.heroCard}>
            <div className={s.heroCardIconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className='heading-h5 mb-8 is-white'>
              Location-Based Incentives
            </h3>

            <p className='text is-white'>
              Tax benefits for businesses that invest or create jobs in specific areas, including Opportunity Zones and state-specific incentive programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
