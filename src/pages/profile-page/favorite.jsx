import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import Snackbar from "../../components/snackbar/snackbar";
import { addToCart } from "../../redux/cart-reducer";
import { deleteFromFavorite } from "../../redux/favorite-reducer";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorite.favorite);
  const [snackbar, setSnackbar] = useState(false);
  const dispatch = useDispatch();

  const deleteFavorite = (data) => {
    dispatch(deleteFromFavorite(data));
    setSnackbar(true);
    setTimeout(() => {
      setSnackbar(false);
    }, 1200);
  };

  const addItemToCarrt = (data) => {
    dispatch(addToCart(data));
    dispatch(deleteFromFavorite(data.id));
  };

  return (
    <div className="favorite_block">
      <div className="content_block_title">
        <h2>My Favorites</h2>
      </div>
      <div className="favorites">
        {favorites.length ? (
          favorites.map((fav) => (
            <div className="favorite" key={fav.id}>
              <div className="item_inform">
                <div className="fav_img">
                  <img src={fav.image} alt={fav.description} />
                </div>
                <div className="fav_descrip">
                  <h4>{fav.description}</h4>
                  <p>₦ {fav.price}</p>
                </div>
              </div>

              <div className="fav_buttons">
                <div className="buy_now">
                  <NavLink to="/cart">
                    <input
                      type="button"
                      value="BUY NOW"
                      onClick={() => addItemToCarrt(fav)}
                    />
                  </NavLink>
                </div>
                <div className="remove" onClick={() => deleteFavorite(fav.id)}>
                  <RemoveIcon />
                  <p>REMOVE</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Your Favorites is empty</div>
        )}
      </div>
      {!snackbar || <Snackbar props={"Removed from Favorite"} />}
    </div>
  );
};

export default Favorite;
