import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../style/game.css";
import {RiAddCircleLine} from "react-icons/ri";
import {AiFillWindows,AiFillFacebook} from "react-icons/ai";
import {BsInstagram,BsTwitter,BsYoutube} from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ProgressCircle } from 'react-simple-circle-rating';
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
            alert("Added Successfully")
        })
    }

    var buyprice = Math.floor(game.price-game.price*((game.discount)/100));
    console.log("hey hey",buyprice);
    // document.querySelector("#rcalculation").value=price;

    return(
        <div className="rmaincontainer">
            <div className="rcontainer">
                <div className="rLine"></div>
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
                        <div className="ropenworld">
                            <p className="rdestitle">{game.title}</p>
                            <p className="rdesdes">Includes {game.title} story mode and online<br/><br/>
                            In {game.title} video game, an open world is a game mechanic of using a virtual world that the player can explore and approach objectives freely, as opposed to a world with more linear and structured gameplay.
                            While games have used open-world designs since the 1980s, the implementation in Grand Theft Auto III (2001) set a standard for the concept which has been used since. <br/><br/>
                            Games with open or free-roaming worlds typically lack level structures like walls and locked doors, or the invisible walls in more open areas that prevent the player from venturing beyond them; only 
                            at the bounds of an open-world game will players be limited by geographic features like vast oceans or impassable mountains. Players typically do not encounter loading screens common in linear level
                            designs when moving about the game world, with the open-world game using strategic storage and memory techniques to load the game world in a dynamic and seamless manner. Open-world games still enforce 
                            many restrictions in the game environment, either because of absolute technical limitations or in-game limitations imposed by a game's linearity.</p>
                        </div>
                        <div className="rfollowDiv">
                            <p className="rfollow">Follow Us</p>
                            <div className="rfollowicons">
                                <div>
                                    <AiFillFacebook className="riconshover"/>
                                    <BsInstagram className="riconshover"/>
                                    <BsTwitter className="riconshover"/>
                                    <BsYoutube className="riconshover"/>
                                </div>
                            </div>
                        </div>
                        <div className="rratingDiv">
                            <p className="rrating">Ratings</p>
                            <div className="rratingcircle">
                                <div>
                                    <ProgressCircle 
                                        percentage={Math.random()*100}
                                        color="#0074e4"
                                        colorBackground="#1c1c1c"
                                        textColor="white"
                                        size={30}
                                    />
                                    <p>Critics Recommend</p>
                                </div>
                                <div>
                                    <ProgressCircle 
                                        percentage={Math.random()*100}
                                        color="#0074e4"
                                        colorBackground="#1c1c1c"
                                        textColor="white"
                                        size={30}
                                    />
                                    <p>Top Critic Average</p>
                                </div>
                                <div>
                                    <ProgressCircle 
                                        percentage={Math.random()*100}
                                        color="#0074e4"
                                        colorBackground="#1c1c1c"
                                        textColor="white"
                                        size={30}
                                    />
                                    <p>Open Critic Rating</p>
                                </div>
                            </div>
                        </div>
                        <p className="rspecification">Windows Specifications</p>
                        <div className="rspecificationDiv">
                            
                            <div className="rspecDetails">
                                <div>
                                    <div>
                                        <p>Minimum</p>
                                        <span className="rrspeciSpan">
                                            <p>OS</p>
                                            <p>Windows 7 - Service Pack 1</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Processor</p>
                                            <p>Intel(R) Core(TM) i5-2500K / AMD FX-6300</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Memory</p>
                                            <p>8 GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Graphics</p>
                                            <p>Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Storage</p>
                                            <p>150 GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Others</p>
                                            <p>Sound Card: DirectX Compatible</p>
                                        </span>
                                    </div>
                                    <div>
                                        <p>Recommended</p>
                                        <span className="rrspeciSpan">
                                            <p>OS</p>
                                            <p>Windows 10 - April 2020 Update</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Processor</p>
                                            <p>Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Memory</p>
                                            <p>16 GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Graphics</p>
                                            <p>Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Storage</p>
                                            <p>150 GB</p>
                                        </span>
                                        <span className="rrspeciSpan">
                                            <p>Others</p>
                                            <p>Sound Card: DirectX Compatible</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="rspecLang">
                                <div className="rspeclanguage">
                                    <p>Languages Supported</p>
                                    <p>Voice:
                                        English
                                        Text:
                                        English
                                        Simplified Chinese
                                        Traditional Chinese
                                        Portuguese ( Brazilian )
                                        French
                                        German
                                        Italian
                                        Japanese
                                        Korean
                                        Polish
                                        Russian
                                        Portuguese
                                        Spanish (Spain )
                                        Spanish (LATAM)
                                    </p>
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
