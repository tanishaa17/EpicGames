import { Routes, Route } from "react-router";
import { GameCart } from '../Components/Cart/script/cart'
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        
        <Route exact path="/cart" element={<GameCart />} />
        
      </Routes>
    </>
  );
};