import React, { useState } from "react";
import axios from "axios";
import "../style/login.css"
import { SiEpicgames } from "react-icons/si";

export const Login = () => {
    const [userData, setUserData] = useState("");
    const handleChange = (e) => {
        setUserData(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/users", userData).then((res) => {
            alert("Logged in Successfully");

        })
    }
    return (
        <div className="loginContainer">
            <div className="loginBox">
                <SiEpicgames className="logo"></SiEpicgames>
                <h4>Sign in with an Epic Games Account</h4>
                <form action="" className="loginForm">
                    <div>
                        <input type="text" className="textBox" name="email" id="email" placeholder="Email Address" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div>
                        <input type="password" className="textBox" name="password" id="password" placeholder="Password" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div className="options">
                        <label className="rememberme" htmlFor="remember">
                            <span className="checkbox">
                                <input type="checkbox" className="checked" />
                            </span>
                            Remember me</label>
                        <span className="forgotPass">Forgot Your Password</span>
                    </div>
                    <button className="loginbtn" type="submit" onSubmit={(e) => { handleSubmit(e) }}>LOG IN NOW</button>
                    <div className="privacy">Privacy Policy</div>
                </form>
                <div className="dontHaveAcnt">Don't have an Epic Games Account? <span className="under">Sign up</span></div>
                <div className="dontHaveAcnt">Back to <span className="under">all sign up options</span></div>
            </div>
        </div>
    )
}