import { Routes, Route } from "react-router-dom"
import { Navbar } from "../../../U5C3Evaluation/src/Components/Navbar/Navbar"

export const AllRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/games" element={<Games />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
        </>
    )
}