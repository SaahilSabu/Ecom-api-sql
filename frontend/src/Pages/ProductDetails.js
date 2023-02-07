import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from "./../components/Nav";
import Cart from "./../components/Cart";
import "./productDetail.css";
const ProductDetails = () => {
  const [product, setProduct] = useState("");
  const [rating, setRating] = useState("");
  const [qty, setQty] = useState(1);
  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/products/1");

      // console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRatings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/products/allProducts"
      );
      const data = res.data;
      setRating(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      const res = await axios.post("http://localhost:8080/api/auth/addCart/1", {
        productId: product.id,
        quantity: qty,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleQty = (type) => {
    if (type === "plus") {
      setQty(qty + 1);
    }
    if (type === "minus") {
      if (qty - 1 < 1) {
        setQty(1);
      } else {
        setQty(qty - 1);
      }
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Nav />
      <div className="divider">
        <div className="p-container">
          <div className="content_div">
            <img
              src={product.image}
              className="p_img"
              width="200px"
              alt="Product"
            />
            <div className="p_content">
              <div className="p_hero">
                <h1>{product.title}</h1>
                <h4>{product.description}</h4>
              </div>
              <div className="p_heo">
                <h2 className="">Rs.{product.price}</h2>
              </div>
              <div className="p_qty">
                <h2
                  className=""
                  onClick={() => {
                    handleQty("plus");
                  }}
                >
                  +
                </h2>
                <h2 className="">{qty}</h2>
                <h2
                  className=""
                  onClick={() => {
                    handleQty("minus");
                  }}
                >
                  -
                </h2>
              </div>
              <Link to="/store" className="link">
                <button onClick={addToCart} className="">
                  Add to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default ProductDetails;
