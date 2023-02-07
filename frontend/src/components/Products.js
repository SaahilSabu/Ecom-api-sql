import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./../components/Card";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState("");
  const [rating, setRating] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/products/allProducts"
      );
      const data = Array.from(res.data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRatings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/api/products/allProducts"
      );
      const data = Array.from(res.data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="sections shoes">
      <div className="section_header">
        <h1>SHOES</h1>
      </div>
      <div className="section_card">
        {products
          ? products.map((product) => {
              return (
                <>
                  <Link className="link" to={`/product/${product.id}`}>
                    <Card product={product} />
                  </Link>
                </>
              );
            })
          : "Loading"}
        {console.log(products)}
      </div>
    </div>
  );
};

export default Products;
