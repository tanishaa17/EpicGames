import React from "react";
import "../style/SignupOptions.css";
import { SiEpicgames } from "react-icons/si";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoXbox } from "react-icons/io";
import { SiPlaystation } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
export const SignupOptions = () => {
    return (
        <div className="signupOptionsContainer">
            <div className="optionContainer">
                <div className="icon">
                    <SiEpicgames className="logos"></SiEpicgames>
                </div>

                <p className="heading">
                    CHOOSE HOW TO SIGN IN TO YOUR EPIC ACCOUNT
                </p>

                <div className="optionsName">
                    <div className="allowedOption">
                        <SiEpicgames className="epics"></SiEpicgames>
                        <p className="text">SIGN IN WITH EPIC GAMES</p>
                    </div>
                    <div className="option">
                        <RiFacebookCircleLine className="fbs"></RiFacebookCircleLine>
                        <p className="text">SIGN IN WITH FACEBOOK</p>
                    </div>
                    <div className="allowedOption">
                        <FcGoogle className="googles"></FcGoogle>
                        <p className="text">SIGN IN WITH GOOGLE</p>
                    </div>
                    <div className="option">
                        <IoLogoXbox className="xboxs"></IoLogoXbox>
                        <p className="text">SIGN IN WITH XBOX LIVE</p>
                    </div>
                    <div className="option">
                        <SiPlaystation className="psns"></SiPlaystation>
                        <p className="text">SIGN IN WITH PLAYSTATION NETWORK</p>
                    </div>
                    <div className="option">
                        <SiNintendonetwork className="nintens"></SiNintendonetwork>
                        <p className="text">SIGN IN WITH NINTENDO ACCOUNT</p>
                    </div>
                    <div className="option">
                        <FaSteam className="steams"></FaSteam>
                        <p className="text">SIGN IN WITH STEAM</p>
                    </div>
                    <div className="option">
                        <BsApple className="apples"></BsApple>
                        <p className="text">SIGN IN WITH APPLE</p>
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