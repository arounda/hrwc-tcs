'use client';

import heroImg from '@/assets/Homepage/hero-img.png';
import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import Image from 'next/image';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <div className={s.heroWrapper}>
          <div className={s.heroMain}>
            <div className={s.heroInfo}>
              <h1 className='heading-h1'>
                Built for Growth. Driven by Simplicity.
              </h1>

              <p className={s.heroText}>
                Simplify hiring compliance and workforce management with solutions that grow with your business.
              </p>

              <ButtonPrimary
                text='Get Started'
                link='/contact-us'
              />
            </div>

            <div className={s.heroImageWrapper}>
              <Image
                src={heroImg}
                className={s.heroImage}
                priority
                alt=''
              />
            </div>
          </div>

          <div className={s.heroStats}>
            <div className={s.heroStatsLine}></div>

            <div className={s.heroStat}>
              <p className={s.heroStatNum}>21k+</p>
              <p className={s.heroStatText}>Happy clients</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.heroStatNum}>60M</p>
              <p className={s.heroStatText}>Paystubs distributed</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.heroStatNum}>406M</p>
              <p className={s.heroStatText}>Forms processed</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.heroStatNum}>7.5M+</p>
              <p className={s.heroStatText}>Employees onboarded</p>
            </div>

            <div className={s.heroStat}>
              <p className={s.heroStatNum}>6M+</p>
              <p className={s.heroStatText}>E-Verify® cases</p>
            </div>
          </div>
        </div>
      </div>

      <div className={s.heroBg} />
    </section>
  )
};

export default Hero;
