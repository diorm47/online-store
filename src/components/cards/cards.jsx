import React from "react";
import { useDispatch } from "react-redux";
import { ReactComponent as LikeIcon } from "../../assets/icons/favoritee.svg";
import price_icon from "../../assets/icons/price_icon.png";
import { ReactComponent as BaskettIcon } from "../../assets/icons/shopping_cart.svg";
import { addToFavorite } from "../../redux/favorite-reducer";
import "./cards.css";

const Cards = ({ carts_data }) => {
  const dispatch = useDispatch();

  const addDelFavor = (data) => {
    dispatch(addToFavorite(data));
  };
  return (
    <>
      {carts_data.map((data) => (
        <div className="card_item" key={data.id}>
          <div className="card_image">
            <div className="onmouse_over">
              <div className="addto_favvor" onClick={() => addDelFavor(data)}>
                <LikeIcon />
              </div>
              <div className="addto_cart">
                <p>ADD TO CART</p>
                <BaskettIcon />
              </div>
            </div>

            <img src={data.image} alt={data.image} />
          </div>
          <div className="card_descr">
            <p>{data.description}</p>
            <div className="item_price">
              <img src={price_icon} alt="price icon" />
              <p>10,000</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
