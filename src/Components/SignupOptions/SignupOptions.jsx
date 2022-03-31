import React from "react";
import "./SignupOptions.css";
export const SignupOptions = () => {
    return (
        <div className="signupOptionsContainer">
            <div className="optionContainer">
                <div className="icon">
                    <img src="\public\icons\Epic_Games_white.svg" alt="logo" />
                </div>

                <p className="heading">
                    CHOOSE HOW TO SIGN IN TO YOUR EPIC ACCOUNT
                </p>

                <div className="optionsName">
                    <div className="allowedOption">
                        <img src="/public/social-icons/Epic_Games.svg" alt="epic-games" />
                        <p className="text">SIGN IN WITH EPIC GAMES</p>
                    </div>
                    <div className="option">
                        <img src="/public/social-icons/Facebook.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH FACEBOOK</p>
                    </div>
                    <div className="allowedOption">
                        <img src="/social-icons/Google.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH GOOGLE</p>
                    </div>
                    <div className="option">
                        <img src="/social-icons/Nintendo.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH NINTENDO ACCOUNT</p>
                    </div>
                    <div className="option">
                        <img src="/social-icons/Xbox.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH XBOX LIVE</p>
                    </div>
                    <div className="option">
                        <img src="/social-icons/Playstation_Network.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH PLAYSTATION NETWORK</p>
                    </div>
                    <div className="option">
                        <img src="/social-icons/Apple.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH APPLE</p>
                    </div>
                    <div className="option">
                        <img src="/social-icons/Steam.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH STEAM</p>
                    </div>
                </div>
                <p className="tfooter">
                    Don't have an Epic Games account?{" "}
                    <span className="underline">Sign Up</span>
                </p>
            </div>
        </div>
    )
}