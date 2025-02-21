'use client';

import { testimonials } from '@/constants/testimonials';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './testimonials.module.scss';
import NavButtons from '@/components/Common/SliderNavButtons';

const Testimonials = () => {
  const swiperRef = useRef();

  return (
    <section className='section'>
      <div className="container">
        <div className={s.testimonialsWrapper}>
          <div className={s.testimonialsTop}>
            <div>
              <h2 className="heading-h2">
                What our customers say
              </h2>

              <p className={`text ${s.testimonialsSubheading}`}>
                Hear from our clients about their experiences working with us. Discover how our solutions have made a positive impact and helped businesses achieve their goals.
              </p>
            </div>


            {/* <div className={s.testimonialsNavDesktopWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div> */}
          </div>

          <div className={s.testimonialsMain}>
            <div className={s.testimonialsCards}>
              {testimonials.map(item => (
                <div key={item.id} className={s.testimonialsCard}>
                  <div>
                    <div className={s.testimonialsCardCreds}>
                      <h3 className={s.testimonialsCardName}>
                        {item.person_name}
                      </h3>
                      <p className={s.testimonialsCardIndustry}>
                        {item.person_role}
                      </p>
                    </div>

                    <p className='text'>
                      {item.text}
                    </p>
                  </div>

                  <svg width="109" height="20" viewBox="0 0 109 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.73915 2.34164C9.97864 1.60459 11.0214 1.60459 11.2608 2.34164L12.5655 6.35704C12.6726 6.68666 12.9798 6.90983 13.3264 6.90983H17.5484C18.3234 6.90983 18.6456 7.90152 18.0186 8.35704L14.6029 10.8387C14.3226 11.0424 14.2052 11.4035 14.3123 11.7331L15.617 15.7485C15.8565 16.4856 15.0129 17.0985 14.3859 16.643L10.9702 14.1613C10.6898 13.9576 10.3102 13.9576 10.0298 14.1613L6.61407 16.643C5.98709 17.0985 5.14351 16.4856 5.38299 15.7485L6.68768 11.7331C6.79478 11.4035 6.67745 11.0424 6.39706 10.8387L2.98135 8.35704C2.35438 7.90152 2.6766 6.90983 3.45158 6.90983H7.67363C8.02021 6.90983 8.32737 6.68666 8.43447 6.35704L9.73915 2.34164Z" fill="#2D34FF" />
                    <path d="M31.7392 2.34164C31.9786 1.60459 33.0214 1.60459 33.2608 2.34164L34.5655 6.35704C34.6726 6.68666 34.9798 6.90983 35.3264 6.90983H39.5484C40.3234 6.90983 40.6456 7.90152 40.0186 8.35704L36.6029 10.8387C36.3226 11.0424 36.2052 11.4035 36.3123 11.7331L37.617 15.7485C37.8565 16.4856 37.0129 17.0985 36.3859 16.643L32.9702 14.1613C32.6898 13.9576 32.3102 13.9576 32.0298 14.1613L28.6141 16.643C27.9871 17.0985 27.1435 16.4856 27.383 15.7485L28.6877 11.7331C28.7948 11.4035 28.6774 11.0424 28.3971 10.8387L24.9814 8.35704C24.3544 7.90152 24.6766 6.90983 25.4516 6.90983H29.6736C30.0202 6.90983 30.3274 6.68666 30.4345 6.35704L31.7392 2.34164Z" fill="#2D34FF" />
                    <path d="M53.7392 2.34164C53.9786 1.60459 55.0214 1.60459 55.2608 2.34164L56.5655 6.35704C56.6726 6.68666 56.9798 6.90983 57.3264 6.90983H61.5484C62.3234 6.90983 62.6456 7.90152 62.0186 8.35704L58.6029 10.8387C58.3226 11.0424 58.2052 11.4035 58.3123 11.7331L59.617 15.7485C59.8565 16.4856 59.0129 17.0985 58.3859 16.643L54.9702 14.1613C54.6898 13.9576 54.3102 13.9576 54.0298 14.1613L50.6141 16.643C49.9871 17.0985 49.1435 16.4856 49.383 15.7485L50.6877 11.7331C50.7948 11.4035 50.6774 11.0424 50.3971 10.8387L46.9814 8.35704C46.3544 7.90152 46.6766 6.90983 47.4516 6.90983H51.6736C52.0202 6.90983 52.3274 6.68666 52.4345 6.35704L53.7392 2.34164Z" fill="#2D34FF" />
                    <path d="M75.7392 2.34164C75.9786 1.60459 77.0214 1.60459 77.2608 2.34164L78.5655 6.35704C78.6726 6.68666 78.9798 6.90983 79.3264 6.90983H83.5484C84.3234 6.90983 84.6456 7.90152 84.0186 8.35704L80.6029 10.8387C80.3226 11.0424 80.2052 11.4035 80.3123 11.7331L81.617 15.7485C81.8565 16.4856 81.0129 17.0985 80.3859 16.643L76.9702 14.1613C76.6898 13.9576 76.3102 13.9576 76.0298 14.1613L72.6141 16.643C71.9871 17.0985 71.1435 16.4856 71.383 15.7485L72.6877 11.7331C72.7948 11.4035 72.6774 11.0424 72.3971 10.8387L68.9814 8.35704C68.3544 7.90152 68.6766 6.90983 69.4516 6.90983H73.6736C74.0202 6.90983 74.3274 6.68666 74.4345 6.35704L75.7392 2.34164Z" fill="#2D34FF" />
                    <path d="M97.7392 2.34164C97.9786 1.60459 99.0214 1.60459 99.2608 2.34164L100.566 6.35704C100.673 6.68666 100.98 6.90983 101.326 6.90983H105.548C106.323 6.90983 106.646 7.90152 106.019 8.35704L102.603 10.8387C102.323 11.0424 102.205 11.4035 102.312 11.7331L103.617 15.7485C103.856 16.4856 103.013 17.0985 102.386 16.643L98.9702 14.1613C98.6898 13.9576 98.3102 13.9576 98.0298 14.1613L94.6141 16.643C93.9871 17.0985 93.1435 16.4856 93.383 15.7485L94.6877 11.7331C94.7948 11.4035 94.6774 11.0424 94.3971 10.8387L90.9814 8.35704C90.3544 7.90152 90.6766 6.90983 91.4516 6.90983H95.6736C96.0202 6.90983 96.3274 6.68666 96.4345 6.35704L97.7392 2.34164Z" fill="#2D34FF" />
                  </svg>
                </div>
              ))}
            </div>

            {/* <Swiper
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                }
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              className={s.testimonialsCards}
            >
              {testimonials.map(item => (
                <SwiperSlide
                  className={s.testimonialsCard}
                  key={item.id}
                >
                  <div className={s.testimonialsCardPersonInfo}>
                    <Image
                      src={item.person_avatar}
                      alt=''
                      className={s.testimonialsCardAvatar}
                    />

                    <div className={s.testimonialsCardCreds}>
                      <h3 className={s.testimonialsCardName}>
                        {item.person_name}
                      </h3>
                      <p className={s.testimonialsCardRole}>
                        {item.person_role}
                      </p>
                    </div>
                  </div>

                  <p className='text'>
                    {item.text}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper> */}

            {/* <div className={s.testimonialsNavMobileWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div> */}
          </div>
        </div>
      </div>
    </section >
  )
};

export default Testimonials;
