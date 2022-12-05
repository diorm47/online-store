import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeIcon } from "../../assets/icons/favoritee.svg";
import { ReactComponent as BaskettIcon } from "../../assets/icons/shopping_cart.svg";
import { addToCart, deleteFromCart } from "../../redux/cart-reducer";

import {
  addToFavorite,
  deleteFromFavorite,
} from "../../redux/favorite-reducer";
import Snackbar from "../snackbar/snackbar";
import "./cards.css";

const Cards = ({ carts_data }) => {
  const favoriteEl = useSelector((state) => state.favorite.favorite);
  const inCart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarRemove, setSnackbarRemove] = useState(false);
  const [cart, setCartMess] = useState(false);

  const addDelFavor = (data) => {
    const isItemInFav = favoriteEl.some((item) => item.id === data.id);
    if (isItemInFav) {
      dispatch(deleteFromFavorite(data.id));
      setSnackbarRemove(true);
      setTimeout(() => {
        setSnackbarRemove(false);
      }, 1200);
    } else {
      dispatch(addToFavorite(data));
    }

    setCartMess(false);
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  const addToCartt = (data) => {
    const isItemInCart = inCart.some((item) => item.id === data.id);
    if (isItemInCart) {
      dispatch(deleteFromCart(data.id));
      setSnackbarRemove(true);
      setTimeout(() => {
        setSnackbarRemove(false);
      }, 1200);
    } else {
      dispatch(addToCart(data));
    }

    setCartMess(true);
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  return (
    <>
      {carts_data.map((data) => (
        <div className="card_item" key={data.id}>
          <div className="card_image">
            <div className="onmouse_over">
              <div className="addto_favvor" onClick={() => addDelFavor(data)}>
                <LikeIcon
                  className={
                    favoriteEl.some((item) => item.id === data.id)
                      ? "selectedC"
                      : "notSelect "
                  }
                />
              </div>
              <div
                className={
                  inCart.some((item) => item.id === data.id)
                    ? "addto_cart addedd_to_cart"
                    : "addto_cart"
                }
                onClick={() => addToCartt(data)}
              >
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
      {!snackbarRemove || (
        <Snackbar
          props={cart ? "Removed from Cart" : "Removed from Favorite"}
        />
      )}
    </>
  );
};

export default Cards;
