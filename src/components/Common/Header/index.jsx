'use client';

import { useEffect, useState } from 'react';
import s from './header.module.scss';
import { clientLoginUrl, scheduleDemo } from '@/constants/mainURLs';
import { usePathname } from 'next/navigation';
import ButtonPrimary from '../ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary';
import Burger from './Burger';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderNavigation';

const whiteHeroPages = [
  '/solution',
  '/wotc-calculator',
  '/integrations',
  '/contact-us',
  '/policies/privacy-policy',
  '/policies/terms',
];

const Header = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const [ isHeaderWhite, setIsHeaderWhite ] = useState(false);
  const pathname = usePathname();
  const isHeroWhite = !whiteHeroPages.includes(pathname);

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsHeaderWhite(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ isHeroWhite ]);

  function handleScroll() {
    if (window.scrollY < 50) {
      setIsHeaderWhite(false);
    } else {
      setIsHeaderWhite(true);
    }
  }

  function handleMenuOpen(isOpen) {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    setIsMenuOpen(isOpen)
  }

  return (
    <header
      className={s.header}
      style={{
        boxShadow: `
          ${isHeaderWhite
            ? '2px 2px 20px 0px rgba(68, 102, 140, 0.07)'
            : '2px 2px 20px 0px rgba(68, 102, 140, 0)'
          }`
      }}
    >
      <div className="container">
        <div className={s.headerWrapper}>
          <HeaderLogo
            isHeaderWhite={isHeaderWhite}
            isHome={isHeroWhite}
          />

          <div className={s.headerMain}>
            <HeaderNavigation
              isMenuOpen={isMenuOpen}
              onMenuOpen={handleMenuOpen}
              isHeaderWhite={isHeaderWhite}
              isHome={isHeroWhite}
            />

            <div className={s.headerCTAs}>
              <ButtonSecondary
                text='Client Login'
                link={clientLoginUrl}
                isHeaderWhite={isHeaderWhite}
                isHome={isHeroWhite}
                isHeader={true}
                istargetBlank={true}
              />

              <ButtonPrimary
                text='Schedule Demo'
                link={scheduleDemo}
                isHeaderWhite={isHeaderWhite}
                isHome={isHeroWhite}
                isHeader={true}
                istargetBlank={true}
              />
            </div>

            <div className={s.headerBurgerWrapper}>
              <Burger
                isMenuOpen={isMenuOpen}
                onMenuOpen={handleMenuOpen}
                isHeaderWhite={isHeaderWhite}
                isHome={isHeroWhite}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={s.headerBg}
        style={{
          opacity: `${isHeaderWhite ? '1' : '0'}`,
        }}
      ></div>
    </header>
  )
};

export default Header;
