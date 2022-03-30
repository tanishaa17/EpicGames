import { Routes, Route } from "react-router";
import { GameCart } from '../Components/Cart/script/cart';
import {Footer} from "../Components/Footer/script/Footer"
import {HomepageU} from "../Components/Homepage/script/Homepage_U";
import {ProductsPage} from "../Components/Games/script/ProductPage";
import {Login} from "../Components/Login/script/Login";
import {Signup} from "../Components/Signup/script/Signup";

export const AllRoutes = () => {
  return (
    <>
    
        <Routes>
            <Route exact path="/" element={<HomepageU />} />
            <Route exact path="/products" element={<ProductsPage />} />
            <Route exact path="/cart" element={<GameCart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      <Footer/>        
    </>
  );
};