import React from 'react'
import './register.css'
import {
    Link
  } from "react-router-dom";
function Register() {
    return (
        <div>
            <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Friend<span className="logo2">Zone</span> </h3>
                    <span className="loginDec">Connect with friends and the world around you on FriendZone.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="text" className="loginInput" placeholder="Name" />
                        <input type="text" className="loginInput" placeholder="Email" />
                        <input type="password"  className="loginInput" placeholder="Password" />
                        <input type="password"  className="loginInput" placeholder="Confirm Password" />
                        <button className="loginButton">Sign Up</button>
                       <Link to="/login" > <button className="registerNew">Log In</button></Link>                  
                       
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Register
