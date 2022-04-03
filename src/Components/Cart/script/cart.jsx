import React, {Component} from 'react'
import {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../style/cart.css";
import {AiFillWindows} from "react-icons/ai";
import {RiAddCircleLine} from "react-icons/ri";
import axios from 'axios';
import useRazorpay from 'react-razorpay';
export const GameCart = () => {
  
  var currentUser = JSON.parse(localStorage.getItem('userData'))
  var final=[]||JSON.parse(localStorage.getItem("finalprice"));
//   console.log(currentUser);
  const Razorpay = useRazorpay();  
  const navigate = useNavigate();
  const [game,setGame] = useState([])
  const [orderId,setOrderId] = useState("")

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
var sum=0;
var discount=0
game.forEach((e)=>{
    sum+=+e.game_id.price
})
game.forEach((e)=>{
    discount += +e.game_id.price*((+e.game_id.discount)/100) 
})

var totalPrice = Math.floor((sum-discount)*100)
// RAZORPAY

const handlePayEvent = () => {
    async function generateOrderId() {
      try {
        const res = await fetch(
          "https://quiet-fortress-03621.herokuapp.com/create/orderId",
          {
            method: "POST",
            body: JSON.stringify({ amount: totalPrice }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        let response = await res.json();
        // console.log(response);
        setOrderId(response.orderId);
        console.log(orderId);
        // document.getElementById("button").style.display = "block";
        // $("button").show();
      } catch (e) {
        console.log("generateOrderId" + e);
      }
    }

    generateOrderId();

    //endof Pay Event
    const saveFn = function (e) {
      var options = {
        key: "rzp_test_EjhiL888CKSyUw", // Enter the Key ID generated from the Dashboard
        amount: totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Epic Games Project Masai",
        description: "Test Transaction",
        image:
          "/logo.png",
        order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the previous step
        handler: function (response) {
          // response = JSON.stringify(response);
          console.log("hello response" + response);
          // alert(response.razorpay_payment_id);
          navigate(`/payment`);

          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature);
          async function saveOrder(response) {
            try {
              const res = await fetch(
                "https://quiet-fortress-03621.herokuapp.com/saveOrderDetails",
                {
                  method: "POST",
                  body: JSON.stringify(response),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              let saveDetail = await res.json();
              console.log(saveDetail);
              // window.location.href = "success.html";
            } catch (e) {
              console.log("saveOrderErr" + e);
            }
          }
          saveOrder();

          const settings = async (response) => {
            try {
              const res = await fetch(
                "https://quiet-fortress-03621.herokuapp.com/api/payment/verify",
                {
                  method: "POST",
                  body: JSON.stringify(response),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );

              let verifyDetail = await res.json();
              console.log(verifyDetail);
            } catch (e) {
              console.log("saveOrderErr" + e);
            }
          };
          settings();
        },

        theme: {
          color: "#343434",
        },
      };

      var rzp1 = new Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    };

    saveFn();
  };



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
                        <p>₹{Math.floor(sum)}</p>
                    </span>
                    <span className="rshowPrice">
                        <p>Sale Discount</p>
                        <p>-₹{Math.floor(discount)}</p>
                    </span>
                    <span className="rshowPrice">
                        <p>Taxes</p>
                        <p>NA</p>
                    </span>
                    <div className="rline"></div>
                    <span className="rshowPrice">
                        <p>Subtotal</p>
                        <p>₹{Math.floor(sum-discount)}</p>
                    </span>
                    <button className="rcheckoutButton" onClick={()=>handlePayEvent()}>Check Out</button>
                </div>
            </div>
        </div>
    </div>
  );
};