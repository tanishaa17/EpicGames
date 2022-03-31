import React, { Component } from 'react'
import { render } from 'react-dom';
import { Routes, Route } from "react-router";
import { GameCart } from '../Components/Cart/script/cart';
import { Footer } from "../Components/Footer/script/Footer"
import { Login } from "../Components/Login/script/Login";
import { Signup } from "../Components/Signup/script/Signup";
import { LoginOptions } from '../Components/LoginOptions/LoginOptions';
import { SignupOptions } from "../Components/SignupOptions/script/SignupOptions";
import {IndividualGame} from "../Components/IndividualGame/script/IndividualGame";
import { Navbar } from '../Components/Navbar/script/Navbar';
import { GamesPage } from "../Components/Games/script/GamesPage";

export const AllRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/cart" element={<GameCart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupoptions" element={<SignupOptions />} />
        <Route exact path="/individualgame" element={<IndividualGame />} />
        <Route exact path="/loginoptions" element={<LoginOptions />} />
        <Route exact path="/products" element={<GamesPage />} />
      </Routes>
      <Footer />
    </>
  );
};