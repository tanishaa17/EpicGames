import "../style/dropdown.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const DropDown = () => {
  const data = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <div class="dropdown">
        <Link
          className="text-light dropbtn text-decoration-none"
          variant="button"
          to={"/signupoptions"}
        >
          {data ? `${data.first_name}` : "SIGNUP"}
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
