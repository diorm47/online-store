import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as RemoveIcon } from "../../assets/icons/remove.svg";
import { deleteFromFavorite } from "../../redux/favorite-reducer";

const Favorite = () => {
  const favorites = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();
  

  const deleteFavorite = (data) => {
    dispatch(deleteFromFavorite(data));
  };

  return (
    <div className="favorite_block">
      <div className="content_block_title">
        <h2>My Favorites</h2>
      </div>
      <div className="favorites">
        {favorites.map((fav) => (
          <div className="favorite" key={fav.id}>
            <div className="item_inform">
              <div className="fav_img">
                <img src={fav.image} alt={fav.description} />
              </div>
              <div className="fav_descrip">
                <h4>{fav.description}</h4>
                <p>₦ 10,000</p>
              </div>
            </div>

            <div className="fav_buttons">
              <div className="buy_now">
                <input type="button" value="BUY NOW" />
              </div>
              <div className="remove" onClick={() => deleteFavorite(fav.id)}>
                <RemoveIcon />
                <p>REMOVE</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
