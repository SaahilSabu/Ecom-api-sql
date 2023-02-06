import React, { useState, useEffect } from "react";
import "./Card.css";
import axios from "axios";
const Card = ({ product }) => {
  const [rating, setRating] = useState(0);
  const product_id = product.id;
  let cumRating = 0;
  const getRating = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/products/review/${product_id}`
      );
      response.data.map((i) => {
        cumRating += i.rating;
      });
      setRating(cumRating / response.data.length);
      cumRating = 0;
    } catch (error) {}
  };
  useEffect(() => {
    getRating();
  }, []);
  return (
    <main class="card">
      <article>
        <img src="https://picsum.photos/600/400?image=1015" alt="Sample" />
        <div class="text">
          <h3>{product.title}</h3>
          <div className="card_footer">
            <p>Rs {product.price}/-</p>
            <p>Rating {rating ? rating.toPrecision(2) : 0}</p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Card;
