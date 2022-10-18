import React from "react";
import { useForm } from "react-hook-form";

const AccountInf = () => {
  let authorized = localStorage.getItem("authorized");
  authorized = JSON.parse(authorized);

  console.log(authorized);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("authorized", JSON.stringify(data));
    window.location.reload();
  };
  return (
    <div className="user_inf">
      <div className="content_block_title">
        <h2>User Information</h2>
      </div>
      <div className="info_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>First name</p>
          <input
            type="text"
            defaultValue={authorized.first_name}
            {...register("first_name", { required: true })}
          />
          {errors.first_name && <span>* First Name field is required</span>}
          <p>Last name</p>
          <input
            type="text"
            defaultValue={authorized.last_name}
            {...register("last_name", { required: true })}
          />
          {errors.last_name && <span>* Last Name field is required</span>}
          <p>Email</p>
          <input
            type="email"
            defaultValue={authorized.email}
            {...register("email", { required: true })}
          />
          {errors.email && <span>* Email field is required</span>}

          <p>Gender</p>
          <select
            defaultValue={authorized.gender}
            className="acc_gender"
            {...register("gender")}
          >
            <option value="male">Male</option>
            <option value="famale">Famale</option>
            <option value="others">Others</option>
          </select>

          <p>Date of birth</p>
          <input
            defaultValue={authorized.birth}
            type="date"
            {...register("birth", { required: true })}
          />
          {errors.birth && <span>* Date of birth field is required</span>}

          <div className="newsletters">
            <input
              className="newsletter_input"
              type="checkbox"
              {...register("agreement")}
            />
            <p>Newsletter subsciption</p>
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

export default AccountInf;
