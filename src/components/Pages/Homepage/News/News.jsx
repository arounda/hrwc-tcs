import Image from 'next/image';
import s from './news.module.scss';
import { news } from '@/constants/news';

const News = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <h2 className="heading-h2 is-centered">
          Conferences and Events
        </h2>

        <div className={s.newsCards}>
          {news.map(item => (
            <div
              key={item.id}
              className={s.newsCard}
            >
              <div className={s.newsCardImageWrapper}>
                <Image
                  className={`${s.newsCardImage} ${s.isMob}`}
                  src={item.imageMob}
                  alt=''
                />

                <Image
                  className={`${s.newsCardImage} ${s.isTab}`}
                  src={item.imageTab}
                  alt=''
                />

                <Image
                  className={`${s.newsCardImage} ${s.isLap}`}
                  src={item.imageLap}
                  alt=''
                />

                <Image
                  className={`${s.newsCardImage} ${s.isDesk}`}
                  src={item.imageDesk}
                  alt=''
                />
              </div>

              <div className={s.newsCardMain}>
                <h3 className={s.newsCardHeading}>
                  {item.heading}
                </h3>

                <p className='text'>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
};

export default News;
