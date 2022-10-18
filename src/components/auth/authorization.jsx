import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import "./auth.css";
import { createAccount, login, setAuthorized } from "../../redux/auth-reducer";

const Auth = () => {
  const [formType, setFormType] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    let email = data.email;
    if (data.confirm_password === data.create_password) {
      localStorage.setItem("authorized", JSON.stringify(data));
      dispatch(createAccount(email));
    } else {
      alert("Created and Confirmed Passwords are not similar!");
    }
  };

  const onAuthorize = (data) => {
    localStorage.setItem("authorized", JSON.stringify(data));
    dispatch(login(data));
  };

  if (localStorage.getItem("authorized")) {
    dispatch(setAuthorized(true));
  }

  return (
    <div className="profile">
      <div className="profile_wrapper">
        <div className="autorizing_page">
          <div className="profile_greeting">
            <h1>Hello there!</h1>
            <p>Please sign in or create account to continue</p>
          </div>

          {!formType ? (
            <div className="sign_in">
              <h2>SIGN IN</h2>

              <div className="signin_form">
                <form onSubmit={handleSubmit(onAuthorize)}>
                  <div className="email_sign">
                    <p>Email</p>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && <span>* Email field is required</span>}
                  </div>
                  <div className="password_sign">
                    <p>Password</p>
                    <input
                      type="password"
                      {...register(
                        "password",

                        { required: true }
                      )}
                    />
                    {errors.password && (
                      <span>* Password field is required</span>
                    )}
                  </div>
                  <div className="remember_me">
                    <input type="checkbox" name="rememberme" id="rememberme" />
                    <p>Remeber my details</p>
                  </div>
                  <div className="signin_button">
                    <input className="submit_button" type="submit" />
                  </div>
                </form>
                <div
                  className="password_recovery"
                  onClick={() => setFormType(true)}
                >
                  <a href="#">Or create account</a>
                </div>
              </div>
            </div>
          ) : (
            <div className="create_acc">
              <h2>CREATE ACCOUNT</h2>

              <div className="create_acc_form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <p>First name</p>
                  <input
                    type="text"
                    {...register("first_name", { required: true })}
                  />
                  {errors.first_name && (
                    <span>* First Name field is required</span>
                  )}
                  <p>Last name</p>
                  <input
                    type="text"
                    {...register("last_name", { required: true })}
                  />
                  {errors.last_name && (
                    <span>* Last Name field is required</span>
                  )}
                  <p>Email</p>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>* Email field is required</span>}
                  <p>Create Password</p>
                  <input
                    type="password"
                    {...register(
                      "create_password",
                      { min: 4, max: 8 },
                      { required: true }
                    )}
                  />
                  {errors.create_password && (
                    <span>* Create Password field is required</span>
                  )}
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    {...register(
                      "confirm_password",
                      { min: 4, max: 8 },
                      { required: true }
                    )}
                  />
                  {errors.confirm_password && (
                    <span>* Confirm Password field is required</span>
                  )}

                  <div className="newsletters">
                    <input type="checkbox" {...register("agreement")} />
                    <p>
                      I want to receive Safari newsletters with the best deals
                      and offers
                    </p>
                  </div>

                  <input className="submit_button" type="submit" />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
