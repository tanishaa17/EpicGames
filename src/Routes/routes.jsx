import React, { Component } from 'react'
import { render } from 'react-dom';
import { Routes, Route } from "react-router";
import { GameCart } from '../Components/Cart/script/cart';
import { Footer } from "../Components/Footer/script/Footer"
import { Login } from "../Components/Login/script/Login";
import { Signup } from "../Components/Signup/script/Signup";
<<<<<<< HEAD
import { IndividualGame } from "../Components/IndividualGame/script/IndividualGame";
import { SignupOptions } from "../Components/SignupOptions/SignupOptions"
import { LoginOptions } from '../Components/LoginOptions/LoginOptions';
=======
import { SignupOptions } from "../Components/SignupOptions/script/SignupOptions";
import {IndividualGame} from "../Components/IndividualGame/script/IndividualGame";

>>>>>>> 44c65c57ebce97e8fade7671e04ec7bfb9ea03eb
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/cart" element={<GameCart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupoptions" element={<SignupOptions />} />
        <Route exact path="/individualgame" element={<IndividualGame />} />
        <Route exact path="/loginoptions" element={<LoginOptions />} />
      </Routes>
      <Footer />
    </>
  );
};