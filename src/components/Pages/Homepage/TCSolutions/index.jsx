import s from './tcsolutions.module.scss';
import map1 from '@/assets/Homepage/TCSolution/sol-map-375.png';
import map2 from '@/assets/Homepage/TCSolution/sol-map-768.png';
import map3 from '@/assets/Homepage/TCSolution/sol-map-1024.png';
import Image from 'next/image';

const TCSolutions = () => {
  return (
    <section className="section">
      <div className="container">
        <div className={s.solutionWrapper}>
          <div className={s.solutionTop}>
            <h2 className="heading-h2 is-centered is-white">
              Tax Credit Solutions
            </h2>
            <p className="text is-centered is-white">
              Driving Value with Expertise in Tax Credits and Compliance
            </p>
          </div>

          <div className={s.solutionImageWrapper}>
            <Image
              className={s.solutionImage}
              src={map1}
              alt=''
            />

            <Image
              className={s.solutionImage}
              src={map2}
              alt=''
            />

            <Image
              className={s.solutionImage}
              src={map3}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TCSolutions