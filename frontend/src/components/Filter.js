import React, { useState, useEffect } from "react";
// import axios from "axios";
const Filter = () => {
  return (
    <div>
      <div className="sections">
        <div className="section_header">
          <h1>FILTERS</h1>
          <p>icon</p>
        </div>
        <div>
          <h3>Colour</h3>
          <div className="colour_container">
            <div className="filter_checkbox">
              <input type="checkbox" name="black" id="" />
              <p>Black</p>
            </div>
            <div className="filter_checkbox">
              <input type="checkbox" name="blue" id="" />
              <p>Blue</p>
            </div>
            <div className="filter_checkbox">
              <input type="checkbox" name="green" id="" />
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
              <button>Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
