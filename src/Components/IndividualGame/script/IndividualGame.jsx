import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/game.css";

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
                            <p>Genre</p>
                            <span>
                                <p></p>
                                <p></p>
                            </span>
                        </div>
                        <div className="rfeature">
                            <p>Features</p>
                            <span>
                                <p></p>
                                <p></p>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="rrightmainDiv">
                    <div className="rlogoImage"></div>
                    <div className="ralldetailprice">
                        <p>BASE GAME</p>
                        <div className="rdpap">
                            <p>-50%</p>
                            <p>₹2,199</p>
                            <p>₹1,499</p>
                        </div>
                        <p className="rsaledate">Sale ends in 4/7/2022 at 8:30 PM</p>
                    </div>
                        <button id="raddcart">
                            ADD TO CART
                        </button>
                        <br/>
                        <button id="raddwishlist">
                            ADD TO WISHLIST
                        </button>
                    
                </div>
            </div>
        </div>
    )
}