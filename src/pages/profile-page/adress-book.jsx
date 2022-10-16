import React, { useState } from "react";
import AdressForm from "./../../components/shipping-address/adress-form";
import "./adress-book.css";

const AdressBook = () => {
  const [adressForm, setAdressForm] = useState(false);
  const [editMode, setEdit] = useState(false);

  let adress = localStorage.getItem("adress");
  adress = JSON.parse(adress);

  const delDefshAdress = () => {
    localStorage.removeItem("adress");
    window.location.reload();
  };

  const setEditMode = () => {
    setEdit(true);
    setAdressForm(false);
  };
  const setAdresForm = () => {
    setAdressForm(true);
    setEdit(false);
  };

  return (
    <div className="adress_block">
      <div className="content_block_title">
        <h2>Address Book</h2>
      </div>

      {adress ? (
        <div className="default_adress">
          <div className="adress_inf">
            <div className="adress_title">
              {adress.agreement ? (
                <h3>Default Shipping Address</h3>
              ) : (
                <h3>Shipping Address</h3>
              )}
            </div>
            <p>{adress.city}</p>
            <p>{adress.adress}</p>
            <p>{adress.state}</p>
            <p>{adress.country}</p>
            <p>{adress.phone}</p>
          </div>
          <div className="adress_actions">
            <input type="button" value="Edit" onClick={() => setEditMode()} />
            <input
              className="del"
              type="button"
              onClick={delDefshAdress}
              value="Delete"
            />
          </div>
        </div>
      ) : (
        <div className="default_adress_notice">No default adresses</div>
      )}
      {!adressForm || <AdressForm />}
      {!editMode || <AdressForm {...adress} />}

      {adressForm || (
        <div className="setFormButton">
          <input
            type="button"
            value="ADD NEW ADDRESS"
            onClick={() => setAdresForm()}
          />
        </div>
      )}
    </div>
  );
};

export default AdressBook;
