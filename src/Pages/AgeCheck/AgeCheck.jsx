import { useState } from 'react'
import logo from '../../assets/bluelogo.png'
import '../../styles/agecheck.css'
import { useNavigate } from 'react-router-dom'
function AgeCheck() {
    const [mainAge,setMainAge] = useState('mainAge')
    const navigate = useNavigate()
    return (
        <>
        <div className={mainAge}>
            <div className="upperAge">
                <h1>Are you 18 years or older?</h1>
                <img src={logo} alt="" />
            </div>
            <div className='downAge'>
                <button
                onClick={() => {
                    navigate('/2tales/')
                }}
                className='Yes'>
                    Yes
                </button>
                <button
                onClick={() => {
                    window.location.href = "https://www.google.com";
                }}
                className='No'>
                    No
                </button>
            </div>
        </div>
        </>
    )
}

export default AgeCheck
