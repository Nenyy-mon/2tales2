import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import bluLogo from "../../../assets/bluelogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react"
import {faCaretRight} from '@fortawesome/free-solid-svg-icons'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
function MidGallery() {
    const [display, setDisplay] = useState('none')
    const [imageBg, setImageBg] = useState()
    const showImageSlide = (e) => {
        console.log(e.target.alt)
        setDisplay('flex')
        setImageBg(images[e.target.alt ])
        console.log(images[e.target.alt])
        console.log(imageBg)
    }
    const seeBefore = (e) => {
        const random = Math.floor((Math.random() * 10))
        console.log(random)
       setImageBg(images[random])
    }
    const seeNext = () => {

    }
    const images = [
        "https://2tales.rs/wp-content/uploads/2021/12/slajd_07.jpg",
        "http://localhost:5173/2tales/src/assets/images/desktop_ginger.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/pink-gin-1.jpg",
        "https://2tales.rs/wp-content/uploads/2021/12/coffee-gin-1.jpg",
        "http://localhost:5173/2tales/src/assets/images/desktop_coffee.jpg",

        "https://2tales.rs/wp-content/uploads/2021/12/slajd_08.jpg",
        "http://localhost:5173/2tales/src/assets/images/dektop_pink.jpg",

        "https://2tales.rs/wp-content/uploads/2021/12/slajd_05.jpg",
        "http://localhost:5173/2tales/src/assets/images/desktop_vodka.jpg",

        "https://2tales.rs/wp-content/uploads/2021/12/london-dry-gin.jpg",
        "http://localhost:5173/2tales/src/assets/images/desktop%20london%20dry.jpg"
      
    ]
    return (
        <>
        <div className="mainPic">
            <img className="BluLogo" src={bluLogo} alt="Blue Logo" width="600px" />
        </div>
        <div className="galleryGal">
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry gutter="10px">
                    {images.map((image,i) => (

                   
                        <img 
                        src={image}
                        onClick={showImageSlide}
                        width="200px"
                        className="imag"
                        style={{width: "100%", display: "block"}}
                        key={i}
                        alt={i}
                        />
                        ))}
                </Masonry>                
            </ResponsiveMasonry>
        <div style={{display: `${display}`}} className="slides">
            <button onClick={() => setDisplay('none')} className="exit">X</button>
            <button onClick={seeBefore}><FontAwesomeIcon icon={faCaretLeft} /></button>
            <div style={{backgroundImage: `url(${imageBg})`}}  className="selectedSlide">

            </div>
            <button onClick={seeNext}><FontAwesomeIcon icon={faCaretRight} /></button>
        </div>
        </div>
        </>
    )
}

export default MidGallery
