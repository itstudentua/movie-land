import { useState, useEffect, useCallback } from 'react';
import Header from './header/header';
import MenuList from './header/MenuList';
import MobileMenu from './header/MobileMenu';
import Main from './main/Main';
import HelloPage from './header/HelloPage';
import Footer from './Footer/Footer';
import { CSSTransition, SwitchTransition } from "react-transition-group";


export default function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleResize = useCallback(() => {
    const currentWidth = window.innerWidth;
    setWindowWidth(currentWidth);
    if (currentWidth > 700 && burgerMenu) {
      setBurgerMenu(false);
    }
  }, [burgerMenu]);

  const toggleBurger = () => {
    setBurgerMenu(menu => !menu);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (burgerMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Сбрасываем стиль
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [burgerMenu, handleResize]);

  const [explore, setExplore] = useState(false);

  return (
    <div className='wrapper'>
      <div className='content'>
        {
          burgerMenu && windowWidth < 700 &&
          <MobileMenu setMobileBurgerMenu={toggleBurger}>
            <MenuList className="header__menu-list mobile" />
          </MobileMenu>
        }
        {/* Mobile menu full screen */}

        <Header
          windowWidth={windowWidth}
          burgerMenu={burgerMenu}
          setHeaderBurgerMenu={toggleBurger} />
        {/* Header section */}

        <SwitchTransition>
          <CSSTransition
            key={explore ? "main" : "hello"} // Меняем ключ, чтобы блоки правильно переключались
            timeout={500} // Длительность совпадает с CSS
            classNames="slide"
            unmountOnExit
          >
            {explore ? <Main explore={explore} /> : <HelloPage setExplore={setExplore} />}
          </CSSTransition>
        </SwitchTransition>

      </div>
      <Footer />
    </div>
  )
}

