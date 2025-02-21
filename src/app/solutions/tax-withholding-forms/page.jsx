import tile1 from '@/assets/Solutions/tw1.png';
import tile2 from '@/assets/Solutions/tw2.png';
import banner from '@/assets/Solutions/twbanner.png';
import Contact from '@/components/Common/Contact/Contact';
import Image from 'next/image';
import s from '../solutions.module.scss';

const TaxWithholding = () => {
  return (
    <>
      <section className={`section is-gradient-v2 ${s.solutionsHero}`}>
        <div className="container">
          <div className={s.solutionsHeroTop}>
            <div className={s.solutionsHeroInfo}>
              <h1 className={s.solutionsHeroHeading}>
                Streamline Tax Withholding
              </h1>

              <p className={s.solutionsHeroSubheading}>
                We make it easy for employees and employers to handle tax forms efficiently and securely.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM14 16.5L16.5 14L14 11.5M10 11.5L7.5 14L10 16.5" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Comprehensive Form Library
              </h3>

              <p className='text is-white'>
                Access all essential tax forms, including federal W-4 and state-specific forms, in one convenient location.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.2 22C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V10.8C22 10.52 22 10.38 21.9455 10.273C21.8976 10.1789 21.8211 10.1024 21.727 10.0545C21.62 10 21.48 10 21.2 10L18.8 10C18.52 10 18.38 10 18.273 10.0545C18.1789 10.1024 18.1024 10.1789 18.0545 10.273C18 10.38 18 10.52 18 10.8V13.2C18 13.48 18 13.62 17.9455 13.727C17.8976 13.8211 17.8211 13.8976 17.727 13.9455C17.62 14 17.48 14 17.2 14H14.8C14.52 14 14.38 14 14.273 14.0545C14.1789 14.1024 14.1024 14.1789 14.0545 14.273C14 14.38 14 14.52 14 14.8V17.2C14 17.48 14 17.62 13.9455 17.727C13.8976 17.8211 13.8211 17.8976 13.727 17.9455C13.62 18 13.48 18 13.2 18H10.8C10.52 18 10.38 18 10.273 18.0545C10.1789 18.1024 10.1024 18.1789 10.0545 18.273C10 18.38 10 18.52 10 18.8V21.2C10 21.48 10 21.62 10.0545 21.727C10.1024 21.8211 10.1789 21.8976 10.273 21.9455C10.38 22 10.52 22 10.8 22L21.2 22Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6.8C10 6.51997 10 6.37996 10.0545 6.273C10.1024 6.17892 10.1789 6.10243 10.273 6.0545C10.38 6 10.52 6 10.8 6H13.2C13.48 6 13.62 6 13.727 6.0545C13.8211 6.10243 13.8976 6.17892 13.9455 6.273C14 6.37996 14 6.51997 14 6.8V9.2C14 9.48003 14 9.62004 13.9455 9.727C13.8976 9.82108 13.8211 9.89757 13.727 9.9455C13.62 10 13.48 10 13.2 10H10.8C10.52 10 10.38 10 10.273 9.9455C10.1789 9.89757 10.1024 9.82108 10.0545 9.727C10 9.62004 10 9.48003 10 9.2V6.8Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 12.8C3 12.52 3 12.38 3.0545 12.273C3.10243 12.1789 3.17892 12.1024 3.273 12.0545C3.37996 12 3.51997 12 3.8 12H6.2C6.48003 12 6.62004 12 6.727 12.0545C6.82108 12.1024 6.89757 12.1789 6.9455 12.273C7 12.38 7 12.52 7 12.8V15.2C7 15.48 7 15.62 6.9455 15.727C6.89757 15.8211 6.82108 15.8976 6.727 15.9455C6.62004 16 6.48003 16 6.2 16H3.8C3.51997 16 3.37996 16 3.273 15.9455C3.17892 15.8976 3.10243 15.8211 3.0545 15.727C3 15.62 3 15.48 3 15.2V12.8Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 2.8C2 2.51997 2 2.37996 2.0545 2.273C2.10243 2.17892 2.17892 2.10243 2.273 2.0545C2.37996 2 2.51997 2 2.8 2H5.2C5.48003 2 5.62004 2 5.727 2.0545C5.82108 2.10243 5.89757 2.17892 5.9455 2.273C6 2.37996 6 2.51997 6 2.8V5.2C6 5.48003 6 5.62004 5.9455 5.727C5.89757 5.82108 5.82108 5.89757 5.727 5.9455C5.62004 6 5.48003 6 5.2 6H2.8C2.51997 6 2.37996 6 2.273 5.9455C2.17892 5.89757 2.10243 5.82108 2.0545 5.727C2 5.62004 2 5.48003 2 5.2V2.8Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Reportable Data
              </h3>

              <p className='text is-white'>
                Data export options in XML or CSV formats, enabling easy analysis and customizable reporting to meet your specific needs
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H15M15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18ZM3 8L15 8M15 8C15 9.65686 16.3431 11 18 11C19.6569 11 21 9.65685 21 8C21 6.34315 19.6569 5 18 5C16.3431 5 15 6.34315 15 8Z" stroke="#00030F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Seamless Integration
              </h3>

              <p className='text is-white'>
                Automatically sync employee data with payroll systems to minimize errors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">
            Innovative Smart Form Technology
          </h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  Comprehensive Form Library
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Document management with digital collection, signature, and reportable data fields.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12M8 13V17M16 11V17M12 7V17M2 5L5 2M5 2L8 5M5 2L5 8" stroke="url(#paint0_linear_2763_118219)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118219" x1="21" y1="21" x2="6.36408" y2="-0.914602" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Federal W-4 (Employee&apos;s Withholding Certificate)</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M18 21V15M15 18H21" stroke="url(#paint0_linear_2763_118224)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118224" x1="21" y1="22" x2="4.79489" y2="1.37544" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>State Withholding Forms</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 7V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M12.5 11H8M11.5 15H8M16 7H8M18 18V12.5C18 11.6716 18.6716 11 19.5 11C20.3284 11 21 11.6716 21 12.5V18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V14" stroke="url(#paint0_linear_2763_118230)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118230" x1="21" y1="22" x2="4.79489" y2="1.37544" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>TD1 (Personal Tax Credits Return)</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L19 15M19 15L22 18M19 15V21M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M12 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z" stroke="url(#paint0_linear_2763_118235)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118235" x1="22" y1="21" x2="8.74407" y2="-1.05369" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Local Withholding Forms</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  How It Works
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    With our smart forms, users are guided through the completion of federal, state, and local new hire tax forms, minimizing errors and ensuring accurate data transmission.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={s.solutionsInfoBlockGridItemTop}>
                    <p>Complete the Forms</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>Step 1</span>
                    </div>
                  </div>

                  <p className='text is-s'>
                    Employees fill out the required tax forms based on work and home addresses
                  </p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={s.solutionsInfoBlockGridItemTop}>
                    <p>Withholding Calculation</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>Step 2</span>
                    </div>
                  </div>

                  <p className='text is-s'>Payroll calculates tax deductions based on information provided in the forms, ensuring accurate withholding.</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={s.solutionsInfoBlockGridItemTop}>
                    <p>Submit and Sync</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>Step 3</span>
                    </div>
                  </div>

                  <p className='text is-s'>
                    Completed forms are submitted through the employee portal and automatically synced with your payroll system.
                  </p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <div className={s.solutionsInfoBlockGridItemTop}>
                    <p>Reporting and Compliance</p>

                    <div className={s.solutionsInfoBlockGridItemTopTagWrapper}>
                      <span className={s.solutionsInfoBlockGridItemTopTag}>Step 4</span>
                    </div>
                  </div>

                  <p className='text is-s'>
                    Generate custom reports to track withholding amounts and stay compliant with federal, state, and local tax regulations.
                  </p>
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
                    Take advantage of our experience in assisting organizations of all sizes and from every industry in transitioning from paper-based document management to a digitized experience.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V13M13 17H7M15 13H7M20.1213 3.87868C21.2929 5.05025 21.2929 6.94975 20.1213 8.12132C18.9497 9.29289 17.0503 9.29289 15.8787 8.12132C14.7071 6.94975 14.7071 5.05025 15.8787 3.87868C17.0503 2.70711 18.9497 2.70711 20.1213 3.87868Z" stroke="url(#paint0_linear_2763_118289)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118289" x1="21" y1="21" x2="7.13439" y2="0.238798" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Multi - Form Support</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z" stroke="url(#paint0_linear_2763_118294)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118294" x1="21" y1="21" x2="7.13439" y2="0.238798" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Version Tracking</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8L12 12M12 16L11.99 16M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="url(#paint0_linear_2763_118299)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118299" x1="2" y1="2" x2="17.4062" y2="25.068" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Built in Logic and Validation</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 6.5L6.5 17.5M8.5 10.5V6.5M6.5 8.5H10.5M13.5 15.5H17.5M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z" stroke="url(#paint0_linear_2763_118303)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_118303" x1="21" y1="21" x2="7.13439" y2="0.238798" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Automatic Calculations</p>
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
                All forms are <span className={s.isBlue}>100%</span> electronic and compliance-ready.
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
};

export default TaxWithholding;
