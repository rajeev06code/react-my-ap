import React from 'react'
import './login.css'
import {
    Link
  } from "react-router-dom";
function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friend<span className="logo2">Zone</span> </h3>
                    <span className="loginDec">Connect with friends and the world around you on FriendZone.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Email" />
                        <input type="password"  className="loginInput" placeholder="Password" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <Link to="/register" > <button className="registerNew">Create a new account</button></Link>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
