'use client';

import { team } from '@/constants/team';
import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './team.module.scss';
import { Pagination } from 'swiper/modules';

import 'swiper/css/pagination';
import NavButtons from '@/components/Common/SliderNavButtons';

const Team = () => {
  const swiperRef = useRef();

  return (
    <section className='section is-padding-block'>
      <div className="container">
        <div className={s.teamWrapper}>
          <div className={s.teamTop}>
            <div>
              <h2 className="heading-h2">
                Meet our team
              </h2>

              <p className={`text ${s.teamSubheading}`}>
                Hear from our clients about their experiences working with us. Discover how our solutions have made a positive impact and helped businesses achieve their goals.
              </p>
            </div>

            <div className={s.teamNavDesktopWrapper}>
              <NavButtons swiperRef={swiperRef} />
            </div>
          </div>

          <div className={s.teamMain}>
            <Swiper
              className={s.teamCards}
              slidesPerView={1}
              spaceBetween={16}
              pagination={{
                clickable: true,
                el: '.teamPagination',
              }}
              modules={[ Pagination ]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1440: {
                  slidesPerView: 3,
                }
              }}
            >
              {team.map(item => (
                <SwiperSlide
                  className={s.teamCard}
                  key={item.id}
                >
                  <div className={s.teamCardImageWrapper}>
                    <Image
                      src={item.img}
                      alt=''
                      className={s.teamCardImage}
                      priority
                    />
                  </div>

                  <div className={s.teamCardCreds}>
                    <h3 className={s.teamCardName}>
                      {item.name}
                    </h3>

                    <p className='text'>
                      {item.role}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className={s.teamNavMobileWrapper}>
              <div className='teamPagination'></div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
};

export default Team;
