import { primary } from "../../Utils/colors";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../../Components/signup_validation/signup.css";

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <header className="flex-c-r header">
        <div id="logo"></div>
        <nav>
          <ul className="flex-c-r header_ul">
            <li>Why ToloPay</li>
            <li>How it work</li>
            <li>Pricing</li>
            <li id="login_btn" className="p-12-10">
              Login
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex-c-r container">
        <div className="flex-c-c form">
          <h1>Create Account</h1>
          <p>
            Already have an account? <u style={{ color: primary }}>Login</u>
          </p>
          <div className="flex-c-c signup_btns">
            <div className="flex-c-r p-12-10 btn">
              {" "}
              <span className="btn_img btn_img--google"></span>
              Sign up with Google
            </div>
            <div className="flex-c-r p-12-10 btn">
              {" "}
              <span className="btn_img btn_img--facebook"></span>Sign up with
              FaceBook
            </div>
          </div>

          <div className="flex-c-r or_line ">
            <div
              style={{
                borderBottom: `1px solid ${primary}`,
                width: "100%",
              }}
            ></div>
            <span>or</span>
            <div
              style={{
                borderBottom: `1px solid ${primary}`,
                width: "100%",
              }}
            ></div>
          </div>
          <form className="flex-c-c  form_container" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="name"
                placeholder="First name"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("firstName", { required: "FirstName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("firstName");
                }}
              ></input>
              {errors.firstName && (
                <small className="text-danger">{errors.firstName.message}</small>
              )}
              <input
                type="name"
                placeholder="Last name"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("lastName", { required: "LastName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("lastName");
                }}
              ></input>
              {errors.lastName && (
                <small className="text-danger">{errors.lastName.message}</small>
              )}
            <input
              type="email"
              placeholder="name@gmail.com"
              className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email address is Required" ,
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
            ></input>
            {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            <input
              type="number"
              placeholder="phone Number "
              className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone  number is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d[09]))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone number",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
            ></input>
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            <input
              type="password"
              placeholder="password"
              className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum allowed length is 16 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
            ></input>
             {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            <input
              type="password"
              placeholder="password confirm"
              className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
                maxLength: {
                  value: 16,
                  message: "Maximum allowed length is 16 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }} ></input>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            <button className="p-12-10 " type="submit" id="signup">
              Sign up
            </button>
          </form>
        </div>
        <div className="flex-c-c img_container">
          <section>
            <h1>Welcome to Tolopay</h1>
            <p>
              create account to experience the faster money transfer platform
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
