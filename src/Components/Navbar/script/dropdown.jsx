import "../style/dropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const DropDown = () => {
  const data = useSelector((store) => store.credential);
  //  console.log(data)
  return (
    <>
      <div class="dropdown">
        <Link
          className="text-light dropbtn text-decoration-none"
          variant="button"
          to={"/signupoptions"}
        >
          {data.length === 0 ? "SIGNUP" : `${data.first_name}`}
        </Link>

        <div class="dropdown-content">
          <a href="/">Account</a>
          <Link to={"/loginoptions"}>Login</Link>
          <Link to={"/"}>Logout</Link>
        </div>
      </div>
    </>
  );
};
