import React, {Component} from 'react'
import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import "../style/payment.css"
import {TiTickOutline} from 'react-icons/ti'

export const PaymentLast=()=>{
    
    var currentUser = JSON.parse(localStorage.getItem('userData'))

    const navigate = useNavigate();
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

    const redirectFunction=()=>{
        game.map((ele)=>{
            axios.delete(`https://quiet-fortress-03621.herokuapp.com/cart/${ele._id}`).then((res)=>{
                // console.log("hey hey",res.data)
                //   setGame([...res.data])
            })
        })    

        navigate(`/`);
    }

    return(
        <div className="rpayment">
            <img src="/logo.png"></img>
            <TiTickOutline id="rtick"/>
            <p>Success...!</p>
            <p>Your Order Has Been Confirmed</p>
            <button className="rhomepagebutton" onClick={()=>{
                redirectFunction()
            }}>
                Back To Homepage
            </button>
        </div>
    )
}