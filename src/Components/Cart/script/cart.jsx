import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/cart.css";
import {AiFillWindows} from "react-icons/ai";
import {RiAddCircleLine} from "react-icons/ri";
import axios from 'axios';

export const GameCart = () => {
  
  var currentUser = JSON.parse(localStorage.getItem('userData'))
  var final=[]||JSON.parse(localStorage.getItem("finalprice"));
//   console.log(currentUser);

  const [game,setGame] = useState([])

  useEffect(()=>{
      getData();
  },[])
  
  const getData=()=>{
      axios.get(`https://quiet-fortress-03621.herokuapp.com/cart/${currentUser._id}`).then((res)=>{
          console.log("hello hello",res.data)
          setGame([...res.data])
      })
  }


  const handleDelete=(id)=>{
    axios.delete(`https://quiet-fortress-03621.herokuapp.com/cart/${id}`).then((res)=>{
          console.log("hey hey",res.data)
        //   setGame([...res.data])
          getData();
    })
  }

//   console.log("hey hello",game)

  return(
    <div className="rcartcontainer">
        <div>
            <p className="rmyCart">My Cart</p>
            <div id="rcart" className="rgame-cart">
                <div id="rgamesList">{game.map((ele)=>{
                    return( 
                        <div>
                            <div className="rtobuygames">
                                <img className="rbuygameimage" src={ele.game_id.image}></img>
                                <div className="rdetaildiv">
                                    <span className="rdetailflex">
                                        <p className="rbasegame">BASE GAME</p>
                                        <div className="rpricedetail">
                                            <p className="rblueDiscount">-{ele.game_id.discount}%</p>
                                            <p className = "rgap rlineprice">₹{ele.game_id.price}</p>
                                            <p className = "rgap ractualporice">₹{`${Math.floor(ele.game_id.price- ele.game_id.price*((ele.game_id.discount)/100))}`}</p>
                                        </div>
                                    </span>
                                    <span className="rdetail2flex">
                                        <p className="rtitle">{ele.game_id.title}</p>
                                        <p className="rsale">Sale Ends 4/7/2022 at 8:30pm</p>
                                    </span>
                                    <span className="rdetail3flex">
                                        
                                        <div className="rpricedetail2">
                                            <AiFillWindows className="rwindowLogo"/>
                                            <span className="rspanwish">
                                                <RiAddCircleLine className = "rgap23 rgraddcircle"/>
                                                <p className = "rgap2 rwishlist">Wishlist</p>
                                                <p className = "rremove" onClick={()=>{
                                                    handleDelete(ele._id)
                                                }}>Remove</p>
                                            </span>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}</div>
                <div id="rgamesPrice">
                    <p className="rGamesandSummary">Games and App Summary</p>
                    <br/>
                    <span className="rshowPrice">
                        <p>Price</p>
                        <p>₹6184</p>
                    </span>
                    <span className="rshowPrice">
                        <p>Sale Discount</p>
                        <p>-₹3099</p>
                    </span>
                    <span className="rshowPrice">
                        <p>Taxes</p>
                        <p>NA</p>
                    </span>
                    <div className="rline"></div>
                    <span className="rshowPrice">
                        <p>Subtotal</p>
                        <p>₹NA</p>
                    </span>
                    <button className="rcheckoutButton">Check Out</button>
                </div>
            </div>
        </div>
    </div>
  );
};