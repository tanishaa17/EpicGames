import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/cart.css";

export const GameCart = () => {

  return(
    <div id="rcart" className="rgame-cart">
        <div id="rgamesList"></div>
        <div id="rgamesPrice">
            <p className="rGamesandSummary">Games and App Summary</p>
            <br/>
            <span id="rshowPrice">
                <p>Price</p>
                <p>6184</p>
            </span>
            <span id="rshowPrice">
                <p>Sale Discount</p>
                <p>-3099</p>
            </span>
            <span id="rshowPrice">
                <p>Taxes</p>
                <p>NA</p>
            </span>
            <div className="rline"></div>
            <span id="rshowPrice">
                <p>Subtotal</p>
                <p>NA</p>
            </span>
            <button className="rcheckoutButton">Check Out</button>
        </div>
    </div>
  );
};