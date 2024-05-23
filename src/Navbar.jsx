import { Outlet, NavLink } from "react-router-dom";
import './styles/navbar.css'
import logo from "./assets/Asset 1.png"
import { useEffect, useState } from 'react';
import LanguageSelector from "./components/LanguageSelector";
import { useTranslation } from "react-i18next";
function Navbar() {
    const [classN, setClassN] = useState('nav-bar');
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { t }  = useTranslation()
  const handleBurgerClick = () => {
    setMenuOpen(!isMenuOpen);
  };


    
  
    useEffect(() => {
        console.log(scrollY)
  
          const onScrollit = () => {
            if (window.scrollY > 50) {
              setClassN('scrolled');
            } else {
              setClassN('nav-bar');
            }
          };
          
          document.addEventListener('scroll', onScrollit);
          // Cleanup the event listener when the component unmounts
          return () => {
            document.removeEventListener('scroll', onScrollit);
          };
        }, []);
  
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
    return (
        <nav className={classN}>
            <div id="burger-menu"  className={isMenuOpen ? 'close' : ''} onClick={handleBurgerClick} >
                <span></span>
            </div>
            <div className="navbar"  >
                <div className="logo-navbar">
                <NavLink onClick={scrollToTop} to='/2tales/'>
                    <img width="150" src={logo} alt="" />
                    </NavLink>
                </div>
                <div className={!isMenuOpen ? 'closed' : 'menu'}>
                    <ul  className="menu-navbar">
                       <li onClick={scrollToTop} ><NavLink className='linked color' to="/">{t("HOME")}</NavLink></li>
                       <li onClick={scrollToTop}><NavLink className='linked color' to="/2tales/gallery">{t("GALLERY")}</NavLink></li>
                       <li onClick={scrollToTop}><NavLink className='linked color' to="/2tales/shop">{t("SHOP")}</NavLink></li>
                       <li onClick={scrollToTop}><NavLink className='linked color' to="/2tales/about">{t("ABOUT US")}</NavLink></li>
                       
                        <Outlet/>
                    </ul>
                    <div className="language-navbar">
                    <LanguageSelector/>
            </div>
                </div>
            </div>
           
            
        </nav>
    )
}

export default Navbar
