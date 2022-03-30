import { Routes, Route } from "react-router";
import { GameCart } from '../Components/Cart/script/cart'
import {Footer} from "../Components/Footer/script/Footer"
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        
        <Route exact path="/cart" element={<GameCart />} />
      </Routes>
      <Footer/>        
    </>
  );
};