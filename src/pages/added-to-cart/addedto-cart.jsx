import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./addedto-cart.css";

import { ReactComponent as LikeIcon } from "../../assets/icons/favoritee.svg";
import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import Snackbar from "../../components/snackbar/snackbar";
import { deleteFromCart } from "../../redux/cart-reducer";
import { addToFavorite } from "../../redux/favorite-reducer";
import { NavLink } from "react-router-dom";
import Auth from "./../../components/auth/authorization";

const AddedToCart = () => {
  const inCart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth === false) {
    return <Auth />;
  }

  const snackBar = () => {
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  const addToFavor = (item) => {
    dispatch(addToFavorite(item));
    dispatch(deleteFromCart(item.id));
    snackBar();
  };

  const deleteItem = (id) => {
    dispatch(deleteFromCart(id));
    snackBar();
  };

  const getInputValue = (event) => {
    const inputValue = event.target.value;
    setQuantity(inputValue);
  };

  const summ = inCart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="added_cart">
      <div className="added_wrapper">
        <h1>Shopping Cart ({inCart.length} item ) </h1>

        {inCart.length ? (
          <>
            <div className="items_tab">
              <div className="tab_headers">
                <div className="i_desc">
                  <p>ITEM DESCRIPTION</p>
                </div>
                <div className="i_quant">
                  <p>QUANTITY</p>
                </div>
                <div className="i_unit">
                  <p>UNIT PRICE</p>
                </div>
                <div className="i_subt">
                  <p>SUB TOTAL</p>
                </div>
              </div>
              {inCart.map((item) => (
                <div className="added_item" key={item.id}>
                  <div className="item_description">
                    <div className="item_image">
                      <img src={item.image} alt={item.description} />
                    </div>
                    <div className="item_desc">
                      <h4>{item.description}</h4>
                      <div className="actions">
                        <div
                          className="to_favorite"
                          onClick={() => addToFavor(item)}
                        >
                          <LikeIcon />
                          <p>MOVE TO FAVORITES</p>
                        </div>
                        <div
                          className="remove_act"
                          onClick={() => deleteItem(item.id)}
                        >
                          <RemoveIcon />
                          <p>REMOVE</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item_quantity">
                    <input
                      defaultValue={1}
                      type="number"
                      onChange={getInputValue}
                    />
                  </div>

                  <div className="unit_price">
                    <p>₦{item.price}</p>
                  </div>
                  <div className="sub_total">
                    <p>₦ {item.price * quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout_actions">
              <div className="total_price">
                <h4>
                  total: <span>₦ {summ * quantity}</span>
                </h4>
                <p>Delivery fee not included yet</p>
              </div>
              <div className="shopping_actions">
                <div className="continue_btn">
                  <p>CONTINUE SHOPPING</p>
                </div>
                <div className="checkout_btn">
                  <NavLink to="checkout">
                    <p>PROCEED TO CHECKOUT</p>
                  </NavLink>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Nothing in Cart</div>
        )}
      </div>
      {!snackbar || <Snackbar props={"Removed from Cart"} />}
    </div>
  );
};

export default AddedToCart;
