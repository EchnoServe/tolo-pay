import { primary } from "../../Utils/colors";
import "./createAccount.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";//
import { Link, useNavigate } from "react-router-dom";
import api from '../../api/api'
import axios from 'axios';
import LoginPage from "../login_page/LoginPage";
import Navbar from "../../Components/landingPage_component/Navbar";
 

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const navigate=useNavigate();
  const { dispatch, isFetching, error } = useContext(Context);

  const onSubmit =  async(data) => {
    // e.preventDefault()
    dispatch({ type: "LOGIN_START" });

    try {
      
      const res = await api.post("/users/signup", {
        name:data.firstName,
        username:data.lastName,
        email: data.email,
        phoneNumber: data.phone,
        password:data.password,
        passwordConfirm:data.passwordConfirm,
       
      });
      dispatch({ type: "SUCCESS", payload: res.data });
      navigate('/dashboard');
      reset();
    } catch (error) {
      console.log(error)
      dispatch({ type: "FAILED" });
    }
    
    

  };
  return (
    <>
      <Navbar/>
      <div className="mcontainer">
      <div className="flex-c-r container">
        <div className="flex-c-c form">
          <h1>Create Account</h1>
          {error && <small style={{color:"red"}}>Something went wrong...</small>}
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
                borderBottom: `1px solid #6977fe`,
                width: "100%",
              }}
            ></div>
            <span>or</span>
            <div
              style={{
                borderBottom: `1px solid #6977fe`,
                width: "100%",
              }}
            ></div>
          </div>
          
       

          <form className="flex-c-c  form_container" onSubmit={handleSubmit(onSubmit)}>
            
             <input
                placeholder="FullName"
                type="name"
                className={`form-control ${errors.firstName && "invalid"}`}
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
              placeholder="user name"
                type="name"
                className={`form-control ${errors.lastName && "invalid"}`}
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
              placeholder="email"
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
              placeholder="Password"
              type='password'
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", { required: "Password is Required",
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
                trigger("password");
              }}
              ></input>
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
                <input
              type="password"
              placeholder="confirm password"
              className={`form-control ${errors.passwordConfirm && "invalid"}`}
                {...register("passwordConfirm", { required: "Password is Required",
               })}
               onKeyUp={() => {
                trigger("passwordConfirm");
              }}
            ></input>
             {errors.passwordConfirm && (
                <small className="text-danger">{errors.passwordConfirm.message}</small>
              )}
            <button className="p-12-10 " type="submit" id="signup" value="Sign Up">
              Sign up
            </button>
          </form>
           
           
        </div>
      
      </div>
      </div>
    </>
  );
};

export default CreateAccount;