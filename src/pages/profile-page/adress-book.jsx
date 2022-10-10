import React, { useState } from "react";
import AdressForm from "./../../components/shipping-address/adress-form";

const AdressBook = () => {
  const [adressForm, setAdressForm] = useState(false);
  return (
    <div className="adress_block">
      <div className="content_block_title">
        <h2>Address Book</h2>
      </div>

      {!adressForm || <AdressForm />}

      {adressForm || (
        <div className="setFormButton">
          <input
            type="button"
            value="ADD NEW ADDRESS"
            onClick={() => setAdressForm(true)}
          />
        </div>
      )}
    </div>
  );
};

export default AdressBook;
