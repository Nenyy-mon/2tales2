// import Footer from "./Footer"
// import Middle from "./Middle"

import { lazy, useEffect, useState} from "react"
// import LoadingScreen from "./Pages/LoadingPractice/LoadingScreen"

// import Navbar from "./Navbar"
const Footer = lazy(() => import('./Footer'))
const Middle = lazy(() => import('./Middle'))
const Navbar = lazy(() => import('./Navbar'))



function MainPage() {


    // const [isLoading,setIsLoading] = useState(true)


    // useEffect(() => {
    //     if (document.readyState == 'complete') {
    //       setIsLoading(false)
    //     }
    //   },[])

      // if (isLoading) {
      //   return (
      //     <LoadingScreen/>
      //   )
      // }
    return (
        <div className="mainPage">
        <Navbar />
        <Middle />
        <Footer />
        
        </div>
    )
} 

export default MainPage
