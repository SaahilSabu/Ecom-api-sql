import React, { useState, useEffect } from "react";
import Nav from "./../components/Nav";
import "./Store.css";
import Card from "./../components/Card";
import axios from "axios";
export const Store = () => {
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
    <div>
      <Nav />
      <div className="divider">
        <div>
          <div className="sections">
            <div className="section_header">
              <h1>FILTERS</h1>
              <p>icon</p>
            </div>
            <div>
              <h3>Cost</h3>
              <div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Rs 1500-4000</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Rs 4001-7000</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Rs 7000+</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Colour</h3>
              <div className="colour_container">
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Black</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Blue</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Green</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Design templates</h3>
              <div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>2</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>3</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p> 3+</p>
                </div>
              </div>
            </div>
            <div>
              <h3>Type</h3>
              <div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Loafers</p>
                </div>
                <div className="filter_checkbox">
                  <input type="checkbox" name="dvdv" id="" />
                  <p>Sneakers</p>
                </div>
                <div className="button">
                  <button>Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sections shoes">
          <div className="section_header">
            <h1>SHOES</h1>
          </div>
          <div className="section_card">
            {products &&
              products.map((product) => {
                return <Card product={product} />;
              })}
            {console.log(products)}
          </div>
        </div>
        <div className="sections">
          <div className="section_header">
            <h1>CART</h1>
          </div>
          <div className="cart_body">What's stopping you, designer?</div>
          <div className="button">
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
