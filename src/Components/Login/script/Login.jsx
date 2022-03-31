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
                <h3>Sign in with an Epic Games Account</h3>
                <form action="" className="loginForm">
                    <div>
                        <input type="text" className="textBox" name="email" id="email" placeholder="Email Address" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div>
                        <input type="text" className="textBox" name="password" id="password" placeholder="Password" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div className="options">
                        <label className="rememberme" htmlFor="remember">
                            <span className="checkbox">
                                <input type="checkbox" className="checked" />
                            </span>
                            Remember me</label>
                        <a href="">Forgot Your Password</a>
                    </div>
                    <button className="loginbtn" type="submit" onSubmit={(e) => { handleSubmit(e) }}>LOG IN NOW</button>
                    <div className="privacy">Privacy Policy</div>
                </form>
                <div className="dontHaveAcnt">Don't have an Epic Games Account? <a>Sign up</a></div>
                <div className="dontHaveAcnt">Back to <u><a href="">all sign up options</a></u></div>
            </div>
        </div>
    )
}