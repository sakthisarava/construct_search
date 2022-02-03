import React from 'react';
import AuthApi from '../../Auth/Auth';
import {useContext} from 'react';
import './login.css'
import Cookies from 'js-cookie';

export default function Login() {
    const Auth = useContext(AuthApi)
    const handleClick = () =>{
        Auth.setAuth(true)
        Cookies.set("user","loginTrue")
    }

    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className="loginForm" >
                <label>Email</label>
                <input type="email" className='loginInput' placeholder='Enter your email...'/>
                <label>Password</label>
                <input type="password" className='loginInput' placeholder='Enter your password...'/>
                <button className="loginButton" type='submit' onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}
