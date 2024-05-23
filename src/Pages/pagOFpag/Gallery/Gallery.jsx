import { useEffect, useState } from "react"
import Footer from "../../../Footer"
import Navbar from "../../../Navbar"
import "../../../styles/gallery.css"
import MidGallery from "./MidGallery"
import LoadingScreen from "../../LoadingPractice/LoadingScreen"

function Gallery() {
    const [isLoading,setIsLoading] = useState(true)


    useEffect(() => {
        if (document.readyState == 'complete') {
            setTimeout(() => {
                setIsLoading(false)
            },1000)
        }

        const entries = performance.getEntriesByType("navigation");
        entries.forEach((entry) => {
          if (entry.type === "reload") {
            console.log(`${entry.name} was reloaded!`);
            if (entry.name == window.location.href) {
             setIsLoading(false)
            }
          }
        });
      },[])
      
      if (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
    return (
        <div className="mainGall">
        <Navbar/>
        <MidGallery/>
        <Footer/>
        </div>
    )
}

export default Gallery
