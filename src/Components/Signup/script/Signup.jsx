import React from "react";
import "../style/Signup.css"
import { SiEpicgames } from "react-icons/si";
export const Signup = () => {
    return (
        <div className="signupContainer">
            <div className="signupBox">
                <SiEpicgames className="logo"></SiEpicgames>
                <h4>Sign Up</h4>
                <form action="" className="signupForm">
                    <div>
                        <select name="country *" id="country" className="signTextbox">
                            <option value="countryName">Bangladesh</option>
                            <option value="countryName" selected >India</option>
                            <option value="countryName">China</option>
                            <option value="countryName">Kuwait</option>
                            <option value="countryName">Japan</option>
                            <option value="countryName">United States</option>
                            <option value="countryName">United Kingdom</option>
                            <option value="countryName">Afganistan</option>
                            <option value="countryName">Indonesia</option>
                            <option value="countryName">Iraq</option>
                            <option value="countryName">Israel</option>
                            <option value="countryName">Hungary</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="signTextbox" placeholder="First Name *" />
                        <input type="text" className="signTextbox" placeholder="Last Name *" />
                    </div>
                    <div>
                        <input type="text" className="signTextbox" placeholder="Display Name *" />
                    </div>
                    <div>
                        <input type="email" className="signTextbox" placeholder="Email Address *" />
                    </div>
                    <div>
                        <input type="password" className="signTextbox" placeholder="Password *" />
                    </div>
                    <div className="tncCheck">
                        <input type="checkbox" className="tncCheckbox1" />
                        <span><label htmlFor="tncs">
                            I would like to receive news, surveys and special offers from Epic Games</label></span>
                    </div>
                    <div className="tncCheck">
                        <input type="checkbox" className="tncCheckbox2" />
                        <span><label htmlFor="tncs">
                            I have read and agree to the <span className="underline">terms of service</span></label></span>
                    </div>
                    <button className="signupBtn">CONTINUE</button>
                    <p className="pripolicy">Privacy Policy</p>
                </form>
                <p className="haveacnt">Have an Epic Games Account?<span className="underline">Sign In</span></p>
                <p className="haveacnt">Back to <span className="underline">all sign up options</span></p>
            </div>
        </div>
    )
}