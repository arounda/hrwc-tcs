import tile1 from '@/assets/Solutions/eonboard1.png';
import tile2 from '@/assets/Solutions/eonboard2.png';
import banner from '@/assets/Solutions/eonboardbanner.png';
import Contact from '@/components/Common/Contact/Contact';
import Image from 'next/image';
import s from '../solutions.module.scss';

const EOnboarding = () => {
  return (
    <>
      <section className={`section is-gradient-v2 ${s.solutionsHero}`}>
        <div className="container">
          <div className={s.solutionsHeroTop}>
            <div className={s.solutionsHeroInfo}>
              <h1 className={s.solutionsHeroHeading}>
                A Better Way to Onboard
              </h1>

              <p className={s.solutionsHeroSubheading}>
                A simplified process for you and your team.
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
                  <path d="M11 4.5H18.3C19.4201 4.5 19.9802 4.5 20.408 4.71799C20.7843 4.90973 21.0903 5.21569 21.282 5.59202C21.5 6.01984 21.5 6.57989 21.5 7.7V9C21.5 9.93188 21.5 10.3978 21.3478 10.7654C21.1448 11.2554 20.7554 11.6448 20.2654 11.8478C19.8978 12 19.4319 12 18.5 12M13 19.5H5.7C4.5799 19.5 4.01984 19.5 3.59202 19.282C3.21569 19.0903 2.90973 18.7843 2.71799 18.408C2.5 17.9802 2.5 17.4201 2.5 16.3V15C2.5 14.0681 2.5 13.6022 2.65224 13.2346C2.85523 12.7446 3.24458 12.3552 3.73463 12.1522C4.10218 12 4.56812 12 5.5 12M10.3 14.5H13.7C13.98 14.5 14.12 14.5 14.227 14.4455C14.3211 14.3976 14.3976 14.3211 14.4455 14.227C14.5 14.12 14.5 13.98 14.5 13.7V10.3C14.5 10.02 14.5 9.87996 14.4455 9.773C14.3976 9.67892 14.3211 9.60243 14.227 9.5545C14.12 9.5 13.98 9.5 13.7 9.5H10.3C10.02 9.5 9.87996 9.5 9.773 9.5545C9.67892 9.60243 9.60243 9.67892 9.5545 9.773C9.5 9.87996 9.5 10.02 9.5 10.3V13.7C9.5 13.98 9.5 14.12 9.5545 14.227C9.60243 14.3211 9.67892 14.3976 9.773 14.4455C9.87996 14.5 10.02 14.5 10.3 14.5ZM17.8 22H21.2C21.48 22 21.62 22 21.727 21.9455C21.8211 21.8976 21.8976 21.8211 21.9455 21.727C22 21.62 22 21.48 22 21.2V17.8C22 17.52 22 17.38 21.9455 17.273C21.8976 17.1789 21.8211 17.1024 21.727 17.0545C21.62 17 21.48 17 21.2 17H17.8C17.52 17 17.38 17 17.273 17.0545C17.1789 17.1024 17.1024 17.1789 17.0545 17.273C17 17.38 17 17.52 17 17.8V21.2C17 21.48 17 21.62 17.0545 21.727C17.1024 21.8211 17.1789 21.8976 17.273 21.9455C17.38 22 17.52 22 17.8 22ZM2.8 7H6.2C6.48003 7 6.62004 7 6.727 6.9455C6.82108 6.89757 6.89757 6.82108 6.9455 6.727C7 6.62004 7 6.48003 7 6.2V2.8C7 2.51997 7 2.37996 6.9455 2.273C6.89757 2.17892 6.82108 2.10243 6.727 2.0545C6.62004 2 6.48003 2 6.2 2H2.8C2.51997 2 2.37996 2 2.273 2.0545C2.17892 2.10243 2.10243 2.17892 2.0545 2.273C2 2.37996 2 2.51997 2 2.8V6.2C2 6.48003 2 6.62004 2.0545 6.727C2.10243 6.82108 2.17892 6.89757 2.273 6.9455C2.37996 7 2.51997 7 2.8 7Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Streamlined Data Collection
              </h3>

              <p className='text is-white'>
                Automated workflows, digital signatures, and data validation ensure accurate and consistent information, minimizing errors, missing details, and incomplete forms.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Cost and Time Savings
              </h3>

              <p className='text is-white'>
                Eliminate paper-related costs with automated processes that reduce manual tasks, freeing HR teams to focus on strategic priorities.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 20H8M17.5 17H16.5M8 6H5.2C4.0799 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.0799 2 9.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H8M15.2 20H18.8C19.9201 20 20.4802 20 20.908 19.782C21.2843 19.5903 21.5903 19.2843 21.782 18.908C22 18.4802 22 17.9201 22 16.8V7.2C22 6.0799 22 5.51984 21.782 5.09202C21.5903 4.71569 21.2843 4.40973 20.908 4.21799C20.4802 4 19.9201 4 18.8 4H15.2C14.0799 4 13.5198 4 13.092 4.21799C12.7157 4.40973 12.4097 4.71569 12.218 5.09202C12 5.51984 12 6.07989 12 7.2V16.8C12 17.9201 12 18.4802 12.218 18.908C12.4097 19.2843 12.7157 19.5903 13.092 19.782C13.5198 20 14.0799 20 15.2 20Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Enhanced Employee Experience
              </h3>

              <p className='text is-white'>
                User-friendly interface, allowing new hires to complete forms and submit required documents remotely, from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">
            Advantages of our Customized Onboarding
          </h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  Custom Forms
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Experience a seamless and secure onboarding process with our custom-designed forms. We convert your unique onboarding documents into a mobile-friendly system, providing convenience and flexibility for both employers and employees.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.6669 3.11186C10.0668 3.11999 9.70662 3.15473 9.41534 3.30314C9.08083 3.47358 8.80887 3.74555 8.63843 4.08006C8.49002 4.37133 8.45528 4.73155 8.44715 5.3316M18.6669 3.11186C19.2669 3.11999 19.6272 3.15473 19.9184 3.30314C20.2529 3.47358 20.5249 3.74555 20.6953 4.08006C20.8437 4.37133 20.8785 4.73155 20.8866 5.33159M20.8866 13.3316C20.8785 13.9316 20.8437 14.2919 20.6953 14.5831C20.5249 14.9176 20.2529 15.1896 19.9184 15.3601C19.6272 15.5085 19.2669 15.5432 18.6669 15.5513M20.8891 8.4427V10.2205M13.778 3.10938H15.5557M5.95577 20.8872H12.7113C13.707 20.8872 14.2048 20.8872 14.5851 20.6934C14.9196 20.5229 15.1916 20.251 15.362 19.9165C15.5558 19.5362 15.5558 19.0384 15.5558 18.0427V11.2872C15.5558 10.2915 15.5558 9.79368 15.362 9.41339C15.1916 9.07888 14.9196 8.80692 14.5851 8.63647C14.2048 8.44271 13.707 8.44271 12.7113 8.44271H5.95577C4.96012 8.44271 4.4623 8.44271 4.08201 8.63647C3.7475 8.80692 3.47554 9.07888 3.30509 9.41339C3.11133 9.79368 3.11133 10.2915 3.11133 11.2872V18.0427C3.11133 19.0384 3.11133 19.5362 3.30509 19.9165C3.47554 20.251 3.7475 20.5229 4.08201 20.6934C4.4623 20.8872 4.96012 20.8872 5.95577 20.8872Z" stroke="url(#paint0_linear_2763_117946)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117946" x1="20.8891" y1="20.8872" x2="7.19468" y2="0.382262" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Employment Offer Letters</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L18 20L22 16M22 10H2M22 12V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.7157 21.2843 5.40974 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.7157 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782C3.51984 19 4.0799 19 5.2 19H12" stroke="url(#paint0_linear_2763_117951)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117951" x1="22" y1="20" x2="11.9821" y2="1.254e-05" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Direct Deposit & Paycard Enrollments</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 11H17.8C18.9201 11 19.4802 11 19.908 11.218C20.2843 11.4097 20.5903 11.7157 20.782 12.092C21 12.5198 21 13.0799 21 14.2V21M13 21V6.2C13 5.0799 13 4.51984 12.782 4.09202C12.5903 3.71569 12.2843 3.40973 11.908 3.21799C11.4802 3 10.9201 3 9.8 3H6.2C5.0799 3 4.51984 3 4.09202 3.21799C3.71569 3.40973 3.40973 3.71569 3.21799 4.09202C3 4.51984 3 5.0799 3 6.2V21M22 21H2M6.5 7H9.5M6.5 11H9.5M6.5 15H9.5" stroke="url(#paint0_linear_2763_117956)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117956" x1="22" y1="21" x2="8.74407" y2="-1.05369" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Company Policies and Procedures</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 17.5L21.3083 7.46975C21.1997 5.89504 21.1454 5.10768 20.8041 4.51082C20.5036 3.98533 20.0512 3.56304 19.5062 3.29942C18.8873 3 18.0981 3 16.5196 3H7.48037C5.90191 3 5.11268 3 4.49376 3.29942C3.94884 3.56304 3.49642 3.98533 3.19594 4.51082C2.85464 5.10768 2.80034 5.89503 2.69174 7.46975L2 17.5M22 17.5C22 19.433 20.433 21 18.5 21H5.5C3.567 21 2 19.433 2 17.5M22 17.5C22 15.567 20.433 14 18.5 14H5.5C3.567 14 2 15.567 2 17.5M6 17.5H6.01M12 17.5H18" stroke="url(#paint0_linear_2763_117961)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117961" x1="22" y1="21" x2="8.74407" y2="-1.05369" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Employee Handbooks</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M4.66667 20H19.3333C19.9533 20 20.2633 20 20.5176 19.9319C21.2078 19.7469 21.7469 19.2078 21.9319 18.5176C22 18.2633 22 17.9533 22 17.3333C22 17.0233 22 16.8683 21.9659 16.7412C21.8735 16.3961 21.6039 16.1265 21.2588 16.0341C21.1317 16 20.9767 16 20.6667 16H3.33333C3.02334 16 2.86835 16 2.74118 16.0341C2.39609 16.1265 2.12654 16.3961 2.03407 16.7412C2 16.8683 2 17.0233 2 17.3333C2 17.9533 2 18.2633 2.06815 18.5176C2.25308 19.2078 2.79218 19.7469 3.48236 19.9319C3.73669 20 4.04669 20 4.66667 20Z" stroke="url(#paint0_linear_2763_117967)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117967" x1="22" y1="20" x2="10.9084" y2="-0.759636" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Drug Screen & Background Check Authorizations</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 11H8M10 15H8M16 7H8M20 10V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12.5M18 21C18 21 21 19.5701 21 17.4252V14.9229L18.8124 14.1412C18.2868 13.9529 17.712 13.9529 17.1864 14.1412L15 14.9229V17.4252C15 19.5701 18 21 18 21Z" stroke="url(#paint0_linear_2763_117972)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2763_117972" x1="21" y1="22" x2="4.79489" y2="1.37544" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Insurance & Benefit Enrollments</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  W-4 Management
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    By providing pre-populated applicable State and Federal W-4 forms, our employee on-boarding process becomes faster, smoother, and more efficient, as new hires can quickly and easily provide accurate tax withholding information without having to spend time searching for and filling out the necessary forms themselves
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="url(#paint0_linear_2793_148164)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148164" x1="21" y1="21" x2="7.13439" y2="0.238798" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Zip Code Lookup</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 11V13M10 9V15M14 7V17M18 11V13M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="url(#paint0_linear_2793_148168)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148168" x1="22" y1="22" x2="6.59377" y2="-1.068" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Up-to-date transmission</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.91822 3.38565C8.40742 2.50524 10.1447 2 12 2C17.5228 2 22 6.47715 22 12C22 12.0331 21.9998 12.0662 21.9995 12.0993M3.38114 6.92585C2.50352 8.41335 2 10.1479 2 12C2 16.6596 5.18693 20.5748 9.5 21.685M20.7076 16.9206C19.3872 19.2522 17.1574 21.001 14.5 21.685M14.0893 6.37378C13.4387 6.13207 12.7348 6 12 6C8.68629 6 6 8.68629 6 12C6 12.7387 6.13351 13.4463 6.37772 14.0999M17.6251 9.90767C17.8675 10.5591 18 11.2641 18 12C18 15.3137 15.3137 18 12 18C11.2701 18 10.5707 17.8697 9.92373 17.631M12 10V14" stroke="url(#paint0_linear_2793_148174)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148174" x1="22" y1="21.685" x2="6.93002" y2="-1.24071" gradientUnits="userSpaceOnUse">
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
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="url(#paint0_linear_2793_148179)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z" stroke="url(#paint1_linear_2793_148179)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148179" x1="20" y1="22" x2="3.58953" y2="2.34267" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_2793_148179" x1="20" y1="22" x2="3.58953" y2="2.34267" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Home & Work Presentation</p>
                </div>
              </div>
            </div>

            <div className={s.solutionsInfoBlocksSeparator}></div>

            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  Key Benefits
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    Take advantage of our experience in assisting organizations of all sizes and from every industry in transitioning from paper-based to electronic onboarding.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.84281 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z" stroke="url(#paint0_linear_2793_148191)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148191" x1="22" y1="22" x2="6.59377" y2="-1.068" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Fully Featured Solution</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 21V13.6C9 13.0399 9 12.7599 9.109 12.546C9.20487 12.3578 9.35785 12.2049 9.54601 12.109C9.75993 12 10.04 12 10.6 12H13.4C13.9601 12 14.2401 12 14.454 12.109C14.6422 12.2049 14.7951 12.3578 14.891 12.546C15 12.7599 15 13.0399 15 13.6V21M2 9.5L11.04 2.72C11.3843 2.46181 11.5564 2.33271 11.7454 2.28294C11.9123 2.23902 12.0877 2.23902 12.2546 2.28295C12.4436 2.33271 12.6157 2.46181 12.96 2.72L22 9.5M4 8V17.8C4 18.9201 4 19.4802 4.21799 19.908C4.40974 20.2843 4.7157 20.5903 5.09202 20.782C5.51985 21 6.0799 21 7.2 21H16.8C17.9201 21 18.4802 21 18.908 20.782C19.2843 20.5903 19.5903 20.2843 19.782 19.908C20 19.4802 20 18.9201 20 17.8V8L13.92 3.44C13.2315 2.92361 12.8872 2.66542 12.5091 2.56589C12.1754 2.47804 11.8246 2.47804 11.4909 2.56589C11.1128 2.66542 10.7685 2.92361 10.08 3.44L4 8Z" stroke="url(#paint0_linear_2793_148195)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148195" x1="22" y1="21" x2="7.93398" y2="-1.46538" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Address Validation</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 7L11.8845 4.76892C11.5634 4.1268 11.4029 3.80573 11.1634 3.57116C10.9516 3.36373 10.6963 3.20597 10.4161 3.10931C10.0992 3 9.74021 3 9.02229 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V7M2 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V7ZM12 17.5C12 17.5 15 16.0701 15 13.9252V11.4229L12.8124 10.6412C12.2868 10.4529 11.712 10.4529 11.1864 10.6412L9 11.4229V13.9252C9 16.0701 12 17.5 12 17.5Z" stroke="url(#paint0_linear_2793_148200)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148200" x1="22" y1="21" x2="8.74407" y2="-1.05369" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Recorded Timestamps</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15L8 17L12.5 12.5M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z" stroke="url(#paint0_linear_2793_148205)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148205" x1="22" y1="22" x2="6.59377" y2="-1.068" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Countersign Workflows</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 3L12 7L7 3M6.8 21H17.2C18.8802 21 19.7202 21 20.362 20.673C20.9265 20.3854 21.3854 19.9265 21.673 19.362C22 18.7202 22 17.8802 22 16.2V11.8C22 10.1198 22 9.27976 21.673 8.63803C21.3854 8.07354 20.9265 7.6146 20.362 7.32698C19.7202 7 18.8802 7 17.2 7H6.8C5.11984 7 4.27976 7 3.63803 7.32698C3.07354 7.6146 2.6146 8.07354 2.32698 8.63803C2 9.27976 2 10.1198 2 11.8V16.2C2 17.8802 2 18.7202 2.32698 19.362C2.6146 19.9265 3.07354 20.3854 3.63803 20.673C4.27976 21 5.11984 21 6.8 21Z" stroke="url(#paint0_linear_2793_148210)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148210" x1="22" y1="21" x2="8.74407" y2="-1.05369" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>View Training Videos</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11V8.2C22 7.0799 22 6.51984 21.782 6.09202C21.5903 5.71569 21.2843 5.40973 20.908 5.21799C20.4802 5 19.9201 5 18.8 5H5.2C4.0799 5 3.51984 5 3.09202 5.21799C2.71569 5.40973 2.40973 5.71569 2.21799 6.09202C2 6.51984 2 7.0799 2 8.2V11.8C2 12.9201 2 13.4802 2.21799 13.908C2.40973 14.2843 2.71569 14.5903 3.09202 14.782C3.51984 15 4.0799 15 5.2 15H11M12 10H12.005M17 10H17.005M7 10H7.005M19.25 17V15.25C19.25 14.2835 18.4665 13.5 17.5 13.5C16.5335 13.5 15.75 14.2835 15.75 15.25V17M12.25 10C12.25 10.1381 12.1381 10.25 12 10.25C11.8619 10.25 11.75 10.1381 11.75 10C11.75 9.86193 11.8619 9.75 12 9.75C12.1381 9.75 12.25 9.86193 12.25 10ZM17.25 10C17.25 10.1381 17.1381 10.25 17 10.25C16.8619 10.25 16.75 10.1381 16.75 10C16.75 9.86193 16.8619 9.75 17 9.75C17.1381 9.75 17.25 9.86193 17.25 10ZM7.25 10C7.25 10.1381 7.13807 10.25 7 10.25C6.86193 10.25 6.75 10.1381 6.75 10C6.75 9.86193 6.86193 9.75 7 9.75C7.13807 9.75 7.25 9.86193 7.25 10ZM15.6 21H19.4C19.9601 21 20.2401 21 20.454 20.891C20.6422 20.7951 20.7951 20.6422 20.891 20.454C21 20.2401 21 19.9601 21 19.4V18.6C21 18.0399 21 17.7599 20.891 17.546C20.7951 17.3578 20.6422 17.2049 20.454 17.109C20.2401 17 19.9601 17 19.4 17H15.6C15.0399 17 14.7599 17 14.546 17.109C14.3578 17.2049 14.2049 17.3578 14.109 17.546C14 17.7599 14 18.0399 14 18.6V19.4C14 19.9601 14 20.2401 14.109 20.454C14.2049 20.6422 14.3578 20.7951 14.546 20.891C14.7599 21 15.0399 21 15.6 21Z" stroke="url(#paint0_linear_2793_148215)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_2793_148215" x1="22" y1="21" x2="10.9084" y2="0.240364" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>IP Address Collection</p>
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
                <span className={s.isBlue}>406M</span> Onboarding Forms Processed
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
};

export default EOnboarding;
