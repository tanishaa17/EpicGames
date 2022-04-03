import React, { Component } from "react";
import { render } from "react-dom";
import { Routes, Route } from "react-router";
import { GameCart } from "../Components/Cart/script/cart";
import { Footer } from "../Components/Footer/script/Footer";
import { Login } from "../Components/Login/script/Login";
import { Signup } from "../Components/Signup/script/Signup";
import { LoginOptions } from "../Components/LoginOptions/script/LoginOptions";
import { SignupOptions } from "../Components/SignupOptions/script/SignupOptions";
import { IndividualGame } from "../Components/IndividualGame/script/IndividualGame";
import { Navbar } from "../Components/Navbar/script/Navbar";
import { GamesPage } from "../Components/Games/script/GamesPage";
import { HomepageU } from "../Components/Homepage/script/Homepage_U";
import { BreadCrum } from "../Components/Homepage/script/breadcrum";
import { Provider } from "react-redux";
import { store } from "../Components/Redux/store";
export const AllRoutes = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
      </Provider>
      <BreadCrum />
      <Routes>
        <Route exect path="/" element={<HomepageU />} />
        <Route exact path="/cart" element={<GameCart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupoptions" element={<SignupOptions />} />
        <Route exact path="/individualgame/:id" element={<IndividualGame />} />
        <Route exact path="/loginoptions" element={<LoginOptions />} />
        <Route exact path="/products" element={<GamesPage />} />
        <Route exact path="apple-cupcake-41384.herokuapp.com/auth/google" />
      </Routes>
      <Footer />
    </>
  );
};
