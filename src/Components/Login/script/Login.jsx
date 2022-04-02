import React, { useState } from "react";
import { Link , Navigate ,useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/login.css"
import { SiEpicgames } from "react-icons/si";

export const Login = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        let { id, value } = e.target;
        setUserData({ ...userData, [id]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://apple-cupcake-41384.herokuapp.com/login", userData).then((res) => {
            alert("Logged in Successfully");
            console.log(res.data.user_data._id);
            var user = res.data.user_data;
            localStorage.setItem("userData", JSON.stringify(user));
            navigate("/")
        }).catch((error) => {
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
                   <input className="loginbtn" type="submit" value="LOG IN NOW" />
                    <div className="privacy">Privacy Policy</div>
                </form>
                <div className="dontHaveAcnt">Don't have an Epic Games Account? <Link to="/signup"><span className="under">Sign up</span></Link></div>
                <div className="dontHaveAcnt">Back to <Link to="/signupoptions"><span className="under">all sign up options</span></Link> </div>
            </div>
        </div>
    )
}

