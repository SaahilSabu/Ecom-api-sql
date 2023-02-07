import React, { useState, useEffect } from "react";
import Nav from "./../components/Nav";
import "./Store.css";

import Filter from "./../components/Filter";
import Products from './../components/Products';
import Cart from './../components/Cart';
export const Store = () => {
  
  return (
    <div>
      <Nav />
      <div className="divider">
        <Filter />
        <Products />
        <Cart />
      </div>
    </div>
  );
};
