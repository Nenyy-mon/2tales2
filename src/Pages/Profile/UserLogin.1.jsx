import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function UserLogin() {
    const [eMail, setEMail] = useState();
    const [eMailErr, setEmailErr] = useState('');
    const [password, setPassword] = useState();
    const [passwordErr, setPasswordErr] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [user, setUser] = useState({});
    const getDataForm = async (e) => {
        e.preventDefault();

        try {
            const data = JSON.stringify({
                eMail,
                password,
            });
            let response = axios.post('/privateUser/loginMain',
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Credentials': 'true',
                        'Access-Control-Expose-Headers': 'jwt',
                        credentials: true,
                    }
                }
            );
            setError(null);
            setUser(response);
        
            const jwt = response.data.token;
            localStorage.setItem('userjwt', jwt);
            navigate(`/2tales/profile/`, { state: { "user": user } });
        }
       
    };
    try {
    }
    catch (err) {
        console.log(err, 'greska result');
   
    }
}
