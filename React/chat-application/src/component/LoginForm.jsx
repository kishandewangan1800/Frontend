import React, { useState } from 'react'
import axios from 'axios';

function LoginForm() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('')

const handleSubmite = async (e)=>{
    e.preventDefault();
    const authObject = {'Project-ID': "2b67374c-73ad-4143-bba0-0f58852d01a9", 'User-Name': username , 'User-Secret': password }

    try{
        await axios.get('https://api.chatengine.io/chats/', { headers : authObject });
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
       

        window.location.reload();

    }catch(err){
        setError('Opps, Incorrect Credentials!')
    }
}
  return (
    <div className='wrapper'>
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmite}>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='input' placeholder='Username' required/>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='input' placeholder='Password' required/>
                <div align='center'>
                    <button type="submit" className='button'><span>Start Chatting</span></button>  
                </div>

                <div className="error">{error}</div>
            </form>
        </div>
    </div>
  )
}

export default LoginForm