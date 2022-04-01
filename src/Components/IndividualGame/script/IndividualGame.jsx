import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/game.css";
import {RiAddCircleLine} from "react-icons/ri";
import {AiFillWindows} from "react-icons/ai";


export const IndividualGame =()=>{
    return(
        <div className="rcontainer">
            <div className="rLine"></div>
            <p className="rmaintitle">Title</p>
            <div className="roverviewDiv">
                <p className="roverview">Overview</p>
                <p className="rrgap">Add Ons</p>
                <p className="rrgap">Achievements</p>
            </div>
            <div className="rmainDiv">
                <div className="rleftmainDiv">
                    <div className="rgamevideo"></div>
                    <div>
                        <p>Description</p>
                    </div>
                    <div className="rgenrefeature">
                        <div className="rgenre">
                            <div className="rgfleftgap">
                                <p>Genre</p>
                                <span>
                                    <p></p>
                                    <p></p>
                                </span>
                            </div>
                        </div>
                        <div className="rfeature">
                            <div className="rgfleftgap">
                                <p>Features</p>
                                <span>
                                    <p></p>
                                    <p></p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="rrightmainDiv">
                    <div className="rlogoImage"></div>
                    <div className="ralldetailprice">
                        <p className="rrbasegame">BASE GAME</p>
                        <div className="rdpap">
                            <p className="rrdiscount">-50%</p>
                            <p className="rractual">₹2,199</p>
                            <p className="rbuyprice">₹1,499</p>
                        </div>
                        <p className="rsaledate">Sale ends in 4/7/2022 at 8:30 PM</p>
                    </div>
                        <button id="raddcart">
                            ADD TO CART
                        </button>
                        <br/>
                        <button id="raddwishlist">
                            <RiAddCircleLine className="rrwishcircle"/>ADD TO WISHLIST
                        </button>
                        <div>
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Developer</p>
                                <p className="rrightlight">UBISOFT</p>
                            </span>
                            <div className="rrLine"/>
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Publisher</p>
                                <p className="rrightlight">UBISOFT</p>
                            </span>
                            <div className="rrLine"/>
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Release Date</p>
                                <p className="rrightlight"></p>
                            </span>
                            <div className="rrLine"/>
                            <span className="rcompanypublisher">
                                <p className="rleftlight">Platform</p>
                                <AiFillWindows className="rwindowlight"/>
                            </span>
                            <div className="rrLine"/>
                        </div>
                </div>
            </div>
        </div>
    )
}