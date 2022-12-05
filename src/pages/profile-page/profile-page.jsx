import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Auth from "./../../components/auth/authorization";
import "./profile-page.css";

import AccountInf from "./acc-inform";
import AdressBook from "./adress-book";
import Order from "./order";
import Favorite from "./favorite";

import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as AdressIcon } from "../../assets/icons/book.svg";
import { ReactComponent as OrderIcon } from "../../assets/icons/order.svg";
import { ReactComponent as FavorIcon } from "../../assets/icons/favor.svg";
import { ReactComponent as SignOutIcon } from "../../assets/icons/sign_out.svg";

const ProfilePage = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };
  if (isAuth === false) {
    return <Auth />;
  }
  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="sidebar">
          <div className="sidebar_title">
            <h1>ACCOUNT DASHBOARD</h1>
          </div>
          <div className="side_menu_list">
            <NavLink to="user">
              <div className="slist_item">
                <UserIcon className="user_icon" />
                <p>Account Information</p>
              </div>
            </NavLink>
            <NavLink to="adress">
              <div className="slist_item">
                <AdressIcon className="adress_icon" />

                <p>Address Book</p>
              </div>
            </NavLink>
            <NavLink to="order">
              <div className="slist_item">
                <OrderIcon className="order_icon" />
                <p>My Orders</p>
              </div>
            </NavLink>
            <NavLink to="favorite">
              <div className="slist_item">
                <FavorIcon className="favor_icon" />
                <p>My Favorites</p>
              </div>
            </NavLink>
          </div>
          <div className="sign_out" onClick={signOut}>
            <SignOutIcon />
            <p>SIGN OUT</p>
          </div>
        </div>
        <div className="content_part">
          <Routes>
          <Route path="/" element={<AccountInf />} />
            <Route path="/user" element={<AccountInf />} />
            <Route path="/adress" element={<AdressBook />} />
            <Route path="/order" element={<Order />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
