import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeIcon } from "../../assets/icons/favoritee.svg";
import { ReactComponent as BaskettIcon } from "../../assets/icons/shopping_cart.svg";
import { addToCart } from "../../redux/cart-reducer";

import { addToFavorite } from "../../redux/favorite-reducer";
import Snackbar from "../snackbar/snackbar";
import "./cards.css";

const Cards = ({ carts_data }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const favoriteEl = useSelector((state) => state.favorite.favorite);

  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState(false);
  const [cart, setCartMess] = useState(false);
  const [buttonColor, changeBtn] = useState(false);

  const addDelFavor = (data) => {
    if (isAuth === false) {
      return alert("You are not Authorized!!!");
    }
    dispatch(addToFavorite(data));
    setCartMess(false);
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
    if (favoriteEl.includes(data)) {
      changeBtn(true);
    }
  };

  const addToCartt = (data) => {
    if (isAuth === false) {
      return alert("You are not Authorized!!!");
    }
    dispatch(addToCart(data));
    setCartMess(true);
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
    if (favoriteEl.includes(data)) {
      changeBtn(true);
    }
  };

  return (
    <>
      {carts_data.map((data) => (
        <div className="card_item" key={data.id}>
          <div className="card_image">
            <div className="onmouse_over">
              <div className="addto_favvor" onClick={() => addDelFavor(data)}>
                <LikeIcon
                  className={buttonColor ? "selectedC" : "notSelect "}
                />
              </div>
              <div className="addto_cart" onClick={() => addToCartt(data)}>
                <p>ADD TO CART</p>
                <BaskettIcon />
              </div>
            </div>

            <img src={data.image} alt={data.image} />
          </div>
          <div className="card_descr">
            <p>{data.description}</p>
            <div className="item_price">
              <p>₦ {data.price}</p>
            </div>
          </div>
        </div>
      ))}

      {!snackbar || (
        <Snackbar props={cart ? "Added to Cart" : "Added to Favorite"} />
      )}
    </>
  );
};

export default Cards;
