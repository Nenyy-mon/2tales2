import {  useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"
import Footer from "../../Footer"
import BgImage from "./BgImage"
import '../../styles/profile.css'
import axios from "../../api/axios"
import LoadingScreen from "../LoadingPractice/LoadingScreen"
import NavProfile from "./NavProfile"
import { useTranslation } from "react-i18next"







function Profile() {
    const [userLogged, setUserLogged] =  useState('Profile')
    const [userActive, setUserActive] = useState(false)
    const [logout,setLogout]  = useState('')
    const [count,setCount] = useState(0)
    const navigate = useNavigate()
    const {t} = useTranslation()
    function logoutUser() {
        localStorage.clear()
        setUserLogged(`${t("PROFILE")}`)
        setLogout('')
        setUserActive(false)
        navigate('/2tales/loginMain')
      }
      

      
    useEffect(()=> {
        const entries = performance.getEntriesByType("navigation");
        entries.forEach((entry) => {
          if (entry.type === "reload") {
            console.log(`${entry.name} was reloaded!`);
            if (entry.name == window.location.href) {
             setIsLoading(false)
            }
          }
        });


(async() => {
    try {
        const id = localStorage.getItem('userid')
        await axios.get(`/profile/${id}`, 
        { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }})
        .then(
            (response) => {
                const itemSet = (localStorage.getItem('userjwt') !== null)
            if(itemSet) {
                setUserActive(true)
                setUserLogged(`${t("HELLO")}, ` + response.data.user.firstName)
                setLogout(`${t("LOGOUT")}`)
                let sumCount = 0;
                response.data.user.cart.map((el) => {
                    sumCount += el.count
                    setCount(sumCount)
                })
            } else {
                    navigate('/2tales/loginMain')
                    setUserActive(false)
                    setUserLogged(`${t("PROFILE")}`)
            }
            },
            (reason) => {
                console.error(reason,'reasonsssssss')
            })
       
    } catch (err) {
        console.log(err)
    }
           
            })()
    },[count])

    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        if (document.readyState == 'complete') {
                setIsLoading(false)
        }
      },[])
      
      if (isLoading) {
        return (
          <LoadingScreen/>
        )
      }
    return (
        <>
        <NavProfile
        logoutUser={logoutUser}
        logout={logout}
        setLogout={setLogout}
        setUserActive={setUserActive}
        count={count}
        />
        <BgImage userLogged={userLogged} />
        <Footer/>
        </>
    )
}

export default Profile
