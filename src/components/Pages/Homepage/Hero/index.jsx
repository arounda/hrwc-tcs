'use client';
import h1 from '@/assets/Homepage/Hero/h1.svg';
import h2 from '@/assets/Homepage/Hero/h2.svg';
import h3 from '@/assets/Homepage/Hero/h3.svg';
import h4 from '@/assets/Homepage/Hero/h4.svg';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './hero.module.scss';
import Image from 'next/image';

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

          <div className={s.heroCards}>
            <Image
              src={h1}
              alt=''
              priority
              className={s.heroCard}
            />

            <Image
              src={h2}
              alt=''
              priority
              className={s.heroCard}
            />

            <Image
              src={h3}
              alt=''
              priority
              className={s.heroCard}
            />

            <Image
              src={h4}
              alt=''
              priority
              className={s.heroCard}
            />
          </div>
        </div>
      </div>

      <div className={s.heroBg} />
    </section>
  )
};

export default Hero;
