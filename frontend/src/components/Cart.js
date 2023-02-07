import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState("");

  const fetchCart = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/auth/cart/1");
      // console.log(res.data);
      setCart(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCart();
  });
  return (
    <div className="sections">
      <div className="section_header">
        <h1>CART</h1>
      </div>
      <div className="cart_body">
        {cart.length > 0
          ? cart.map((cartItem) => <CartItems cartItem={cartItem} />)
          : "What's stopping you, designer?"}
        <div className="button">
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
