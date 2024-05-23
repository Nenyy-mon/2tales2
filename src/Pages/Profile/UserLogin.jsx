import { NavLink } from 'react-router-dom'
import '../../styles/forms.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../LoadingPractice/LoadingScreen'
function UserLogin() {
    const [eMail, setEMail] = useState()
    const [eMailErr, setEmailErr] = useState('')
    const [password, setPassword] = useState()
    const [passwordErr, setPasswordErr] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [user,setUser] = useState({})
     const getDataForm  = async function (e)  {
        e.preventDefault()
       
           try {
            const data = JSON.stringify({ 
                eMail,
                password,
              })
            const response =  axios.post('http://localhost:3000/privateUser/login', 
            data, 
            {headers: 
            {"Content-Type" : "application/json",
            'Accept': 'application/json',
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Credentials': 'true' ,
           'Access-Control-Expose-Headers': 'jwt',
           credentials:true,}
            }
        )
        return response.then((result) => {
            setError(null)
            setUser(result)
            
            const jwt = result.data.token
            const userId = result.data.id;
            localStorage.setItem('userjwt',jwt),
            localStorage.setItem('userid', userId);
            navigate(`/2tales/profile/`, { state: { "user": user}})
        })
           
        } catch (err) {
            
             setEmailErr(err.result.data.error.eMail)
             setPasswordErr(err.result.data.error.password)
         }
     } 


    useEffect(() => {
        setEmailErr('')
    },[eMail])
     
    useEffect(() => {
        setPasswordErr('')
    },[password])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      
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
        <div className='allForm'>
        <form className='formUser' method="POST" onSubmit={(e) => getDataForm(e)}>
            <fieldset className="fieldForm">
                <legend>User Login</legend>
               
                <label className='labelUser' htmlFor="email">E-mail
                    <input className='inputUser' onChange={(e) => setEMail(e.target.value)} type="text" id="email" placeholder="E-mail" />
                    <p className="err">{eMailErr}</p>
                </label>
              
                <label className='labelUser' htmlFor="password"> Password
                    <input className='inputUser'  onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password"  />
                </label>
                {/* {(error === "Wrong password" || error === "User not found") ? <p className='error'>{error}</p> : <p className='result'>{result}</p>} */}
            </fieldset>
            <button className='formButton' type='submit'>Login</button>
        </form>
        <p>Don`t have an account? <NavLink onClick={scrollToTop} to='/2tales/signup'>sign up</NavLink></p>
        </div>
    )
}

export default UserLogin
