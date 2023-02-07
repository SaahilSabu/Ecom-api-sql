import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TheJourney from "./Pages/TheJourney";
import { Store } from "./Pages/Store";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import Team from "./Pages/Team";
import "./App.css";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TheJourney />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
