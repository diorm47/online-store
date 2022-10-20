import React from "react";
import "./order.css";

const Order = () => {
  let orderedItem;
  let adress;
  if (localStorage.getItem("ordered")) {
    orderedItem = localStorage.getItem("ordered");
    orderedItem = JSON.parse(orderedItem);
    adress = orderedItem.shipping_adress;
  }

  return (
    <div className="order_block">
      <div className="content_block_title">
        <h2>My Orders</h2>
      </div>
      <div className="ordered_items">
        {orderedItem ? (
          orderedItem.item.map((item) => (
            <div className="ordered_itm" key={item.id}>
              <div className="ordered_item_inf">
                <div className="first_col">
                  <div className="itm_img">
                    <img src={item.image} alt={item.description} />
                  </div>
                  <div className="item_status">
                    <p>To arrive</p>
                  </div>
                </div>
                <div className="item_inf">
                  <h3>{item.description}</h3>
                  <div className="itm_price">
                    <p>₦ {item.price}</p>
                  </div>
                  <div className="qty_del">
                    <p>Qty: {orderedItem.qnty}</p>
                    <span>Between 20/07/2020 - 25/07/2020</span>
                  </div>
                </div>
              </div>

              <div className="item_payments">
                <h3>Payment details</h3>
                <p>Item's total: ₦{item.price * orderedItem.qnty} </p>
                <p>Delivery fee: ₦{orderedItem.qnty * 100} </p>
                <p>Item's discount: -₦{item.price / 20} </p>
                <p>
                  TOTAL: ₦{" "}
                  {item.price * orderedItem.qnty +
                    orderedItem.qnty * 100 -
                    item.price / 20}
                </p>
              </div>
              <div className="delivery_shipment">
                <h3>Delivery method</h3>
                <p>Door delivery</p>

                <h3 className="shipping_adress">Shipping address</h3>
                <p>{adress.state}</p>
                <p>{adress.city}</p>
                <p>{adress.adress}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <span>Your orders list is empty!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Order;
