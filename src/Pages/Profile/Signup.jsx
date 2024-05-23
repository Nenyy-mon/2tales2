/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom'

import '../../styles/forms.css'
import { useEffect, useRef, useState } from 'react'
import axios from '../../api/axios'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../LoadingPractice/LoadingScreen'
function SignupUser() {
    const userRef = useRef()
    const errorRef = useRef()
    const [loggedIn, setLoggedIn] = useState(false)
    function onLoggedInChange() {
        console.log(loggedIn)
    }




    //useState
     const [userName,setUserName] = useState('')
     const [userNameErr,setUserNameErr] = useState('')

    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)


    const [firstName, setFirstName] = useState('')
    const [firstNameErr, setFirstNameErr] = useState('')

    const [lastName, setLastName] = useState('')
    const [lastNameErr, setLastNameErr] = useState('')
    
    const [eMail, setEMail] = useState('')
    const [eMailErr, setEMailErr] = useState('')

    const [phoneNumber, setPhoneNumber] = useState()
    const [phoneNumberErr, setPhoneNumberErr] = useState()

    const [streetName, setStreetName] = useState('')
    const [streetNameErr, setStreetNameErr] = useState('')

    const [streetNumber, setStreetNumber] = useState()
    const [streetNumberErr, setStreetNumberErr] = useState()

    const [postalCode, setPostalCode] = useState()
    const [postalCodeErr, setPostalCodeErr] = useState()

    const [city, setCity] = useState('')
    const [cityErr, setCityErr] = useState('')
    
    const [password, setPassword] = useState('')
    const [passwordErr, setPasswordErr] = useState('')
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    
    const [matchPasswrod, setMatchPassword] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errorMsg, setErrorMsg] = useState('')
    const [success, setSuccess]  = useState(false)
    const [emailRed, setEmailRed] = useState('')



    const navigate = useNavigate();

    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

    const PWD_REGEX  = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%.]).{8,24}$/;

    const getDataForm = async  (e)  => {
        e.preventDefault()
        try {
            const data = {
                userName,
                firstName,
                lastName,
                eMail,
                phoneNumber,
                streetName,
                streetNumber,
                postalCode,
                city,
                password}
            const response = await axios.post(`http://localhost:3000/privateUser/signup`, JSON.stringify(data), 
            {
             headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': 'true' ,
                'Access-Control-Expose-Headers': 'jwt',
                credentials:true,
             },
            })
             .then(result => { 
                setLoggedIn(true)
                onLoggedInChange()    
                     navigate('/2tales/loginMain')
                })
               
            .catch(err =>{ 
                if (err.response && err.response.data && err.response.data.errors) {
                    console.log(err.response.data.errors);
                } else {
                    console.log('An error occurred:', err);
                }            
                setEMailErr(err.response.data.errors.eMail)
                setPasswordErr(err.response.data.errors.password)
                setFirstNameErr(err.response.data.errors.firstName)
                setLastNameErr(err.response.data.errors.lastName)
                setPhoneNumberErr(err.response.data.errors.phoneNumber)
                setStreetNameErr(err.response.data.errors.streetName)
                setStreetNumberErr(err.response.data.errors.streetNumber)
                setPostalCodeErr(err.response.data.errors.postalCode)
                setCityErr(err.response.data.errors.city)
            setEmailRed('invalid')
    
            })
        }
        catch (err) {
            console.log(err)
        }
       
    }



   

    
    useEffect(() => {
        const result = USER_REGEX.test(userName);
      
        setValidName(result) 
    },[userName])


    useEffect(()=> {
        setErrorMsg('')
        setEMailErr('')
        setEmailRed('valid')
    },[eMail])


    useEffect(()=> {
        setCityErr('')
    },[city])

    useEffect(()=> {
        setFirstNameErr('')
    },[firstName])
    useEffect(()=> {
        setLastNameErr('')
    },[lastName])
    useEffect(()=> {
        setPhoneNumberErr('')
    },[phoneNumber])
    useEffect(()=> {
        setPostalCodeErr('')
    },[postalCode])

    useEffect(()=> {
        setStreetNameErr('')
    },[streetName])
    useEffect(()=> {
        setStreetNumberErr('')
    },[streetNumber])


    useEffect(()=> {
        const result = PWD_REGEX.test(password);
      
        setValidPassword(result)
        const match = password === matchPasswrod
        setValidMatch(match)
    },[password, matchPasswrod])
    

    useEffect(() => {
        setErrorMsg('')
    }, [userName, password, matchPasswrod])

  
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


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
      } else {

     
    return (
        <div className='allForm'>
        <form className="formUser" method="POST" onSubmit={(e) => {getDataForm(e)}} >
            <fieldset className="fieldForm">
                <legend>User Sign up</legend>
                <label className='labelUser' htmlFor="username">Username 
                <input    
                
                onChange={(e) => setUserName(e.target.value) } 
                type="text"
                required
                ref={userRef}
                id='username'
                className={validName ? 'valid inputUser' : 'invalid inputUser'}
                autoComplete='off'
                aria-invalid={validName ? 'false' : 'true'}
                onFocus={()=> setUserFocus(true)}
                onBlur={()=> setUserFocus(false)}
                aria-describedby='uidnote'
                 />
                 <p className='err'>{userNameErr}</p>
                 <p  id='uidnote' className={userFocus && userName && !validName ? 'instructions' : 'offscreen'}>
                    4 to 24 charachters <br />
                    Must begin with a letter. <br />
                    Letters, numbers, underscores, hyphens allowed.
                 </p>
                </label>
                <label className='labelUser' htmlFor="firstName"> First name
                    <input 
                    className='inputUser' 
                    onChange={(e) => setFirstName(e.target.value) } 
                    type="text" 
                    id="firstName"  
                    placeholder="First Name" />
                 <p className='err'>{firstNameErr}</p>
                
                </label>

                <label className='labelUser' htmlFor="lastName"> Last Name
                    <input 
                    className='inputUser' 
                    onChange={(e) => setLastName(e.target.value) } 
                    type="text" 
                    id="lastName" 
                    placeholder="Last Name" />
                 <p className='err'>{lastNameErr}</p>

                </label>
                <label className='labelUser' htmlFor="email">E-mail
                    <input 
                    className='inputUser' 
                    onChange={(e) => setEMail(e.target.value) } 
                    type="text" 
                    id="email" 
                    placeholder="E-mail" />
                 <p className='err'>{eMailErr}</p>

                </label>
                <label className='labelUser' htmlFor="phone"> Phone
                    <input 
                    className='inputUser' 
                    onChange={(e) => setPhoneNumber(e.target.value) } 
                    type="text" 
                    id="phone" 
                    placeholder="Phone Number" />
                 <p className='err'>{phoneNumberErr}</p>

                </label>
                <label className='labelUser' htmlFor="streetName"> Street name
                    <input
                    className='inputUser'  
                    onChange={(e) => setStreetName(e.target.value) } 
                    type="text" 
                    id="streetName" 
                    placeholder="Street Name" />
                 <p className='err'>{streetNameErr}</p>

                </label> 
                <label className='labelUser' htmlFor="streetNumber"> Street number
                    <input 
                    className='inputUser' 
                    onChange={(e) => setStreetNumber(e.target.value) } 
                    type="text" 
                    id="streetNumber" 
                    placeholder="House Number" />
                 <p className='err'>{streetNumberErr}</p>

                </label>
                <label className='labelUser' htmlFor="postalCode"> Postal code
                    <input
                    className='inputUser'  
                    onChange={(e) => setPostalCode(e.target.value) } 
                    type="number" 
                    id="postalCode" 
                    placeholder="Postal Code" />
                 <p className='err'>{postalCodeErr}</p>

                </label>
                <label className='labelUser' htmlFor="city"> City
                    <input 
                    className='inputUser' 
                    onChange={(e) => setCity(e.target.value) } 
                    type="text" 
                    id="city"
                    placeholder="City" />
                 <p className='err'>{cityErr}</p>

                </label>
                <label className='labelUser' htmlFor="password"> Password
                    <input
                    className='inputUser' 
                    onChange={(e) => setPassword((e.target.value).toString('hex'))} 
                    required
                    aria-invalid={validPassword ? 'false' : 'true'}
                    aria-describedby='pwdnote'
                    type="password" 
                    id="password" 
                    placeholder="Password" 
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}  />
                 <p className='err'>{passwordErr}</p>

                      <p  id='pwdnote' className={passwordFocus && !validPassword ? 'instructions' : 'offscreen'}>
                    8 to 24 charachters <br />
                    Must include uppercase and lowercase letters, a number and a special character <br />
                    Allowed characters: <br /> <span>`</span><span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span> <span aria-label='dot'>.</span> <span>`</span><br />
                 </p> 
                </label>
                <label className='labelUser' htmlFor="repPassword"> Repeat password
                    <input
                    className='inputUser'  
                    onChange={(e) => setMatchPassword((e.target.value).toString('hex'))} 
                    required
                    type="password" 
                    id="repPassword" 
                    placeholder="Repeat password"
        
                    aria-invalid={validMatch ? 'false' : 'true'} 
                    aria-describedby='pwdmatchnote'
                    onFocus={()=> setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}/>
                    <p  id='pwdmatchnote' className={matchFocus && !validMatch ? 'instructions' : 'offscreen'}>
                     Must match the first password input field.
                 </p> 
                </label>
              
            </fieldset>
            <button className='formButton' type='submit' disabled={!validName || !validPassword || !validMatch ? true : false} >Sign up</button>
        </form>
        <p className='account'>Already have an account? <NavLink  onClick={scrollToTop}  to='/2tales/loginMain'>login</NavLink></p>
        </div>
    )
}
}

export default SignupUser
