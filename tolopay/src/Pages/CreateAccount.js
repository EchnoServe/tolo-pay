import React from "react";
import { gray, gray80, primary } from "../Utils/colors";

const CreateAccount = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1>Create Account</h1>
          <p>
            Already have an account? <u style={{ color: primary }}>Login</u>
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <button
              style={{
                padding: "12px 10px",
                border: `1px solid ${primary}`,
                backgroundColor: "transparent",
              }}
            >
              Sign up with Google
            </button>
            <button
              style={{
                padding: "12px 10px",
                border: `1px solid ${primary}`,
                backgroundColor: "transparent",
              }}
            >
              Sign up with FaceBook
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              width: "100%",
            }}
          >
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
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <input
                type="text"
                placeholder="First name"
                style={{
                  padding: "12px 10px",
                  border: `1px solid ${primary}`,
                }}
              ></input>
              <input
                type="text"
                placeholder="Last name"
                style={{
                  padding: "12px 10px",
                  border: `1px solid ${primary}`,
                }}
              ></input>
            </div>
            <input
              type="text"
              placeholder="name@gmail.com"
              style={{
                width: "100%",
                padding: "12px 10px",
                border: `1px solid ${primary}`,
              }}
            ></input>
            <input
              type="password"
              placeholder="password"
              style={{
                width: "100%",
                padding: "12px 10px",
                border: `1px solid ${primary}`,
              }}
            ></input>
          </form>
        </div>
        <div>Image</div>
      </div>
    </>
  );
};

export default CreateAccount;
