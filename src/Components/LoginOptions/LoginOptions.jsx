import React from "react";
import "./LoginOptions.css";
export const LoginOptions = () => {
    return (
        <div className="loginOptionsContainer">
            <div className="optionContainerLogin">
                <div className="icon">
                    <img src="\public\icons\Epic_Games_white.svg" alt="logo" />
                </div>

                <p className="logHeading">
                    CHOOSE HOW YOU WOULD LIKE TO SIGN UP
                </p>

                <div className="loginOptionsName">
                    <div className="allowedOptionLogin">
                        <img src="/public/social-icons/Epic_Games.svg" alt="epic-games" />
                        <p className="text">SIGN IN WITH EPIC GAMES</p>
                    </div>
                    <div className="logOption">
                        <img src="/public/social-icons/Facebook.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH FACEBOOK</p>
                    </div>
                    <div className="allowedOptionLogin">
                        <img src="/social-icons/Google.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH GOOGLE</p>
                    </div>
                    <div className="logOption">
                        <img src="/social-icons/Nintendo.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH NINTENDO ACCOUNT</p>
                    </div>
                    <div className="logOption">
                        <img src="/social-icons/Xbox.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH XBOX LIVE</p>
                    </div>
                    <div className="logOption">
                        <img src="/social-icons/Playstation_Network.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH PLAYSTATION NETWORK</p>
                    </div>
                    <div className="logOption">
                        <img src="/social-icons/Apple.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH APPLE</p>
                    </div>
                    <div className="logOption">
                        <img src="/social-icons/Steam.svg" alt="logo-img" />
                        <p className="text">SIGN IN WITH STEAM</p>
                    </div>
                </div>
                <p className="logFooter">
                    Have an Epic Games account?{" "}
                    <span className="underline">Sign In</span>
                </p>
            </div>
        </div>
    )
}