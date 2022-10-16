import React, { useState } from "react";
import AdressForm from "../../components/shipping-address/adress-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

import { ReactComponent as Checkbox } from "../../assets/icons/checkbox.svg";

function Checkout() {
  const navigate = useNavigate();
  const inCart = useSelector((state) => state.cart.cart);
  const summ = inCart.reduce((acc, item) => acc + item.price, 0);
  const [itemsSumm, setItemsSumm] = useState(0);
  const [gift, setGift] = useState(false);
  const [qtyCalc, setqtyCalc] = useState(1);
  let adress = localStorage.getItem("adress");
  adress = JSON.parse(adress);
  const incrementItem = (cost) => {
    setqtyCalc(qtyCalc + 1);
    setItemsSumm((qtyCalc + 1) * cost);
  };

  const decrementItem = (cost) => {
    setqtyCalc(qtyCalc - 1);
    setItemsSumm((qtyCalc - 1) * cost);
  };

  const summWithQnty = itemsSumm - itemsSumm / 20 + qtyCalc * 100;

  const placeOrder = () => {
    let order = {
      item: inCart,
      qnty: qtyCalc,
      shipping_adress: adress,
    };
    localStorage.setItem("ordered", JSON.stringify(order));
    navigate("/profile/order");
  };

  return (
    <div className="checkout">
      <div className="checkout_wrapper">
        <AdressForm />
        <div className="delivery_payment">
          <div className="delivery_method">
            <div className="delivery_title">
              <Checkbox />
              <p>Delivery method</p>
            </div>
            <div className="delivery_desc">
              <input defaultChecked type="radio" />
              <p>₦ {(inCart.length + qtyCalc) * 100} </p>
              <p>Delivery fee</p>
              <p>Door delivery</p>
            </div>
          </div>
          <div className="payment_method">
            <div className="payment_title">
              <Checkbox />
              <p>Payment Methods</p>
            </div>

            <div className="pay_card">
              <input type="radio" />
              <div className="pay_title">
                <h5>Pay with card </h5>
                <p>
                  (Get 5% off total price and money <br /> back guarantee)
                </p>
              </div>
            </div>

            <p className="pay_instruction">
              You will be redirected to Paystack payment gateway
            </p>

            <div className="pay_on_deliv">
              <div className="title_checkbox">
                <input disabled type="radio" />
                <p>Pay on delivery</p>
              </div>
              <ul>
                <li>
                  Kindly note that we will only accept POS payment option on
                  delivery
                </li>
                <li>You have to make payment before opening package</li>
                <li>
                  Once the seal is broken, item can only be returned if damaged
                  or defective{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="order_summary">
          <div className="summary_block">
            <div className="order_title">
              <h2>ORDER SUMMARY</h2>
            </div>

            <div className="checkout_items">
              {inCart.map((item) => (
                <div className="check_item" key={item.id}>
                  <div className="items_image">
                    <img src={item.image} alt={item.description} />
                  </div>

                  <div className="check_right">
                    <div className="items_desc">
                      <h4>{item.description}</h4>
                    </div>

                    <div className="check_item_price">
                      <p>₦{item.price}</p>
                    </div>
                    <div className="qty_block">
                      <p>Qty</p>
                      <div className="qty_calc">
                        <div
                          className="qty_adder"
                          onClick={() => incrementItem(item.price)}
                        >
                          <span>+</span>
                        </div>

                        <div className="qty_cost">
                          <p>{qtyCalc}</p>
                        </div>
                        <div
                          className="qty_del"
                          onClick={() => decrementItem(item.price)}
                        >
                          <span>-</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="sum_calculs">
              <div>
                <p>Cart sub-total:</p>
                <span> ₦ {summ * qtyCalc}</span>
              </div>
              <div>
                <p>Card discount:</p>
                <span>- ₦ {qtyCalc * (summ / 20)}</span>
              </div>
              <div>
                <p>Delivery fee:</p>
                <span>₦ {inCart.length * 100 * qtyCalc} </span>
              </div>
            </div>

            <div className="total_sum">
              <p>TOTAL</p>
              <span>
                ₦{" "}
                {summWithQnty > 100
                  ? summWithQnty
                  : summ - summ / 20 + inCart.length * 100}
              </span>
            </div>
          </div>

          <div className="gift_quest">
            <div className="gift_ques_btns">
              <p>Is this a gift?</p>
              <div className="quest_btns">
                <div
                  className={gift ? "yes_btn" : "yes_btn btn_backgr"}
                  onClick={() => setGift(false)}
                >
                  <p>Yes</p>
                </div>
                <div
                  className={!gift ? "no_btn" : "no_btn btn_backgr"}
                  onClick={() => setGift(true)}
                >
                  <p>No</p>
                </div>
              </div>
            </div>

            {gift || (
              <div className="gift_descr">
                <p>
                  A complimentary gift receipt will be included in the package,
                  and prices will be hidden on the receipt.
                </p>
              </div>
            )}
          </div>

          <div className="place_order_btn" onClick={placeOrder}>
            <p>PLACE ORDER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
