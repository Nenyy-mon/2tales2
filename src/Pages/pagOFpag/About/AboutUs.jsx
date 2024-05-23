import { useEffect, useState } from "react"
import Footer from "../../../Footer"
import Navbar from "../../../Navbar"
import MidAbout from "./MidAbout"
import LoadingScreen from "../../LoadingPractice/LoadingScreen"

function AboutUs() {
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        if (document.readyState == 'complete') {
            setTimeout(() => {
                setIsLoading(false)
            },1000)
        }
      },[])
      
      if (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
    return (
        <div>
            <Navbar/>
            <MidAbout/>
            <Footer/>
        </div>
    )
}

export default AboutUs
