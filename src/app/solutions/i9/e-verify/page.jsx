import s from '../../solutions.module.scss';
import tile1 from '@/assets/Solutions/ever1.png';
import tile2 from '@/assets/Solutions/ever2.png';
import banner from '@/assets/Solutions/everBanner.png';
import Contact from '@/components/Common/Contact/Contact';
import Image from 'next/image';
import CheckMark from '../../CheckMark';

const EVerify = () => {
  return (
    <>
      <section className={`section is-gradient-v2 ${s.solutionsHero}`}>
        <div className="container">
          <div className={s.solutionsHeroTop}>
            <div className={s.solutionsHeroInfo}>
              <h1 className={s.solutionsHeroHeading}>
                Trusted I-9 and E-Verify<span>®</span> Services
              </h1>

              <p className={s.solutionsHeroSubheading}>
                E-Verify® is a registered trademark of U.S. Department of Homeland Security.
              </p>
            </div>

            <div className={s.solutionsHeroTiles}>
              <div className={s.solutionsHeroTileWrapper}>
                <Image
                  className={s.solutionsHeroTileImage}
                  src={tile1}
                  alt=''
                  priority
                />
              </div>

              <div className={s.solutionsHeroTileWrapper}>
                <Image
                  className={s.solutionsHeroTileImage}
                  src={tile2}
                  alt=''
                  priority
                />
              </div>
            </div>
          </div>

          <div className='heroCards'>
            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.27832H2M14 17.7783L16.5 15.2783L14 12.7783M10 12.7783L7.5 15.2783L10 17.7783M2 8.07832L2 16.4783C2 18.1585 2 18.9986 2.32698 19.6403C2.6146 20.2048 3.07354 20.6637 3.63803 20.9513C4.27976 21.2783 5.11984 21.2783 6.8 21.2783H17.2C18.8802 21.2783 19.7202 21.2783 20.362 20.9513C20.9265 20.6637 21.3854 20.2048 21.673 19.6403C22 18.9986 22 18.1585 22 16.4783V8.07832C22 6.39816 22 5.55809 21.673 4.91635C21.3854 4.35186 20.9265 3.89292 20.362 3.6053C19.7202 3.27832 18.8802 3.27832 17.2 3.27832L6.8 3.27832C5.11984 3.27832 4.27976 3.27832 3.63803 3.6053C3.07354 3.89292 2.6146 4.35186 2.32698 4.91635C2 5.55808 2 6.39816 2 8.07832Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Seamless I-9/E-Verify® Integration
              </h3>

              <p className='text is-white'>
                Combine I-9 with automated E-Verify processing for a streamlined and fully compliant verification process.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11.2783L12 14.2783L22 4.27832M16 3.27832H7.8C6.11984 3.27832 5.27976 3.27832 4.63803 3.6053C4.07354 3.89292 3.6146 4.35186 3.32698 4.91635C3 5.55808 3 6.39816 3 8.07832V16.4783C3 18.1585 3 18.9986 3.32698 19.6403C3.6146 20.2048 4.07354 20.6637 4.63803 20.9513C5.27976 21.2783 6.11984 21.2783 7.8 21.2783H16.2C17.8802 21.2783 18.7202 21.2783 19.362 20.9513C19.9265 20.6637 20.3854 20.2048 20.673 19.6403C21 18.9986 21 18.1585 21 16.4783V12.2783" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Comprehensive Remote Verification
              </h3>

              <p className='text is-white'>
                Enable authorized representatives to securely complete Section 2 and 3 verifications for remote hires, ensuring compliance anywhere.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 4.27832H7.8C6.11984 4.27832 5.27976 4.27832 4.63803 4.6053C4.07354 4.89292 3.6146 5.35186 3.32698 5.91635C3 6.55808 3 7.39816 3 9.07832V16.4783C3 18.1585 3 18.9986 3.32698 19.6403C3.6146 20.2048 4.07354 20.6637 4.63803 20.9513C5.27976 21.2783 6.11984 21.2783 7.8 21.2783H15.2C16.8802 21.2783 17.7202 21.2783 18.362 20.9513C18.9265 20.6637 19.3854 20.2048 19.673 19.6403C20 18.9986 20 18.1585 20 16.4783V13.2783M13 17.2783H7M15 13.2783H7M20.1213 4.157C21.2929 5.32857 21.2929 7.22807 20.1213 8.39964C18.9497 9.57121 17.0503 9.57121 15.8787 8.39964C14.7071 7.22807 14.7071 5.32857 15.8787 4.157C17.0503 2.98543 18.9497 2.98543 20.1213 4.157Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Compliance Tracking
              </h3>

              <p className='text is-white'>
                Stay on top of employment eligibility with real-time updates, custom notifications, and audit-ready records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">Your Complete Compliance Solution</h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  I-9 Compliance
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Manage your I-9 process and stay compliant with an intuitive solution that streamlines document collection, verification, secure storage, and retrieval, while providing real-time tracking, automated alerts, and audit support
                  </p>
                  <p className='text'>
                    <span className='is-bold'>Remote Verifier Support:</span> Enable compliant Form I-9 completion for remote hires with Remote Verifier to designate authorized representatives, securely validate documents, and streamline Section 2 & 3 verification from anywhere.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Digital Completion of Form I-9s</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Remote I-9 Verification Section 2 & 3</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Real-Time Error Detection</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Centralized Dashboard</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Configurable Re-verification and Expiring Document Alerts</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Compliance Reporting</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Document Repository</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Audit Support</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  E-Verify® Web Service
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    As a trusted E-Verify® Employer Agent, we offer seamless integration of E-Verify® Web Services within our platform.
                  </p>
                  <p className='text'>
                    Our system guides you step-by-step through the E-Verify process, automatically storing all case information directly within the employee’s record for easy access.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Verify Work Eligibility with DHS and SSA</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Case Action Notifications</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Instant Case Results</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Real Time Reporting</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>MOU Auto Enrollment</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Experienced Customer Support</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  I-9 / E-Verify® Solution
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Using our fully integrated I-9 / E-Verify® Solution makes the work eligibility compliance process seamless. After completing the I-9, automatically submit E-Verify for real-time results and securely store all case data within the employee record for easy access and audit readiness.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Record E-Verify® Case Numbers and status with the corresponding I-9s</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Ability to correct I-9 for an existing E-Verify® case to sync data</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Automated notifications for Pending Referral process using e-signatures</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>I-9 validation mirrors the values accepted by E-Verify® Web Services</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Employee verification data is automatically submitted to E-Verify®</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <CheckMark />

                  <p>Automated Case Tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.solutionsBanner}>
        <div className="container">
          <div className={s.solutionsBannerWrapper}>
            <div className={s.solutionsBannerImageWrapper}>
              <Image
                className={s.solutionsBannerImage}
                src={banner}
                alt=''
              />
            </div>
            <div className={s.solutionsBannerMainWrapper}>
              <h2 className={s.solutionsBannerHeading}>
                <span className={s.isBlue}>98%</span> of E-Verify cases are confirmed as <span className={s.isBlue}>&quot;Employment Authorized&quot;</span> either instantly or within 24 hours.
              </h2>
              <p className={s.solutionsBannerText}>
                <span>Source: www.e-verify.gov/about-e-verify/e-verify-data/e-verify-performance</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
};

export default EVerify;
