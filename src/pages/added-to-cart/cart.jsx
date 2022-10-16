import React from "react";
import { Route, Routes } from "react-router-dom";
import AddedToCart from "./addedto-cart";
import Checkout from "./checkout";

function Cart() {
  return (
    <div className="cart">
      <div className="cart_wrapper">
        <Routes>
          <Route path="/" element={<AddedToCart />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default Cart;
