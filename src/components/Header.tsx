"use client"

import { useState } from 'react';
import { NAV_LINKS } from '@/src/constants/navigation'
import Burger from './ui/Burger'
import Logo from './ui/Logo'
import MobileMenu  from './ui/MobileMenu';
import Navigation from './ui/Navigation';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  return (
    <header className='absolute w-full top-8 md:top-16'>
      <div className='container flex justify-between items-center'>
        <Logo className="z-50 w-36 md:w-50" />

        <Navigation className="hidden lg:flex gap-8 text-white"/>

        <div className="lg:hidden">
          <Burger isOpen={isMenuOpen} onClick={toggleMenu} />
          <MobileMenu onClose={toggleMenu} isOpen={isMenuOpen} links={NAV_LINKS} />
        </div>
      </div>
    </header>
  )
}

export default Header