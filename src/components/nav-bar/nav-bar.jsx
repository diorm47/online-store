import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./nav-bar.css";
import TextField from "@mui/material/TextField";

import main_logo from "../../assets/icons/main_logo.png";
import search_glass from "../../assets/icons/search_glass.png";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as BasketIcon } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/favor.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <div className="nav_list">
          <div className="home">
            <NavLink to="/home">Home</NavLink>
          </div>

          <div className="clothes_page">
            <NavLink to="/clothes">Clothes</NavLink>
          </div>
          <div className="shoes_page">
            <NavLink to="/shoes">Shoes</NavLink>
          </div>
          <div className="accessories">
            <NavLink to="/accessories">Accessories</NavLink>
          </div>
        </div>
        <div className="nav_logo">
          <NavLink to="/home">
            <img src={main_logo} alt="Navbar logo" />
          </NavLink>
        </div>

        <div className="nav_funcs">
          <div className="search_input">
            <TextField
              id="standard-basic"
              label="Search..."
              variant="standard"
            />
            <img src={search_glass} alt="Search glass icon" />
          </div>
          <div className="user_profile">
            <NavLink to="/profile">
              <UserIcon />
            </NavLink>
          </div>
          <div className="cart">
            <NavLink to="/cart">
              <BasketIcon />
            </NavLink>
          </div>
          <div className="like">
            <NavLink to="/profile/favorite">
              <HeartIcon />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
