import { primary } from "../../Utils/colors";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "../../Components/signup_validation/signup.css";
import { Formik } from 'formik';
import axios from 'axios';
import api from "../../api";
import LoginPage from "../login_page/LoginPage";
 

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name,email,phoneNumber,password,passwordConfirm} = e.target.elements;
    console.log({name,email,phoneNumber,password,passwordConfirm})
    setError(false);
    try {
      const res = await axios.post("http://localhost:8000/api/v1/users/signup", {
        name:name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password:password.value,
        passwordConfirm:passwordConfirm.value,
       
      });console.log(res.data);
    // res.data&&window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  const {
    register,
    handleSubmits,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

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
            Already have an account? <u style={{ color: '#404550' }}>Login</u>
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
          
       

          <form className="flex-c-c  form_container" onSubmit={handleSubmit}>
             <input
                id="name"
                type="text"
                placeholder="user name"
                onChange={(e) => setName(e.target.value)}
                className={`form-control ${errors.userName && "invalid"}`}
                {...register("userName", { required: "UserName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("userName");
                }}
              ></input>
              {errors.userName && (
                <small className="text-danger">{errors.userName.message}</small>
              )}
      
          
          <input
              id="email"
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email address is Required" ,
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              
           <input
              id="phoneNumber"
              type="number"
              placeholder="phone Number "
              onChange={(e) => setPhoneNumber(e.target.value)}
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
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)} 
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
              id="passwordConfirm"
              type="password"
              placeholder="confirm password"
              onChange={(e) => setPasswordConfirm(e.target.value)} 
              className={`form-control ${errors.confirmPassword && "invalid"}`}
                {...register("confirmPassword", { required: "Password is Required",
               })}
               onKeyUp={() => {
                trigger("confirmPassword");
              }}
            ></input>
             {errors.confirmPassword && (
                <small className="text-danger">{errors.confirmPassword.message}</small>
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
