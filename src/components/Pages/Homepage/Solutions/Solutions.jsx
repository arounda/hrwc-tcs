import Image from 'next/image';
import Link from 'next/link';
import s from './solutions.module.scss';

import solutions1 from '@/assets/Homepage/solutions1.png';
import solutions2 from '@/assets/Homepage/solutions2.png';
import solutions3 from '@/assets/Homepage/solutions3.png';
import solutions4 from '@/assets/Homepage/solutions4.png';
import solutions5 from '@/assets/Homepage/solutions5.png';
import { solutionsUrls } from '@/constants/solutionsConst';
import { solutionsTitles } from '@/constants/solutionsConst';

const EverifyCard = () => {
  return (
    <Link
      href={solutionsUrls[ 'e-verify' ]}
      className={`
    ${s.soluitonLink}
    ${s.isGradient}
  `}
    >
      <div className={s.soluitonLinkMain}>
        <div className={s.soluitonLinkHeaderWrapper}>
          <h3 className={s.soluitonLinkHeader}>
            {solutionsTitles[ 'e-verify' ]}
          </h3>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={s.soluitonLinkParagraph}>
          Simplify your I-9 process and ensure compliance with HRWC`s I-9 Management Solution. Our platform handles everything from collection to storage, reducing paperwork and errors.
        </p>
      </div>

      <div className={s.soluitonLinkImageWrapper}>
        <Image
          className={s.soluitonLinkImage}
          src={solutions4}
          alt=''
        />
      </div>
    </Link>
  )
};

const TaxWFormsCard = () => {
  return (
    <Link
      href={solutionsUrls[ 'tax-w-forms' ]}
      className={`
    ${s.soluitonLink}
    ${s.isLightBlue}
  `}
    >
      <div className={s.soluitonLinkMain}>
        <div className={s.soluitonLinkHeaderWrapper}>
          <h3 className={s.soluitonLinkHeader}>
            {solutionsTitles[ 'tax-w-forms' ]}
          </h3>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={s.soluitonLinkParagraph}>
          Streamline the collection of tax withholding forms for federal, state, and local jurisdictions, simplifying your new hire onboarding process.
        </p>
      </div>

      <div className={s.soluitonLinkImageWrapper}>
        <Image
          className={s.soluitonLinkImage}
          src={solutions3}
          alt=''
        />
      </div>
    </Link>
  )
};

const EOnboardingCard = () => {
  return (
    <Link
      href={solutionsUrls[ 'e-onboarding' ]}
      className={`
    ${s.soluitonLink}
    ${s.isDark}
  `}
    >
      <div className={s.soluitonLinkMain}>
        <div className={s.soluitonLinkHeaderWrapper}>
          <h3 className={s.soluitonLinkHeader}>
            {solutionsTitles[ 'e-onboarding' ]}
          </h3>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={s.soluitonLinkParagraph}>
          Transform onboarding with HRWC’s digital solution for paperless, remote setup with smart forms, approvals, and validation.
        </p>
      </div>

      <div className={s.soluitonLinkImageWrapper}>
        <Image
          className={s.soluitonLinkImage}
          src={solutions1}
          alt=''
        />
      </div>
    </Link>
  );
};

const EPayAdviceCard = () => {
  return (
    <Link
      href={solutionsUrls[ 'e-pay-advice' ]}
      className={`${s.soluitonLink} ${s.isLightBlue}`}
    >
      <div className={s.soluitonLinkMain}>
        <div className={s.soluitonLinkHeaderWrapper}>
          <h3 className={s.soluitonLinkHeader}>
            {solutionsTitles[ 'e-pay-advice' ]}
          </h3>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={s.soluitonLinkParagraph}>
          Switch to HRWC`s Electronic Pay Solution for secure, digital pay statements accessible anytime, anywhere.
        </p>
      </div>

      <div className={s.soluitonLinkImageWrapper}>
        <Image
          className={s.soluitonLinkImage}
          src={solutions5}
          alt=''
        />
      </div>
    </Link>
  );
};

const TaxCServicesCard = () => {
  return (
    <Link
      href={solutionsUrls[ 'tax-c-services' ]}
      className={`
      ${s.soluitonLink}
      ${s.isDarkBlue}
    `}
    >
      <div className={s.soluitonLinkMain}>
        <div className={s.soluitonLinkHeaderWrapper}>
          <h3 className={s.soluitonLinkHeader}>
            {solutionsTitles[ 'tax-c-services' ]}
            {/* Tax Credit Management */}
          </h3>

          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 20L20.5 4M20.5 4L4.5 4M20.5 4L20.5 20"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className={s.soluitonLinkParagraph}>
          Save more with HRWC`s Tax Credit Screening Solution. Our platform automates screening to identify eligible tax credits and incentives for your business.
        </p>
      </div>

      <div className={s.soluitonLinkImageWrapper}>
        <Image
          className={s.soluitonLinkImage}
          src={solutions2}
          alt=''
        />
      </div>
    </Link>
  );
};

const Solutions = () => {
  return (
    <section className='section is-padding-block'>
      <div className="container">
        <div className={s.solutions}>
          <div className={s.solutionsColumn}>
            <h2 className={`heading-h2 ${s.solutionsHeading}`}>
              Our Workforce Solutions
            </h2>

            <EverifyCard />

            <div className={`${s.hiddenOnMob} ${s.hiddenOnDesktop}`}>
              <EPayAdviceCard />
            </div>
          </div>

          <div className={s.solutionsColumn}>
            <div className={`${s.hiddenOnMob} ${s.hiddenOnDesktop}`}>
              <TaxWFormsCard />
            </div>

            <EOnboardingCard />

            <div className={s.hiddenOnTablet}>
              <TaxWFormsCard />
            </div>

            <div className={s.hiddenOnDesktop}>
              <TaxCServicesCard />
            </div>

            <div className={`${s.hiddenOnTablet} ${s.showOnDesktop}`}>
              <EPayAdviceCard />
            </div>
          </div>

          <div
            className={`
            ${s.solutionsColumn}
            ${s.isThirdColumn}
          `}
          >
            <TaxWFormsCard />

            <TaxCServicesCard />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Solutions;
