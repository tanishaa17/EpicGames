import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [userData, setUserData] = useState("");
    const handleChange = (e) => {
        setUserData(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/users", userData).then((res) => {
            alert("Logged in Successfully")
        })
    }
    return (
        <>
            <div className="LoginBox">
                <h2>Sign in with an Epic Games Account</h2>
                <form action="">
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email Address" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div>
                        <input type="text" name="password" id="password" placeholder="Password" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div>
                        <input type="checkbox" name="RememberMe" id="remember" /> 
                        <label htmlFor="remember">Remember me</label>
                        <span><u>Forget Your Password</u></span>
                    </div>
                    <button type="submit" onSubmit={(e) => { handleSubmit(e) }}>LOG IN NOW</button>
                </form>
                <p><u>Privacy Policy</u></p>
                <p>Don't have an Epic Games Account? <u>Sign Up</u></p>
            </div>
        </>
    )
}