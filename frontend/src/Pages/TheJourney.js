import React from "react";
import Nav from "./../components/Nav";
import "./TheJourney.css";
const TheJourney = () => {
  return (
    <div>
      <Nav />
      <div className="journey_container">
        <div className="grass">
          <div>
            <h1>THE JOURNEY</h1>
            <div className="gradient"></div>
          </div>
        </div>
        <div className="roots_container">
          <ul>
            <li>
              <div>
                <h1>THE ROOTS</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi perferendis ut illum laborum ipsam nihil nobis aperiam
                  eveniet autem fuga. Voluptatum sint at alias aliquid quo
                  consequatur eligendi accusamus ducimus.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>CHAPTER I</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi perferendis ut illum laborum ipsam nihil nobis aperiam
                  eveniet autem fuga. Voluptatum sint at alias aliquid quo
                  consequatur eligendi accusamus ducimus.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>CHAPTER II</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi perferendis ut illum laborum ipsam nihil nobis aperiam
                  eveniet autem fuga. Voluptatum sint at alias aliquid quo
                  consequatur eligendi accusamus ducimus.
                </p>
              </div>
            </li>
            <li>
              <div>
                <h1>KICKSUP</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi perferendis ut illum laborum ipsam nihil nobis aperiam
                  eveniet autem fuga. Voluptatum sint at alias aliquid quo
                  consequatur eligendi accusamus ducimus.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheJourney;
