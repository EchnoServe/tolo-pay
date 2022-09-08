import React from "react";

const CreateAccount = () => {
  return (
    <>
      <div>
        <h1>Create Account</h1>
        <p>
          Already have an account? <span>Login</span>
        </p>
        <div>
          <button>Google</button>
          <button>FaceBook</button>
        </div>
        <div>
          <div></div>
          <span>or</span>
          <div></div>
        </div>
        <form>
          <div>
            <input type="text" placeholder="First name"></input>
            <input type="text" placeholder="Last name"></input>
          </div>
          <input type="text" placeholder="name@gmail.com"></input>
          <input type="password" placeholder="password"></input>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
