import Footer from "../../Footer.jsx"
import NavShop from "./NavShop.jsx"
import MidShop from "../Shop/MidShop.jsx"
import "../../styles/midshop.css"
import BackgroundImage from "./BackgroundImage.jsx"
import {  useEffect, useState } from "react"
import axios from "../../api/axios.js"
import LoadingScreen from "../LoadingPractice/LoadingScreen.jsx"
function Shop() {
    const [cartCount, setCartCount] = useState(0)


    useEffect(() => {
        
     (async ()=>{
        try {
            const response = await axios.get('/shop', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            if (response.status == 304) {
                 setIsLoading(false)
                return;
            } else {
                return response 
            }
        } catch (err) {
            //
        }
    })() 
    },[])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        
   const entries = performance.getEntriesByType("navigation");
   entries.forEach((entry) => {
     if (entry.type === "reload") {
       console.log(`${entry.name} was reloaded!`);
       if (entry.name == window.location.href) {
        setIsLoading(false)
       }
     }
   });
        if (document.readyState == 'complete') {
                setIsLoading(false)
        }
      },[]);
      
     while (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
   return (
        <div className="main-shop">
            <NavShop cartCount={cartCount}/>
            <BackgroundImage/>
            <MidShop setCartCount={setCartCount}  />
            <Footer/>
        </div>
    )
}

export default Shop
