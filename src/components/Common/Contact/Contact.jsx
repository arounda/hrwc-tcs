'use client';

import ButtonPrimary from '@/components/Common/ButtonPrimary/ButtonPrimary';
import s from './contact.module.scss';

const Contact = () => {
  return (
    <section className={`section no-paddings ${s.contact}`}>
      <div className="container">
        <div className={s.contactWrapper}>
          <div className={s.contactMain}>
            <h2
              className={`heading-h2 is-centered is-white`}
              id={s.contactHeading}
            >
              Contact Our Team
            </h2>

            <p className={`text is-centered is-white ${s.contactSubtitle}`}>
              Complete our contact form and our team will get back to you as quickly as we can.
            </p>

            <ButtonPrimary
              text='Contact Us'
              link='/contact-us'
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contact;
