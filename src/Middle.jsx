import { useEffect, useState } from "react";
import "./styles/middle.css"
import Scrolling from "./Pages/Scrolling";
import imgWave1 from './assets/waves/Ellipse 1.svg'
  import imgWave2 from './assets/waves/Ellipse 2.svg'
  import imgWave4 from './assets/waves/Rectangle 2.svg'
import { useTranslation } from "react-i18next";

function Middle() {
    // eslint-disable-next-line no-unused-vars
     const {t} = useTranslation()
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
      const elements = document.querySelector(".wav");
      if (elements) {
        elements.classList.add("useAnimate");
        setScrollY(window.scrollY);
      } 
      if(window.scrollY == 0) {
        elements.classList.remove('useAnimate')
      }
    
    const elementi = document.querySelector(".waveTwo");
    if (elementi) {
        elementi.classList.add("useAnimate1");
      setScrollY(window.scrollY);
    }
    if(window.scrollY == 0) {
      elementi.classList.remove('useAnimate1')
    }
  const elemento = document.querySelector(".waveThree");
    if (elemento) {
        elemento.classList.add("useAnimate2");
      setScrollY(window.scrollY);
    }
    if(window.scrollY == 0) {
      elemento.classList.remove('useAnimate2')
    }


    const elementsi = document.querySelector(".waveFour");
    if (elementsi) {
        elementsi.classList.add("useAnimate3");
      setScrollY(window.scrollY);
    }
    if(window.scrollY == 0) {
      elementsi.classList.remove('useAnimate3')
    }
}




    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);




    return (
        <div className="all">
        <div className="bottle-image">

            <div className="text"><p>
            {t("2TALES GIN IS HANDCRAFTED IN A SMALL BATCHES. DISTILLED IN A TRADITIONAL COPPER POT STILL. WE USE JUNIPER BERRIES AND 2 OTHER INGREDIENTS FROM THE SERBIAN MOUNTAINS, WHILE WE TAKE THE OTHER SIX BOTANICALS FROM ALL OVER THE WORLD.")}
            </p>
           
            </div>  
            <div className="svgs">
                <img onScroll={handleScroll}  className="waveOne wav" src={imgWave1} alt="wave" />
                <img onScroll={handleScroll}  className="waveTwo wav" src={imgWave2} alt="wave" />
                <img onScroll={handleScroll}  className="waveThree wav" src={imgWave1} alt="wave" />
                <img  onScroll={handleScroll} className="waveFour wav" src={imgWave4} alt="wave" />
             </div>
        </div>
        <Scrolling/>
        </div>
    )
}



export default Middle
