import s from '../solutions.module.scss';
import tile1 from '@/assets/Solutions/tcs1.png';
import tile2 from '@/assets/Solutions/tcs2.png';
import banner from '@/assets/Solutions/tcsbanner.png';
import Contact from '@/components/Common/Contact/Contact';
import Image from 'next/image';

const TaxCreditServices = () => {
  return (
    <>
      <section className={`section is-gradient-v2 ${s.solutionsHero}`}>
        <div className="container">
          <div className={s.solutionsHeroTop}>
            <div className={s.solutionsHeroInfo}>
              <h1 className={s.solutionsHeroHeading}>
                WOTC Screening Simplified
              </h1>

              <p className={s.solutionsHeroSubheading}>
                Streamline Your WOTC Process, Maximize Your Tax Savings
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
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 4.7749H18.8C19.9201 4.7749 20.4802 4.7749 20.908 4.99289C21.2843 5.18464 21.5903 5.4906 21.782 5.86692C22 6.29474 22 6.8548 22 7.9749V9.2749C22 10.2068 22 10.6727 21.8478 11.0403C21.6448 11.5303 21.2554 11.9197 20.7654 12.1227C20.3978 12.2749 19.9319 12.2749 19 12.2749M13.5 19.7749H6.2C5.0799 19.7749 4.51984 19.7749 4.09202 19.5569C3.71569 19.3652 3.40973 19.0592 3.21799 18.6829C3 18.2551 3 17.695 3 16.5749V15.2749C3 14.343 3 13.8771 3.15224 13.5095C3.35523 13.0195 3.74458 12.6301 4.23463 12.4271C4.60218 12.2749 5.06812 12.2749 6 12.2749M10.8 14.7749H14.2C14.48 14.7749 14.62 14.7749 14.727 14.7204C14.8211 14.6725 14.8976 14.596 14.9455 14.5019C15 14.3949 15 14.2549 15 13.9749V10.5749C15 10.2949 15 10.1549 14.9455 10.0479C14.8976 9.95383 14.8211 9.87734 14.727 9.8294C14.62 9.7749 14.48 9.7749 14.2 9.7749H10.8C10.52 9.7749 10.38 9.7749 10.273 9.8294C10.1789 9.87734 10.1024 9.95383 10.0545 10.0479C10 10.1549 10 10.2949 10 10.5749V13.9749C10 14.2549 10 14.3949 10.0545 14.5019C10.1024 14.596 10.1789 14.6725 10.273 14.7204C10.38 14.7749 10.52 14.7749 10.8 14.7749ZM18.3 22.2749H21.7C21.98 22.2749 22.12 22.2749 22.227 22.2204C22.3211 22.1725 22.3976 22.096 22.4455 22.0019C22.5 21.8949 22.5 21.7549 22.5 21.4749V18.0749C22.5 17.7949 22.5 17.6549 22.4455 17.5479C22.3976 17.4538 22.3211 17.3773 22.227 17.3294C22.12 17.2749 21.98 17.2749 21.7 17.2749H18.3C18.02 17.2749 17.88 17.2749 17.773 17.3294C17.6789 17.3773 17.6024 17.4538 17.5545 17.5479C17.5 17.6549 17.5 17.7949 17.5 18.0749V21.4749C17.5 21.7549 17.5 21.8949 17.5545 22.0019C17.6024 22.096 17.6789 22.1725 17.773 22.2204C17.88 22.2749 18.02 22.2749 18.3 22.2749ZM3.3 7.2749H6.7C6.98003 7.2749 7.12004 7.2749 7.227 7.22041C7.32108 7.17247 7.39757 7.09598 7.4455 7.0019C7.5 6.89494 7.5 6.75493 7.5 6.4749V3.0749C7.5 2.79488 7.5 2.65486 7.4455 2.54791C7.39757 2.45383 7.32108 2.37734 7.227 2.3294C7.12004 2.2749 6.98003 2.2749 6.7 2.2749H3.3C3.01997 2.2749 2.87996 2.2749 2.773 2.3294C2.67892 2.37734 2.60243 2.45383 2.5545 2.54791C2.5 2.65486 2.5 2.79488 2.5 3.0749V6.4749C2.5 6.75493 2.5 6.89494 2.5545 7.0019C2.60243 7.09598 2.67892 7.17247 2.773 7.22041C2.87996 7.2749 3.01997 7.2749 3.3 7.2749Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Streamlined WOTC Processing
              </h3>

              <p className='text is-white'>
                Simplify your workflow with our automated solution, handling everything from candidate screening to certification submissions and tracking.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.5 7.2749L14.6314 15.1435C14.2354 15.5395 14.0373 15.7376 13.809 15.8117C13.6082 15.877 13.3918 15.877 13.191 15.8117C12.9627 15.7376 12.7646 15.5395 12.3686 15.1435L9.63137 12.4063C9.23535 12.0103 9.03735 11.8122 8.80902 11.7381C8.60817 11.6728 8.39183 11.6728 8.19098 11.7381C7.96265 11.8122 7.76465 12.0103 7.36863 12.4063L2.5 17.2749M22.5 7.2749H15.5M22.5 7.2749V14.2749" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Maximized Tax Credit Savings
              </h3>

              <p className='text is-white'>
                Leverage our advanced technology and expertise to identify eligible employees, ensuring you capture every possible WOTC incentive.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 20.2749H8.5M18 17.2749H17M8.5 6.2749H5.7C4.5799 6.2749 4.01984 6.2749 3.59202 6.49289C3.21569 6.68464 2.90973 6.9906 2.71799 7.36692C2.5 7.79474 2.5 8.3548 2.5 9.4749V13.0749C2.5 14.195 2.5 14.7551 2.71799 15.1829C2.90973 15.5592 3.21569 15.8652 3.59202 16.0569C4.01984 16.2749 4.5799 16.2749 5.7 16.2749H8.5M15.7 20.2749H19.3C20.4201 20.2749 20.9802 20.2749 21.408 20.0569C21.7843 19.8652 22.0903 19.5592 22.282 19.1829C22.5 18.7551 22.5 18.195 22.5 17.0749V7.4749C22.5 6.3548 22.5 5.79474 22.282 5.36692C22.0903 4.9906 21.7843 4.68464 21.408 4.49289C20.9802 4.2749 20.4201 4.2749 19.3 4.2749H15.7C14.5799 4.2749 14.0198 4.2749 13.592 4.49289C13.2157 4.68464 12.9097 4.9906 12.718 5.36692C12.5 5.79474 12.5 6.3548 12.5 7.4749V17.0749C12.5 18.195 12.5 18.7551 12.718 19.1829C12.9097 19.5592 13.2157 19.8652 13.592 20.0569C14.0198 20.2749 14.5799 20.2749 15.7 20.2749Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Real-Time Reporting and Insights
              </h3>

              <p className='text is-white'>
                Access up-to-date dashboard and detailed analytics to track WOTC eligibility, certifications, and ROI. Make informed decisions with full visibility into your tax credit progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">
            Simplify WOTC and Amplify Results
          </h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  How it Works
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Navigating the complexities of WOTC doesn’t have to be overwhelming. Our solution combines cutting-edge technology and proven expertise to ensure you secure every eligible tax credit while staying compliant.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.withIcon}`}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.3327 28.2751V26.6751C21.3327 24.4349 21.3327 23.3147 20.8967 22.4591C20.5132 21.7065 19.9013 21.0945 19.1486 20.711C18.293 20.2751 17.1729 20.2751 14.9327 20.2751H9.06602C6.82581 20.2751 5.7057 20.2751 4.85005 20.711C4.09741 21.0945 3.48548 21.7065 3.10199 22.4591C2.66602 23.3147 2.66602 24.4349 2.66602 26.6751V28.2751M21.3327 8.27506L23.9993 10.9417L29.3327 5.6084M16.666 10.2751C16.666 12.8524 14.5767 14.9417 11.9993 14.9417C9.42202 14.9417 7.33268 12.8524 7.33268 10.2751C7.33268 7.69774 9.42202 5.6084 11.9993 5.6084C14.5767 5.6084 16.666 7.69774 16.666 10.2751Z" stroke="url(#paint0_linear_1660_16169)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1660_16169" x1="29.3327" y1="28.2751" x2="13.1021" y2="-0.315962" gradientUnits="userSpaceOnUse">
                          <stop offset="0.222951" stopColor="#3A40FF" />
                          <stop offset="0.376393" stopColor="#2D2EF2" />
                          <stop offset="1" stopColor="#2F0092" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p>Screen</p>
                  </div>

                  <p className='text is-s'>
                    Use smart tools to identify WOTC-eligible candidates.
                  </p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.withIcon}`}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.6673 3.30103V8.80841C18.6673 9.55515 18.6673 9.92852 18.8126 10.2137C18.9405 10.4646 19.1444 10.6686 19.3953 10.7964C19.6805 10.9417 20.0539 10.9417 20.8007 10.9417H26.308M12.0007 21.6083L14.6673 24.275L20.6673 18.275M18.6673 2.94165H11.734C9.49377 2.94165 8.37367 2.94165 7.51802 3.37762C6.76537 3.76112 6.15345 4.37304 5.76996 5.12569C5.33398 5.98134 5.33398 7.10144 5.33398 9.34165V23.2083C5.33398 25.4485 5.33398 26.5686 5.76996 27.4243C6.15345 28.1769 6.76537 28.7889 7.51802 29.1723C8.37367 29.6083 9.49377 29.6083 11.734 29.6083H20.2673C22.5075 29.6083 23.6276 29.6083 24.4833 29.1723C25.2359 28.7889 25.8478 28.1769 26.2313 27.4243C26.6673 26.5686 26.6673 25.4485 26.6673 23.2083V10.9417L18.6673 2.94165Z" stroke="url(#paint0_linear_1660_16148)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1660_16148" x1="26.6673" y1="29.6083" x2="4.78669" y2="3.39854" gradientUnits="userSpaceOnUse">
                          <stop offset="0.222951" stopColor="#3A40FF" />
                          <stop offset="0.376393" stopColor="#2D2EF2" />
                          <stop offset="1" stopColor="#2F0092" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p>Certify</p>
                  </div>

                  <p className='text is-s'>
                    Automate filing with state workforce agencies (SWAs).
                  </p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.withIcon}`}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3333 14.9417H16.6667M23.3333 20.275H16.6667M23.3333 9.60836H16.6667M12 4.27502L12 28.275M10.4 4.27502H21.6C23.8402 4.27502 24.9603 4.27502 25.816 4.711C26.5686 5.09449 27.1805 5.70641 27.564 6.45906C28 7.31471 28 8.43481 28 10.675V21.875C28 24.1152 28 25.2353 27.564 26.091C27.1805 26.8436 26.5686 27.4556 25.816 27.8391C24.9603 28.275 23.8402 28.275 21.6 28.275H10.4C8.15979 28.275 7.03969 28.275 6.18404 27.8391C5.43139 27.4556 4.81947 26.8436 4.43597 26.091C4 25.2353 4 24.1152 4 21.875V10.675C4 8.43481 4 7.31471 4.43597 6.45906C4.81947 5.70641 5.43139 5.09449 6.18404 4.711C7.03969 4.27502 8.15979 4.27502 10.4 4.27502Z" stroke="url(#paint0_linear_1591_5813)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1591_5813" x1="28" y1="28.275" x2="9.51253" y2="0.593421" gradientUnits="userSpaceOnUse">
                          <stop offset="0.222951" stopColor="#3A40FF" />
                          <stop offset="0.376393" stopColor="#2D2EF2" />
                          <stop offset="1" stopColor="#2F0092" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p>Track</p>
                  </div>

                  <p className='text is-s'>
                    Monitor approvals and appeals through your dashboard.
                  </p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.withIcon}`}>
                    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28 28.275H6.13333C5.3866 28.275 5.01323 28.275 4.72801 28.1297C4.47713 28.0019 4.27316 27.7979 4.14532 27.547C4 27.2618 4 26.8884 4 26.1417V4.27502M28 9.60836L20.7542 16.8541C20.4902 17.1181 20.3582 17.2501 20.206 17.2996C20.0721 17.3431 19.9279 17.3431 19.794 17.2996C19.6418 17.2501 19.5098 17.1181 19.2458 16.8541L16.7542 14.3626C16.4902 14.0986 16.3582 13.9666 16.206 13.9171C16.0721 13.8736 15.9279 13.8736 15.794 13.9171C15.6418 13.9666 15.5098 14.0986 15.2458 14.3626L9.33333 20.275M28 9.60836H22.6667M28 9.60836V14.9417" stroke="url(#paint0_linear_1660_16157)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1660_16157" x1="28" y1="28.275" x2="9.51253" y2="0.593421" gradientUnits="userSpaceOnUse">
                          <stop offset="0.222951" stopColor="#3A40FF" />
                          <stop offset="0.376393" stopColor="#2D2EF2" />
                          <stop offset="1" stopColor="#2F0092" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <p>Report</p>
                  </div>

                  <p className='text is-s'>
                    Access detailed, real-time credit reports and ROI metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  WOTC Eligible Target Groups
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    You can earn tax credits ranging from
                    <span className='is-bold'> $1,200 to $9,600 </span>
                    per qualified individual.
                  </p>
                </div>
              </div>

              <div className={`${s.solutionsInfoBlockGrid} ${s.tcsGrid}`}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Veterans</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$9,600</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Ex-Felons</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Vocational Rehabilitation Referral</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Designated Community Residents (DCR)</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Short-Term (TANF) Recipients</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Food Stamp (SNAP) Recipients</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Long-Term Unemployed</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Summer Youth Employee</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,200</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Supplemental Security Income (SSI) Recipient</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$2,400</span>
                    </div>
                  </div>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={`${s.solutionsInfoBlockGridItemTop} ${s.isTcs}`}>
                    <p>Long-Term (TANF) Recipients</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>$9,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  Features
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Take advantage of our experience in assisting organizations of all sizes and from every industry in transitioning from paper-based screening to electronic tax credit screening and management.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.99935 21.6083V9.875C3.99935 8.38153 3.99935 7.63479 4.29 7.06436C4.54566 6.5626 4.95361 6.15465 5.45537 5.89899C6.02581 5.60834 6.77254 5.60834 8.26602 5.60834H23.7327C25.2262 5.60834 25.9729 5.60834 26.5433 5.89899C27.0451 6.15465 27.453 6.5626 27.7087 7.06436C27.9993 7.63479 27.9993 8.38153 27.9993 9.875V21.6083H20.883C20.5569 21.6083 20.3938 21.6083 20.2404 21.6452C20.1043 21.6778 19.9743 21.7317 19.855 21.8048C19.7204 21.8873 19.6051 22.0026 19.3745 22.2332L19.2909 22.3168C19.0603 22.5474 18.945 22.6627 18.8104 22.7452C18.6911 22.8183 18.561 22.8722 18.425 22.9048C18.2715 22.9417 18.1085 22.9417 17.7824 22.9417H14.2163C13.8902 22.9417 13.7272 22.9417 13.5737 22.9048C13.4377 22.8722 13.3076 22.8183 13.1883 22.7452C13.0537 22.6627 12.9384 22.5474 12.7078 22.3168L12.6242 22.2332C12.3936 22.0026 12.2783 21.8873 12.1437 21.8048C12.0244 21.7317 11.8944 21.6778 11.7583 21.6452C11.6049 21.6083 11.4418 21.6083 11.1157 21.6083H3.99935ZM3.99935 21.6083C3.26297 21.6083 2.66602 22.2053 2.66602 22.9417V23.3861C2.66602 24.2128 2.66602 24.6261 2.75688 24.9652C3.00346 25.8854 3.72225 26.6042 4.6425 26.8508C4.98161 26.9417 5.39493 26.9417 6.22157 26.9417H25.7771C26.6038 26.9417 27.0171 26.9417 27.3562 26.8508C28.2764 26.6042 28.9952 25.8854 29.2418 24.9652C29.3327 24.6261 29.3327 24.2128 29.3327 23.3861C29.3327 22.9728 29.3327 22.7661 29.2873 22.5966C29.164 22.1365 28.8046 21.7771 28.3444 21.6538C28.1749 21.6083 27.9682 21.6083 27.5549 21.6083H26.666" stroke="url(#paint0_linear_1591_5902)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5902" x1="29.3327" y1="26.9417" x2="14.5438" y2="-0.737845" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>100% Screening Compliance</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.6673 12.9417V9.34171C26.6673 7.1015 26.6673 5.9814 26.2313 5.12575C25.8479 4.3731 25.2359 3.76118 24.4833 3.37769C23.6276 2.94171 22.5075 2.94171 20.2673 2.94171H11.734C9.49377 2.94171 8.37367 2.94171 7.51802 3.37769C6.76537 3.76118 6.15345 4.3731 5.76996 5.12575C5.33398 5.9814 5.33398 7.1015 5.33398 9.34171V23.2084C5.33398 25.4486 5.33398 26.5687 5.76996 27.4243C6.15345 28.177 6.76537 28.7889 7.51802 29.1724C8.37367 29.6084 9.49377 29.6084 11.734 29.6084H18.6673M18.6673 14.9417H10.6673M13.334 20.275H10.6673M21.334 9.60838H10.6673M22.0007 20.278C22.2356 19.6102 22.6993 19.0471 23.3096 18.6883C23.92 18.3296 24.6376 18.1985 25.3353 18.3182C26.0331 18.4379 26.666 18.8007 27.1219 19.3423C27.5778 19.8839 27.8274 20.5693 27.8263 21.2773C27.8263 23.2758 24.8285 24.275 24.8285 24.275M24.8672 28.275H24.8805" stroke="url(#paint0_linear_1591_5906)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5906" x1="27.8263" y1="29.6084" x2="6.18059" y2="2.27136" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>English & Spanish Questionnaire</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.9993 12.9417V18.275L19.3327 20.275M15.9993 6.94171C9.74012 6.94171 4.66602 12.0158 4.66602 18.275C4.66602 24.5343 9.74012 29.6084 15.9993 29.6084C22.2586 29.6084 27.3327 24.5343 27.3327 18.275C27.3327 12.0158 22.2586 6.94171 15.9993 6.94171ZM15.9993 6.94171V2.94171M13.3327 2.94171H18.666M27.1047 7.7311L25.1047 5.7311L26.1047 6.7311M4.89404 7.7311L6.89404 5.7311L5.89404 6.7311" stroke="url(#paint0_linear_1591_5912)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5912" x1="27.3327" y1="29.6084" x2="5.72586" y2="2.10897" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Hour & Wage Tracking</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3327 25.6084H23.0583C25.5452 25.6084 26.7887 25.6084 27.4947 25.0873C28.1103 24.633 28.5011 23.9362 28.5677 23.1741C28.6442 22.2999 27.9958 21.2389 26.699 19.1169L25.3697 16.9417M8.17287 14.4154L5.29972 19.1169C4.00291 21.2389 3.35451 22.2999 3.43098 23.1741C3.49765 23.9362 3.88843 24.633 4.50397 25.0873C5.21 25.6084 6.45346 25.6084 8.94039 25.6084H11.3327M22.5179 12.2751L19.64 7.56584C18.4363 5.59612 17.8344 4.61125 17.0596 4.27551C16.3832 3.98238 15.6155 3.98238 14.9391 4.27551C14.1643 4.61125 13.5624 5.59612 12.3587 7.56585L10.9989 9.79092M23.9993 6.94181L22.5352 12.4059L17.0711 10.9418M2.66602 15.7392L8.13012 14.2751L9.59422 19.7392M20.666 29.6084L16.666 25.6084L20.666 21.6084" stroke="url(#paint0_linear_1591_5916)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5916" x1="28.5738" y1="29.6084" x2="8.99559" y2="-0.113681" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Automated Submissions to SWAs</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 12.9417V10.675C28 8.43481 28 7.31471 27.564 6.45906C27.1805 5.70641 26.5686 5.09449 25.816 4.711C24.9603 4.27502 23.8402 4.27502 21.6 4.27502H10.4C8.15979 4.27502 7.03969 4.27502 6.18404 4.711C5.43139 5.09449 4.81947 5.70641 4.43597 6.45906C4 7.31471 4 8.43481 4 10.675V21.875C4 24.1152 4 25.2353 4.43597 26.091C4.81947 26.8436 5.43139 27.4556 6.18404 27.839C7.03969 28.275 8.15979 28.275 10.4 28.275H12.6667M23.1816 23.8901L20.9172 28.0954C20.5471 28.7828 20.362 29.1265 20.1364 29.2162C19.9406 29.294 19.7195 29.2747 19.5401 29.1641C19.3335 29.0367 19.2108 28.6661 18.9654 27.925L15.3339 16.9568C15.119 16.3078 15.0115 15.9832 15.0888 15.7671C15.156 15.5791 15.304 15.431 15.4921 15.3638C15.7082 15.2866 16.0327 15.394 16.6817 15.6089L27.6499 19.2405C28.391 19.4859 28.7616 19.6086 28.889 19.8152C28.9997 19.9946 29.019 20.2157 28.9411 20.4115C28.8514 20.6371 28.5077 20.8221 27.8203 21.1923L23.6151 23.4566C23.5103 23.513 23.458 23.5412 23.4121 23.5775C23.3714 23.6096 23.3346 23.6464 23.3025 23.6871C23.2662 23.733 23.238 23.7854 23.1816 23.8901Z" stroke="url(#paint0_linear_1591_5923)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5923" x1="28.9883" y1="29.2634" x2="9.73948" y2="0.441841" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Customizable Reporting & Centralized Dashboard</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.666 28.275H21.3327M15.9993 22.9417V28.275M9.06602 22.9417H22.9327C25.1729 22.9417 26.293 22.9417 27.1486 22.5057C27.9013 22.1222 28.5132 21.5103 28.8967 20.7577C29.3327 19.902 29.3327 18.7819 29.3327 16.5417V10.675C29.3327 8.43481 29.3327 7.31471 28.8967 6.45906C28.5132 5.70641 27.9013 5.09449 27.1486 4.711C26.293 4.27502 25.1729 4.27502 22.9327 4.27502H9.06602C6.82581 4.27502 5.7057 4.27502 4.85005 4.711C4.09741 5.09449 3.48548 5.70641 3.10199 6.45906C2.66602 7.31471 2.66602 8.43481 2.66602 10.675V16.5417C2.66602 18.7819 2.66602 19.902 3.10199 20.7577C3.48548 21.5103 4.09741 22.1222 4.85005 22.5057C5.7057 22.9417 6.82581 22.9417 9.06602 22.9417Z" stroke="url(#paint0_linear_1591_5927)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_5927" x1="29.3327" y1="28.275" x2="11.6581" y2="-1.1299" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Compliance Monitoring & Updates</p>
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
              <h2 className={s.solutionsBannerHeading}>Over <span className={s.isBlue}>1.9</span> Million Certifications Awarded in <span className={s.isBlue}>2023</span>
              </h2>
              <p className={s.solutionsBannerText}>
                <span>Note: Data may change due to performance reporting updates.</span>
                <span>Source: www.dol.gov/agencies/eta/wotc/performance</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
};

export default TaxCreditServices;
