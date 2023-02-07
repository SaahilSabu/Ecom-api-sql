import React, { useState, useEffect } from "react";
import axios from "axios";
const CartItems = ({ cartItem }) => {
  //   console.log(cartItem);
  const [product, setProduct] = useState("");
  const productId = cartItem.productId;
  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/products/${productId}`
      );
      //   console.log(res.data);
      setProduct(res.data);
    } catch (error) {}
  };
  const price = product.price * cartItem.quantity;
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <div>
        <h3>{product.title}</h3>
      </div>
      <div className="cartItem">
        <img src={product.image} alt="" />
        <div className="cart_priceQty">
          <h3>QTY {cartItem.quantity}</h3>
          <h3>PRICE: Rs.{price}</h3>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
