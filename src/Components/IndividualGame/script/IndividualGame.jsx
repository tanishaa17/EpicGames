import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/game.css";
import {RiAddCircleLine} from "react-icons/ri";
import {AiFillWindows} from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from 'axios';



export const IndividualGame =()=>{

    var currentUser = JSON.parse(localStorage.getItem('userData'))
    
    const {id} =useParams();

    const [game,setGame] = useState({})

    useEffect(()=>{
        getData();
    },[id])

    const getData=()=>{
            axios.get(`https://apple-cupcake-41384.herokuapp.com/games/${id}`).then((res) => {
            // console.log("res", res.data);
            setGame(res.data);
        });
    }
    // console.log("hey hey",typeof(game.discount));


    const addToCart=(id)=>{
        var cart_data={
            user_id:currentUser._id,
            game_id: id
        };
        axios.post(`https://apple-cupcake-41384.herokuapp.com/cart/additem/${currentUser._id}`,cart_data).then((res)=>{
            console.log(res);
            console.log(res.data)
        })
    }

    var buyprice = Math.floor(game.price-game.price*((game.discount)/100));
    console.log("hey hey",buyprice);
    // document.querySelector("#rcalculation").value=price;

    return(
        <div className="rmaincontainer">
            <div className="rcontainer">
                <div className="rLine"><hr/></div>
                <p className="rmaintitle">{game.title}</p>
                <div className="roverviewDiv">
                    <p className="roverview">Overview</p>
                    <p className="rrgap">Add Ons</p>
                    <p className="rrgap">Achievements</p>
                </div>
                <div className="rmainDiv">
                    <div className="rleftmainDiv">
                        <div id="rgametrailer" className="rgamevideo">
                            <iframe src={game.videoUrl} autoPlay={true} height="100%" width="100%"></iframe>
                        </div>
                        <div className="rdescriptionDiv">
                            <p>{game.description}</p>
                        </div>
                        <div className="rgenrefeature">
                            <div className="rgenre">
                                <div className="rgfleftgap">
                                    <p className="rrgf">Genre</p>
                                    <span className="rgfdetails">
                                        <p>Action,</p>
                                        <p>RPG,</p>
                                        <p>Open World,</p>
                                        <p>Stealth,</p>
                                    </span>
                                    <span className="rgfdetails">
                                        <p>Narration,</p>
                                        <p>Adventure,</p>
                                        <p>Puzzle</p>
                                    </span>
                                </div>
                            </div>
                            <div className="rfeature">
                                <div className="rgfleftgap">
                                    <p className="rrgf">Features</p>
                                    <span className="rgfdetails">
                                        <p>Controller Support,</p>
                                        <p>Single Player,</p>
                                        <p>Multiplayer,</p>
                                    </span>
                                    <span className="rgfdetails">
                                        <p>Online,</p>
                                        <p>Co-op</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="rrightmainDiv">
                        <div className="rlogoImage">
                            <img src={game.logo}></img>
                        </div>
                        <div className="ralldetailprice">
                            <p className="rrbasegame">BASE GAME</p>
                            <div className="rdpap">
                                <p className="rrdiscount">-{game.discount}%</p>
                                <p className="rractual">₹{game.price}</p>
                                <p id="rcalculation" className="rbuyprice">₹{buyprice}</p>
                            </div>
                            <p className="rsaledate">Sale ends in 4/7/2022 at 8:30 PM</p>
                        </div>
                            <button id="raddcart" onClick={()=>{
                                addToCart(game._id)
                            }}>
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
        </div>
    )
}
