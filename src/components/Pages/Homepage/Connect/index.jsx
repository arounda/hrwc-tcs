'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary';
import s from './connect.module.scss';

const Connect = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.connectWrapper}>
          <div className={s.connectMain}>
            <h2
              className={`heading-h2 is-centered is-white`}
              id={s.connectHeading}
            >
              Connect with Our APIs
            </h2>

            <p className={`text is-centered is-white ${s.connectSubtitle}`}>
              Designed for growth, our APIs easily scale with your needs.
            </p>

            <ButtonPrimary
              text='Learn More'
              link='/integrations'
              hasIcon={true}
            />
          </div>

          <div className={s.connectBg}></div>
        </div>
      </div>
    </section>
  )
};

export default Connect;
