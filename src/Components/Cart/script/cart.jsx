import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/cart.css";

export const GameCart = () => {

  return(
    <div>
        <p className="rmyCart">My Cart</p>
        <div id="rcart" className="rgame-cart">
            <div id="rgamesList">
                <div className="rtobuygames">
                    <img className="rbuygameimage" src="https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S2_03_1200x1600-b1847981214ac013383111fc457eb9c5?h=1280&resize=1&w=960"></img>
                    <div className="rdetaildiv">
                        <span className="rdetailflex">
                            <p className="rbasegame">BASE GAME</p>
                            <div className="rpricedetail">
                                <p className="rblueDiscount">-50%</p>
                                <p className = "rgap rlineprice">₹2,999</p>
                                <p className = "rgap ractualporice">₹1499.50</p>
                            </div>
                        </span>
                        <span className="rdetail2flex">
                            <p className="rtitle">CyberPunk 2077</p>
                            <p className="rsale">Sale Ends 4/7/2022 at 8:30pm</p>
                        </span>
                        <span className="rdetail3flex">
                            <img src="/icons8-windows-10-50.png"></img>
                            <div className="rpricedetail2">
                                <p className = "rgap2 rwishlist">+Wishlist</p>
                                <p className = "rremove rgap2">Remove</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div id="rgamesPrice">
                <p className="rGamesandSummary">Games and App Summary</p>
                <br/>
                <span className="rshowPrice">
                    <p>Price</p>
                    <p>6184</p>
                </span>
                <span className="rshowPrice">
                    <p>Sale Discount</p>
                    <p>-3099</p>
                </span>
                <span className="rshowPrice">
                    <p>Taxes</p>
                    <p>NA</p>
                </span>
                <div className="rline"></div>
                <span className="rshowPrice">
                    <p>Subtotal</p>
                    <p>NA</p>
                </span>
                <button className="rcheckoutButton">Check Out</button>
            </div>
        </div>
    </div>
  );
};