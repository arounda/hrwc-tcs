import Image from 'next/image';
import s from './hiw.module.scss';
import platformScreen from '@/assets/Homepage/hiw.png';

const Hiw = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.hiwWrapper}>
          <div className={s.hiwMain}>
            <div className={s.hiwTop}>
              <h2 className="heading-h2 is-centered mb-8">How It Works</h2>

              <p className="text is-centered">
                See how our user-friendly interface and powerful features simplify HR management and enhance your workflow.
              </p>
            </div>

            <div className={s.hiwCards}>
              <div className={s.hiwCard}>
                <h3 className='heading-h5'>
                  Consultation
                </h3>

                <p className="text">
                  We analyze your workforce to identify potential credits.
                </p>
              </div>

              <div className={s.hiwCard}>
                <h3 className='heading-h5'>
                  Pre-Screening
                </h3>

                <p className="text">
                  Our technology ensures all eligible employees are captured.
                </p>
              </div>

              <div className={s.hiwCard}>
                <h3 className='heading-h5'>
                  Filing & Compliance
                </h3>

                <p className="text">
                  Forms are submitted on time, and we manage follow-ups.
                </p>
              </div>

              <div className={s.hiwCard}>
                <h3 className='heading-h5'>
                  Credit Reporting
                </h3>

                <p className="text">
                  Receive regular updates and insights on your savings.
                </p>
              </div>
            </div>
          </div>

          <Image
            src={platformScreen}
            alt=''
          />
        </div>
      </div>
    </section>
  )
}

export default Hiw;
