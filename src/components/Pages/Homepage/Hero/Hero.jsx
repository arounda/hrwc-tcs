'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroWrapper}>
          <div className={s.heroMain}>
            <h1 className='heading-h1 is-centered'>
              Discover Hidden Tax Savings for Your Business
            </h1>

            <p className={s.heroText}>
              Leverage federal and state tax credit programs to reduce costs and grow smarter.
            </p>

            <ButtonPrimary
              text='Start Saving'
              link='/contact-us'
            />
          </div>
        </div>
      </div>

      <div className={s.heroBg} />
    </section>
  )
};

export default Hero;
