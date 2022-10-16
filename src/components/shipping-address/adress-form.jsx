import React from "react";
import "./adress-form.css";
import { useForm } from "react-hook-form";

const AdressForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("adress", JSON.stringify(data));
    window.location.reload();
  };
  return (
    <div className="adress_form">
      <div className="adress_form_wrapper">
        <h3>Shipping Address</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Email</p>
          <input
            defaultValue={props.email}
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>* Email field is required</span>}
          <p>Full name</p>
          <input
            defaultValue={props.full_name}
            type="text"
            {...register("full_name", { required: true })}
          />
          {errors.full_name && <span>* Full name field is required</span>}

          <p>Adress</p>
          <textarea
            defaultValue={props.adress}
            className="Adress_area"
            {...register("adress", { required: true })}
          />
          {errors.adress && <span>* Adress field is required</span>}

          <p>State/Province</p>
          <select defaultValue={props.state} {...register("state")}>
            <option value="tashkent">Tashkent</option>
            <option value="namangan">Namangan</option>
            <option value="fergana">Fergana</option>
          </select>

          <p>City</p>
          <select defaultValue={props.city} {...register("city")}>
            <option value="tashkent">Tashkent</option>
            <option value="namangan">Namangan</option>
            <option value="fergana">Fergana</option>
          </select>

          <p>Phone number</p>
          <input
            defaultValue={props.phone}
            type="text"
            {...register("phone", { required: true })}
          />
          {errors.phone && <span>* Phone number field is required</span>}

          <div className="set_default">
            <input
              defaultChecked={props.agreement}
              className="set_default_input"
              type="checkbox"
              {...register("agreement")}
            />
            <p>Set default shipping address</p>
          </div>

          <div className="save_button">
            <input
              className="submit_button"
              type="submit"
              value="save changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdressForm;
