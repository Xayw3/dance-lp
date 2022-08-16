/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import HeroContent from '../HeroContent/HeroContent';
import MobileMenu from '../MobileMenu/MobileMenu';
import NavBar from '../NavBar/NavBar';
import './hero-screen.scss';

const HeroScreen = () => {
  const screenSize = window.innerWidth;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="hero-screen">
      <div className="container">
        <div className="header">
          <a href="/" className="logo">
            dance
          </a>
          {
            screenSize > 767 ? (
              <>
                <NavBar />
              </>
            ) : <button onClick={() => setShowMenu(true)} className="menu-opener" />
          }
          {
            showMenu === true ? <MobileMenu handleClick={() => setShowMenu(false)} /> : null
          }
        </div>
        <HeroContent />
      </div>
    </header>
  );
};

export default HeroScreen;
