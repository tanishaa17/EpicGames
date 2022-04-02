import React from "react";
import { Link } from "react-router-dom";
import "../style/LoginOptions.css"
import { SiEpicgames } from "react-icons/si";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { IoLogoXbox } from "react-icons/io";
import { SiPlaystation } from "react-icons/si";
import { BsApple } from "react-icons/bs";
import { FaSteam } from "react-icons/fa";
import { SiNintendonetwork } from "react-icons/si";
export const LoginOptions = () => {
    return (
        <div className="loginOptionsContainer">
            <div className="optionContainerLogin">
                <div className="icon">
                    <SiEpicgames className="logo"></SiEpicgames>
                </div>
                <h4>Choose how to sign in to your Epic Account</h4>

                <div className="loginOptionsName">
                    <div className="allowedOptionLogin">
                        <SiEpicgames className="epic"></SiEpicgames>
                        <Link to="/login" style={{ color: "#FFFFFF" }}><p className="text">SIGN IN WITH EPIC GAMES</p></Link>
                    </div>
                    <div className="logOption">
                        <RiFacebookCircleLine className="fb"></RiFacebookCircleLine>
                        <p className="text">SIGN IN WITH FACEBOOK</p>
                    </div>
                    <div className="allowedOptionLogin">
                        <FcGoogle className="google"></FcGoogle>
                        <p className="text">SIGN IN WITH GOOGLE</p>
                    </div>
                    <div className="logOption">
                        <IoLogoXbox className="xbox"></IoLogoXbox>
                        <p className="text">SIGN IN WITH XBOX LIVE</p>
                    </div>
                    <div className="logOption">
                        <SiPlaystation className="psn"></SiPlaystation>
                        <p className="text">SIGN IN WITH PLAYSTATION NETWORK</p>
                    </div>
                    <div className="logOption">
                        <SiNintendonetwork className="ninten"></SiNintendonetwork>
                        <p className="text">SIGN IN WITH NINTENDO ACCOUNT</p>
                    </div>
                    <div className="logOption">
                        <FaSteam className="steam"></FaSteam>
                        <p className="text">SIGN IN WITH STEAM</p>
                    </div>
                    <div className="logOption">
                        <BsApple className="apple"></BsApple>
                        <p className="text">SIGN IN WITH APPLE</p>
                    </div>
                </div>
                <p className="logFooter">
                    Don't have an Epic Games account?{" "}
                    <Link to="/signupoptions"><span className="underline">Sign Up</span></Link>
                </p>
            </div>
        </div>
    )
}