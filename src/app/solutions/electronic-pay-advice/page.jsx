import tile1 from '@/assets/Solutions/epa1.png';
import tile2 from '@/assets/Solutions/epa2.png';
import banner from '@/assets/Solutions/epabanner.png';
import Contact from '@/components/Common/Contact/Contact';
import Image from 'next/image';
import s from '../solutions.module.scss';

const EPayAdvice = () => {
  return (
    <>
      <section className={`section is-gradient-v2 ${s.solutionsHero}`}>
        <div className="container">
          <div className={s.solutionsHeroTop}>
            <div className={s.solutionsHeroInfo}>
              <h1 className={s.solutionsHeroHeading}>
                Digitize W-2&apos;s and Paystubs
              </h1>

              <p className={s.solutionsHeroSubheading}>
                Convenient Access to Pay Information
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
                  <path d="M16.5 18.593L19.5 15.593M19.5 15.593L22.5 18.593M19.5 15.593V21.593M22.5 10.593H2.5M22.5 12.593V8.79302C22.5 7.67291 22.5 7.11286 22.282 6.68504C22.0903 6.30871 21.7843 6.00275 21.408 5.81101C20.9802 5.59302 20.4201 5.59302 19.3 5.59302H5.7C4.5799 5.59302 4.01984 5.59302 3.59202 5.811C3.2157 6.00275 2.90973 6.30871 2.71799 6.68504C2.5 7.11286 2.5 7.67291 2.5 8.79302V16.393C2.5 17.5131 2.5 18.0732 2.71799 18.501C2.90973 18.8773 3.21569 19.1833 3.59202 19.375C4.01984 19.593 4.5799 19.593 5.7 19.593H12.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                Paperless Paystubs
              </h3>

              <p className='text is-white'>
                Say goodbye to traditional paper paystubs and embrace the convenience of electronic paystubs, accessible anytime and anywhere
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 2.86255V6.99309C14.5 7.55314 14.5 7.83317 14.609 8.04708C14.7049 8.23524 14.8578 8.38822 15.046 8.4841C15.2599 8.59309 15.5399 8.59309 16.1 8.59309H20.2305M8.5 15.593V18.593M16.5 13.593V18.593M12.5 11.093V18.593M20.5 10.5812V17.793C20.5 19.4732 20.5 20.3133 20.173 20.955C19.8854 21.5195 19.4265 21.9784 18.862 22.266C18.2202 22.593 17.3802 22.593 15.7 22.593H9.3C7.61984 22.593 6.77976 22.593 6.13803 22.266C5.57354 21.9784 5.1146 21.5195 4.82698 20.955C4.5 20.3133 4.5 19.4732 4.5 17.793V7.39302C4.5 5.71286 4.5 4.87278 4.82698 4.23105C5.1146 3.66656 5.57354 3.20762 6.13803 2.92C6.77976 2.59302 7.61984 2.59302 9.3 2.59302H12.5118C13.2455 2.59302 13.6124 2.59302 13.9577 2.67591C14.2638 2.7494 14.5564 2.87061 14.8249 3.0351C15.1276 3.22062 15.387 3.48005 15.9059 3.99891L19.0941 7.18713C19.613 7.70599 19.8724 7.96541 20.0579 8.26816C20.2224 8.53658 20.3436 8.82921 20.4171 9.13532C20.5 9.48058 20.5 9.84747 20.5 10.5812Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                W-2 and 1095-C Management
              </h3>

              <p className='text is-white'>
                Simplify your year-end tax reporting process with quick and easy distribution of W-2 forms and 1095-Cs to employees.
              </p>
            </div>

            <div className='heroCard is-solution'>
              <div className='heroCardIconWrapper'>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 20.593H5.5C4.39543 20.593 3.5 19.6976 3.5 18.593V4.59302C3.5 3.48845 4.39543 2.59302 5.5 2.59302H19.5C20.6046 2.59302 21.5 3.48845 21.5 4.59302V18.593C21.5 19.6976 20.6046 20.593 19.5 20.593H18M12.5 19.593C14.1569 19.593 15.5 18.2499 15.5 16.593C15.5 14.9362 14.1569 13.593 12.5 13.593C10.8431 13.593 9.5 14.9362 9.5 16.593C9.5 18.2499 10.8431 19.593 12.5 19.593ZM12.5 19.593L12.5214 19.5928L9.32867 22.7856L6.50024 19.9572L9.51965 16.9377M12.5 19.593L15.6928 22.7856L18.5212 19.9572L15.5018 16.9377M9.5 6.59302H15.5M7.5 10.093H17.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3 className='heading-h5 is-white mb-8'>
                1099 Management
              </h3>

              <p className='text is-white'>
                Stay organized and compliant with the process of generating and distributing 1099 forms to contractors and vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-padding-block">
        <div className="container">
          <h2 className="heading-h2 is-centered">
            The benefits of employee self-service pay
          </h2>

          <div className={s.solutionsInfo}>
            <div className={s.solutionsInfoBlock}>
              <div className={s.solutionsInfoBlockMain}>
                <h3 className='heading-h3 mb-8'>
                  Universal Access
                </h3>

                <div className={s.solutionsInfoTextWrapper}>
                  <p className='text'>
                    HRWC system utilizes many different mechanisms to allow employees access to their pay information.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.66797 25.9263C5.35426 25.9263 2.66797 23.24 2.66797 19.9263C2.66797 16.8016 5.05665 14.2347 8.10762 13.9521C8.73172 10.1558 12.0283 7.25964 16.0013 7.25964C19.9743 7.25964 23.2709 10.1558 23.895 13.9521C26.946 14.2347 29.3346 16.8016 29.3346 19.9263C29.3346 23.24 26.6483 25.9263 23.3346 25.9263C17.4815 25.9263 13.7924 25.9263 8.66797 25.9263Z" stroke="url(#paint0_linear_1655_15688)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1655_15688" x1="29.3346" y1="25.9263" x2="17.3902" y2="0.376942" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Web-based pay stub</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.593L14.6667 17.2597L20.6667 11.2597M9.33333 24.593V27.707C9.33333 28.4175 9.33333 28.7727 9.47897 28.9552C9.60563 29.1138 9.79769 29.2062 10.0007 29.2059C10.2342 29.2057 10.5116 28.9838 11.0663 28.5399L14.247 25.9955C14.8967 25.4757 15.2216 25.2158 15.5833 25.031C15.9043 24.867 16.2459 24.7471 16.599 24.6747C16.9969 24.593 17.4129 24.593 18.245 24.593H21.6C23.8402 24.593 24.9603 24.593 25.816 24.157C26.5686 23.7735 27.1805 23.1616 27.564 22.409C28 21.5533 28 20.4332 28 18.193V10.993C28 8.75281 28 7.6327 27.564 6.77706C27.1805 6.02441 26.5686 5.41248 25.816 5.02899C24.9603 4.59302 23.8402 4.59302 21.6 4.59302H10.4C8.15979 4.59302 7.03969 4.59302 6.18404 5.02899C5.43139 5.41248 4.81947 6.02441 4.43597 6.77706C4 7.6327 4 8.75281 4 10.993V19.2597C4 20.4996 4 21.1196 4.1363 21.6283C4.50617 23.0087 5.58436 24.0869 6.96472 24.4567C7.47339 24.593 8.09337 24.593 9.33333 24.593Z" stroke="url(#paint0_linear_1591_10780)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_10780" x1="28" y1="29.2059" x2="8.86157" y2="1.26325" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Text messaging of pay information</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.0008 11.2597V4.59302M28.0008 4.59302H21.3341M28.0008 4.59302L20.0008 12.593M13.6368 19.0771C12.0347 17.475 10.7697 15.6635 9.84167 13.7307C9.76185 13.5644 9.72194 13.4813 9.69127 13.3761C9.58231 13.0023 9.66058 12.5433 9.88726 12.2267C9.95105 12.1376 10.0273 12.0614 10.1797 11.909C10.6458 11.4429 10.8789 11.2098 11.0313 10.9754C11.6059 10.0916 11.6059 8.95211 11.0313 8.06826C10.8789 7.83389 10.6458 7.60082 10.1797 7.13468L9.91985 6.87485C9.21126 6.16626 8.85696 5.81197 8.47645 5.61951C7.71971 5.23675 6.82602 5.23675 6.06927 5.61951C5.68876 5.81197 5.33447 6.16626 4.62588 6.87485L4.4157 7.08503C3.70953 7.79119 3.35645 8.14428 3.08679 8.62432C2.78756 9.15699 2.57241 9.98432 2.57423 10.5953C2.57587 11.1459 2.68267 11.5222 2.89628 12.2748C4.04424 16.3193 6.21021 20.1358 9.39418 23.3197C12.5782 26.5037 16.3946 28.6697 20.4392 29.8177C21.1918 30.0313 21.5681 30.1381 22.1187 30.1397C22.7296 30.1415 23.5569 29.9264 24.0896 29.6271C24.5697 29.3575 24.9227 29.0044 25.6289 28.2982L25.8391 28.0881C26.5477 27.3795 26.902 27.0252 27.0944 26.6447C27.4772 25.8879 27.4772 24.9942 27.0944 24.2375C26.902 23.857 26.5477 23.5027 25.8391 22.7941L25.5793 22.5343C25.1131 22.0681 24.88 21.835 24.6457 21.6827C23.7618 21.108 22.6224 21.108 21.7385 21.6827C21.5042 21.835 21.2711 22.0681 20.8049 22.5343C20.6525 22.6867 20.5763 22.7629 20.4872 22.8267C20.1707 23.0534 19.7116 23.1316 19.3378 23.0227C19.2327 22.992 19.1495 22.9521 18.9833 22.8723C17.0505 21.9443 15.2389 20.6792 13.6368 19.0771Z" stroke="url(#paint0_linear_1655_15700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1655_15700" x1="28.0008" y1="30.1397" x2="8.28648" y2="0.759992" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Interactive Voice Response (IVR) access to pay information</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.66797 9.92639L13.5545 17.547C14.4361 18.1641 14.8769 18.4726 15.3563 18.5921C15.7798 18.6977 16.2228 18.6977 16.6463 18.5921C17.1257 18.4726 17.5665 18.1641 18.4481 17.547L29.3346 9.92639M9.06797 27.2597H22.9346C25.1748 27.2597 26.295 27.2597 27.1506 26.8237C27.9032 26.4403 28.5152 25.8283 28.8987 25.0757C29.3346 24.22 29.3346 23.0999 29.3346 20.8597V12.3264C29.3346 10.0862 29.3346 8.96608 28.8987 8.11043C28.5152 7.35778 27.9032 6.74586 27.1506 6.36237C26.295 5.92639 25.1748 5.92639 22.9346 5.92639H9.06797C6.82776 5.92639 5.70765 5.92639 4.85201 6.36237C4.09936 6.74586 3.48744 7.35778 3.10394 8.11043C2.66797 8.96608 2.66797 10.0862 2.66797 12.3264V20.8597C2.66797 23.0999 2.66797 24.22 3.10394 25.0757C3.48744 25.8283 4.09936 26.4403 4.85201 26.8237C5.70765 27.2597 6.82776 27.2597 9.06797 27.2597Z" stroke="url(#paint0_linear_1591_10790)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_10790" x1="29.3346" y1="27.2597" x2="14.5458" y2="-0.419791" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>E-mail distribution</p>
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
                    Take advantage of our experience in assisting organizations of all sizes and from every industry in transitioning from paper-based to digital pay.
                  </p>
                </div>
              </div>

              <div className={s.solutionsInfoBlockGrid}>
                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.12712 15.5647C8.04425 15.0306 8.00125 14.4835 8.00125 13.9263C8.00125 8.03527 12.8083 3.25964 18.7381 3.25964C24.6679 3.25964 29.4749 8.03527 29.4749 13.9263C29.4749 15.2571 29.2296 16.5309 28.7815 17.7056C28.6884 17.9496 28.6419 18.0716 28.6208 18.1669C28.5998 18.2612 28.5918 18.3276 28.5895 18.4242C28.5872 18.5218 28.6004 18.6292 28.6269 18.8441L29.1636 23.2043C29.2217 23.6764 29.2508 23.9124 29.1723 24.0839C29.1035 24.2343 28.9813 24.3537 28.8294 24.419C28.6561 24.4935 28.4208 24.459 27.9503 24.3901L23.7032 23.7675C23.4815 23.735 23.3706 23.7188 23.2696 23.7193C23.1697 23.7199 23.1006 23.7273 23.0028 23.7478C22.904 23.7686 22.7778 23.8159 22.5253 23.9105C21.3475 24.3516 20.0712 24.593 18.7381 24.593C18.1805 24.593 17.6329 24.5508 17.0982 24.4693M10.1767 29.9263C14.1299 29.9263 17.3346 26.6431 17.3346 22.593C17.3346 18.5429 14.1299 15.2596 10.1767 15.2596C6.22354 15.2596 3.01885 18.5429 3.01885 22.593C3.01885 23.4071 3.14834 24.1902 3.38737 24.9219C3.48841 25.2313 3.53893 25.3859 3.55551 25.4916C3.57282 25.6019 3.57586 25.6638 3.56941 25.7753C3.56323 25.882 3.53652 26.0027 3.48309 26.2441L2.66797 29.9263L6.66104 29.381C6.87899 29.3512 6.98796 29.3363 7.08313 29.337C7.18333 29.3376 7.23651 29.3431 7.33478 29.3627C7.42811 29.3813 7.56685 29.4302 7.84433 29.5282C8.57543 29.7862 9.36011 29.9263 10.1767 29.9263Z" stroke="url(#paint0_linear_1591_10802)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_10802" x1="29.4749" y1="29.9263" x2="8.97479" y2="-0.930393" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Streamline Employee Communication</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33464 27.2597H10.668M23.3346 23.2597H22.0013M10.668 8.593H6.93464C5.44116 8.593 4.69443 8.593 4.12399 8.88365C3.62223 9.13931 3.21428 9.54726 2.95862 10.049C2.66797 10.6195 2.66797 11.3662 2.66797 12.8597V17.6597C2.66797 19.1531 2.66797 19.8999 2.95862 20.4703C3.21428 20.9721 3.62223 21.38 4.12399 21.6357C4.69443 21.9263 5.44116 21.9263 6.93464 21.9263H10.668M20.268 27.2597H25.068C26.5614 27.2597 27.3082 27.2597 27.8786 26.969C28.3804 26.7134 28.7883 26.3054 29.044 25.8036C29.3346 25.2332 29.3346 24.4865 29.3346 22.993V10.193C29.3346 8.69952 29.3346 7.95279 29.044 7.38236C28.7883 6.88059 28.3804 6.47264 27.8786 6.21698C27.3082 5.92633 26.5614 5.92633 25.068 5.92633H20.268C18.7745 5.92633 18.0278 5.92633 17.4573 6.21698C16.9556 6.47264 16.5476 6.88059 16.292 7.38236C16.0013 7.95279 16.0013 8.69952 16.0013 10.193V22.993C16.0013 24.4865 16.0013 25.2332 16.292 25.8036C16.5476 26.3054 16.9556 26.7134 17.4573 26.969C18.0278 27.2597 18.7745 27.2597 20.268 27.2597Z" stroke="url(#paint0_linear_1660_16007)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1660_16007" x1="29.3346" y1="27.2597" x2="14.5458" y2="-0.41985" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Secure Employee Portal</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0013 21.2597H10.0013C8.14055 21.2597 7.21017 21.2597 6.45311 21.4893C4.74858 22.0064 3.41469 23.3403 2.89762 25.0448C2.66797 25.8019 2.66797 26.7323 2.66797 28.593M21.3346 24.593L24.0013 27.2597L29.3346 21.9264M19.3346 10.593C19.3346 13.9067 16.6483 16.593 13.3346 16.593C10.0209 16.593 7.33464 13.9067 7.33464 10.593C7.33464 7.27931 10.0209 4.59302 13.3346 4.59302C16.6483 4.59302 19.3346 7.27931 19.3346 10.593Z" stroke="url(#paint0_linear_1655_15703)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1655_15703" x1="29.3346" y1="28.593" x2="11.6601" y2="-0.811906" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Improved Employee Experience</p>
                </div>

                <div className={s.solutionsInfoBlockGridItem}>
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28 13.9264H4M21.3333 3.2597V8.59304M10.6667 3.2597V8.59304M12 21.9264L14.6667 24.593L20.6667 18.593M10.4 29.9264H21.6C23.8402 29.9264 24.9603 29.9264 25.816 29.4904C26.5686 29.1069 27.1805 28.495 27.564 27.7423C28 26.8867 28 25.7666 28 23.5264V12.3264C28 10.0862 28 8.96606 27.564 8.11041C27.1805 7.35776 26.5686 6.74584 25.816 6.36235C24.9603 5.92637 23.8402 5.92637 21.6 5.92637H10.4C8.15979 5.92637 7.03969 5.92637 6.18404 6.36235C5.43139 6.74584 4.81947 7.35776 4.43597 8.11041C4 8.96606 4 10.0862 4 12.3264V23.5264C4 25.7666 4 26.8867 4.43597 27.7423C4.81947 28.495 5.43139 29.1069 6.18404 29.4904C7.03969 29.9264 8.15979 29.9264 10.4 29.9264Z" stroke="url(#paint0_linear_1591_10816)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_1591_10816" x1="28" y1="29.9264" x2="6.71594" y2="1.24429" gradientUnits="userSpaceOnUse">
                        <stop offset="0.222951" stopColor="#3A40FF" />
                        <stop offset="0.376393" stopColor="#2D2EF2" />
                        <stop offset="1" stopColor="#2F0092" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <p>Time and Cost Savings</p>
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
              <h2 className={s.solutionsBannerHeading}><span className={s.isBlue}>60M</span> Pay Statements Distributed
              </h2>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </>
  )
};

export default EPayAdvice;
