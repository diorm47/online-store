import TextField from "@mui/material/TextField";
import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import "./nav-bar.css";

import main_logo from "../../assets/icons/main_logo.png";
import search_glass from "../../assets/icons/search_glass.png";
import menu_icon from "../../assets/icons/menu_icon.png";
import menu_close from "../../assets/icons/menu_close.png";
import { ReactComponent as HeartIcon } from "../../assets/icons/favor.svg";
import { ReactComponent as BasketIcon } from "../../assets/icons/shopping_cart.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { useDispatch, useSelector } from "react-redux";
import { searchingItem } from "../../redux/search-reducer";

const Navbar = () => {
  const inCart = useSelector((state) => state.cart.cart);
  const inFav = useSelector((state) => state.favorite.favorite);
  const [menuActive, setActive] = useState(false);
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(searchingItem(value));
  };

  return (
    <div className="navbar">
      <div className={menuActive ? "nav_wrapper  " : "nav_wrapper hide_menu"}>
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
              onChange={(e) => onSearch(e.target.value)}
            />
            <img src={search_glass} alt="Search glass icon" />
          </div>
          <div className="user_profile">
            <NavLink to="/profile">
              <UserIcon />
            </NavLink>
          </div>
          <div className="cart">
            {!inCart.length || (
              <div className="selected_length">
                <p>{inCart.length}</p>
              </div>
            )}

            <NavLink to="/cart">
              <BasketIcon />
            </NavLink>
          </div>
          <div className="like">
            {!inFav.length || (
              <div className="selected_length">
                <p>{inFav.length}</p>
              </div>
            )}
            <NavLink to="/profile/favorite">
              <HeartIcon />
            </NavLink>
          </div>
        </div>

        <div className="menu_close" onClick={() => setActive(false)}>
          <img src={menu_close} alt="menu icon " />
        </div>
      </div>
      <div className="menu_icon" onClick={() => setActive(true)}>
        <img src={menu_icon} alt="menu icon " />
      </div>
    </div>
  );
};

export default Navbar;
