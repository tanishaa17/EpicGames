import "../style/dropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = () => {
  return (
    <>
      <div class="dropdown">
       
          <Link  className="text-light dropbtn text-decoration-none" variant="button" to={"/loginoptions"}>SIGNUP</Link>
   
        <div class="dropdown-content">
          <a href="#">Account</a>
          <Link to={"/login"} >Login</Link>
        </div>
      </div>
    </>
  );
};
