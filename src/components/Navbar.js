import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import Breakfast from "./Breakfast";
import MainDishes from "./MainDishes";
import Soup from "./Soup";
import Salads from "./Salads";
import Desserts from "./Desserts";
import FullRecipe from "./FullRecipe";

function Navbar() {
  console.log(process.env.REACT_APP_ROXI);
  console.log("navbar");
  return (
    <div>
      <ul className="links-section">
        <li>
          <NavLink className="left-link" to="/home">
            Home{" "}
          </NavLink>
        </li>
        <div className="right-link">
          <li>
            <NavLink className="link" to="/breakfast">
              Breakfast{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/mainDishes">
              Main Dishes{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/soups">
              Soup
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/salads">
              Salads{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/desserts">
              Desserts
            </NavLink>
          </li>
        </div>
      </ul>

      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/mainDishes" element={<MainDishes />} />
        <Route path="/soups" element={<Soup />} />
        <Route path="/salads" element={<Salads />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path='/breakfast/:recipe' element={<FullRecipe />} />
        <Route path='/mainDishes/:recipe' element={<FullRecipe />} />
        <Route path='/soups/:recipe' element={<FullRecipe />} />
        <Route path='/salads/:recipe' element={<FullRecipe />} />
        <Route path='/desserts/:recipe' element={<FullRecipe />} />
      </Routes>
    </div>
  );
}

export default Navbar;
