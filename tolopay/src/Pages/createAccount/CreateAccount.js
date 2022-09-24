import React from "react";
import { primary } from "../../Utils/colors";
import "./createAccount.css";

const CreateAccount = () => {
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
          <form className="flex-c-c  form_container">
            <div className="flex-c-r form_input_box">
              <input
                type="text"
                placeholder="First name"
                className="p-12-10"
              ></input>
              <input
                type="text"
                placeholder="Last name"
                className="p-12-10"
              ></input>
            </div>
            <input
              type="text"
              placeholder="name@gmail.com"
              className="input p-12-10"
            ></input>
            <input
              type="text"
              placeholder="phone Number "
              className="input p-12-10"
            ></input>

            <input
              type="password"
              placeholder="password"
              className="input p-12-10"
            ></input>
            <input
              type="password"
              placeholder="password confirm"
              className="input p-12-10"
            ></input>
            <button className="p-12-10 " id="signup">
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
