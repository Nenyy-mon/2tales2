import { NavLink, Outlet } from "react-router-dom"
import '../../styles/navshop.css'
import logo from '../../assets/apple-touch-icon.png'
import cart from '../../assets/cart.png'
import profile from '../../assets/Asset 1 (2).png'
import { useEffect, useState } from "react";
import {ShopContext} from  '../../Context/ShopContextProvider.jsx'
import { useContext } from 'react'
import { useTranslation } from "react-i18next"
import LanguageSelector from "../../components/LanguageSelector.jsx"
function NavShop({
  logout,
  setLogout,
  logoutUser,
  cartCount,
  count
}) {
    const [classN, setClassN] = useState('nav-shop')
    const [isMenuOpen, setMenuOpen] = useState(false);
    const {getTotalNum} = useContext(ShopContext)
    const {t} = useTranslation();
  
        

    const handleBurgerClick = () => {
      setMenuOpen(!isMenuOpen);
    };


   
    
    useEffect(() => {
  
          const onScrollit = () => {
            if (window.scrollY > 50) {
              setClassN('scrolledt');
            } else {
              setClassN('nav-shop');
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
        <>
         <div id="burger-menus"  className={isMenuOpen ? 'close' : ''} onClick={handleBurgerClick} >
                <span></span>
            </div>
        <div className={classN}>
            <div className="logopic">
              <NavLink to='/2tales/'>
                <img src={logo} alt="logo" width="100px" className="pic" />
              </NavLink>
            </div>
            <div className={!isMenuOpen ? 'menus' : 'links'}>
            <ul  className="menu-navbars">
                       <li onClick={scrollToTop}  ><NavLink className='linked' to='/2tales/'>{t("GO BACK")}</NavLink></li>
                       <li onClick={scrollToTop}>  <NavLink  className='linked'  to='/2tales/shop'>{t("SHOP")}</NavLink></li>
                       <li onClick={scrollToTop} > <NavLink className='colored cartes' to='/2tales/cart'><img src={cart} alt="cart" className="cart" width="30px" /><p className="carted">{localStorage.getItem('userjwt') ? cartCount : 0}</p></NavLink></li>
                       <li onClick={scrollToTop} > <NavLink className='colored profile' to='/2tales/profile'><img src={profile} alt="profile" className="profile" width="30px" /></NavLink></li>                  
                       <li onClick={() =>{ 
                          logoutUser()
                        }} className="logout" >{logout}</li>
                        <Outlet/>
                    </ul>
               <LanguageSelector/>
            </div>
            
        </div>
        </>
    )
}

export default NavShop
