import React, { useState } from "react";
import axios from "axios";
import "../style/login.css"
import { SiEpicgames } from "react-icons/si";

export const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        let { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://quiet-fortress-03621.herokuapp.com/login", userData).then((res) => {
            alert("Logged in Successfully");
            console.log(res.data.user_data._id);
            var user =  res.data.user_data;
            localStorage.setItem("userData", JSON.stringify(user));
        }).catch((error)=>{
            alert("Invalid Credentials. Try Again")
        })
    }
    return (
        <div className="loginContainer">
            <div className="loginBox">
                <SiEpicgames className="logo"></SiEpicgames>
                <h4>Sign in with an Epic Games Account</h4>
                <form action="" className="loginForm" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" className="textBox" name="email" id="email" placeholder="Email Address" onChange={handleChange} />
                    </div>
                    <div>
                        <input type="password" className="textBox" name="password" id="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="options">
                        <label className="rememberme" htmlFor="remember">
                            <span className="checkbox">
                                <input type="checkbox" className="checked" />
                            </span>
                            Remember me</label>
                        <span className="forgotPass">Forgot Your Password</span>
                    </div>
                    <input className="loginbtn" type="submit" value="Login Now"/>
                    <div className="privacy">Privacy Policy</div>
                </form>
                <div className="dontHaveAcnt">Don't have an Epic Games Account? <span className="under">Sign up</span></div>
                <div className="dontHaveAcnt">Back to <span className="under">all sign up options</span></div>
            </div>
        </div>
    )
}