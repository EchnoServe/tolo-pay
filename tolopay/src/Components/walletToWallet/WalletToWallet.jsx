<<<<<<< HEAD
import { useState } from 'react';
import React from 'react'
import styled from 'styled-components'
import {VscEyeClosed, VscEye} from 'react-icons/vsc';

const WalletToWallet = () => {

    const [state, setstate] = useState(false);

    const toggleBtn = () => {
        setstate(prevState => !prevState);
    }

  return (
    <Section>
    <div className="container">
      <div className="forms-container">
        <div className="transfer">
          <form action="#" className="transfer-form">
            <h2 className="title">Wallet To Wallet</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Customer Wallet Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Amount" />
            </div>
            <select className='select' style={{paddingLeft: '2.6rem', fontSize:'1.1rem', color: '#aaa'}}>
                <option value="" selected disabled >Remark</option>
                <option value="tuition" className='option'>Tuition</option>
                <option value="food" className='option'>Food</option>
                <option value="sport" className='option'>Sport</option>
                <option value="transfer" className='option'>Transfer</option>
                <option value="other" className='option'>Other</option>
              </select>
            <div className="input-fieldp">
              <i className="fas fa-lock"></i>
              <input className='password-field' type={state ? 'text' : 'password'} placeholder="Password" />
              <button style={{outline: 'none', border: 'none', paddingLeft: '4rem', fontSize: '1.2rem', cursor: 'pointer'}} onClick={toggleBtn}> 
                {state ? <VscEyeClosed /> :
                <VscEye />
                }
              </button>
            </div>
            <input type="submit" value="Transfer" className="btn solid" />
          </form>
        </div>
      </div>

      <div className="panel-container">
        <div className="panel ">
          <div className="content">
            <h3>Wallet To Wallet Money Transfer</h3>
            <p>
              Transfer money in real time with no charge and become a part of new world payment revolution.
            </p>
            <button className="btn transparent transfer-button" >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
=======
import axios from "axios";
import { useState ,useContext} from "react";
import styled from "styled-components";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import Button from "@material-ui/core/Button";
import { 
  // Link, 
  useNavigate } from "react-router-dom";




import { Context } from "./../../context/Context";//


const WalletToWallet = () => {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const { token ,user ,dispatch} = useContext(Context);

  

  const handleClickToOpen = (event) => {
    event.preventDefault();

    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  const [passwordShown, 
    // setPasswordShown
  ] = useState(false);

  const [values, setValues] = useState({
    phoneNumber: "",
    amount: "",
    remark: "",
    password: "",
  });

  const handlePhoneNumber = (event) => {
    setValues({ ...values, phoneNumber: event.target.value });
  };

  const handleAmount = (event) => {
    setValues({ ...values, amount: event.target.value });
  };

  const handlePassword = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleRemark= (event) => {
    setValues({ ...values, remark: event.target.value });
  };
  async function makePostRequest(values) {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/transaction/transfer",
        values,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );
      navigate("/")
      // console.log("////>>>>",data)
    dispatch({ type: "UPDATE_SUCCESS", payload: res.data});

    } catch (err) {
      console.log("[Login.js] makePostRequest", err);

      ///some thing set to be true
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    makePostRequest(values);
  };

  return (
    <Section>
      <div className="walletToWallet">
        <form className="moneyTransfer" >
          <h3>wallet to wallet</h3>
          <input
            onChange={handlePhoneNumber}
            value={values.phoneNumber}
            className="form-field"
            placeholder="phone number"
            name="phoneNumber"
          />
          <input
            onChange={handleAmount}
            value={values.amount}
            className="form-field"
            placeholder="Amount"
            name="amount"
          />

          <select className="option" id="remark" onChange={handleRemark}>
     
          { user?.data.user?.budget.map(option =>{
           return <option value={`${option.remark}`}>{option.remark}</option>
            
          })}
          </select>

          <input
            onChange={handlePassword}
            value={values.password}
            className="form-field"
            placeholder="Password"
            // type="password"
            type={passwordShown ? "text" : "password"}
            name="password"
            required
          />
          <button className="btn"  onClick={handleClickToOpen}>
            Transfer
          </button>
        </form>
      </div>
      <div stlye={{}}>
	<Dialog open={open} onClose={handleToClose}>
		<DialogContent>
		<DialogContentText>
		Are you sure you want to transfer this money?
		</DialogContentText>
		</DialogContent>
		<DialogActions>
    <TransferBtn onClick={handleSubmit}>Transfer</TransferBtn>
		<CancelBtn onClick={handleToClose}
				color="primary" autoFocus>
			close
		</CancelBtn>


         
		</DialogActions>
	</Dialog>
	</div>
>>>>>>> 42c83ac0716679b0bfb9eda0959651a1ee8e6db6
    </Section>
  )
}

const Section = styled.section`

.container {
    position: relative;
    width: 100%;
    background-color: #fff;
    min-height: 100vh;
    overflow: hidden;
  }
  
  .forms-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  
  .transfer {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 75%;
    width: 50%;
    transition: 1s 0.7s ease-in-out;
    display: grid;
    grid-template-columns: 1fr;
    z-index: 5;
  }
  
  form {
    display: flex;
    align-items: center;
<<<<<<< HEAD
    justify-content: center;
    flex-direction: column;
    transition: all 0.2s 0.7s;
    overflow: hidden;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
  
  
  form.transfer-form {
    z-index: 2;
  }
  
  .title {
    font-size: 1.8rem;
    color: #444;
    margin-bottom: 10px;
  }
  
  .input-field {
    max-width: 380px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    display: grid;
    grid-template-columns: 10% 85%;
    padding: 0 0.4rem;
    position: relative;
  }
  
  .input-field i {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
  }


  .input-fieldp{
    max-width: 360px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    display: flex;
    position: relative;
    padding-left: 2rem;
  }

  .password-field{
    padding-left: 2rem;
    outline: none;
    border: none;
    background-color: #f0f0f0;
    padding-left: 1rem;
    font-size: 1.1rem;
  }
  
  .input-field input {
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-size: 1.1rem;
    color: #333;
  }
  
  .input-field input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .input-fieldp input::placeholder {
    color: #aaa;
    font-weight: 500;
  }

  .select{
    outline: none;
    border: none;
    max-width: 390px;
    width: 100%;
    background-color: #f0f0f0;
    margin: 10px 0;
    height: 55px;
    padding: 0 0.4rem;
    position: relative;
  }

  
  .btn {
    width: 150px;
    background-color: #1f77b4;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;
  }
  
  .btn:hover {
    background-color: #083453;
  }
  .panel-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  
  .container:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background: #1f77b4;
    transition: 1.8s ease-in-out;
    border-radius: 50%;
    z-index: 6;
  }
  
  
  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    text-align: left;
    z-index: 6;
  }
  
  .panel {
    pointer-events: all;
    padding: 0rem 20% 25rem 25%;
  }
 
  
  .panel .content {
    color: #fff;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }
  
  .panel h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;
  }
  
  .panel p {
    font-size: 1rem;
    padding: 0.7rem 0;
  }
  
  .btn.transparent {
    margin: 0;
    background: none;
    border: 1px solid #fff;
    width: 140px;
    height: 41px;
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .right-panel .image,
  .right-panel .content {
    transform: translateX(800px);
  }
  
  
  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 100vh;
    }
    .transfer {
      width: 100%;
      top: 95%;
      transform: translate(-50%, -100%);
      transition: 1s 0.8s ease-in-out;
    }
  
    .transfer,
    .container.transfer {
      left: 45%;
    }
  
    .panel-container {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }
  
    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
      grid-column: 1 / 2;
    }
  
    .right-panel {
      grid-row: 3 / 4;
    }
  
  
    .image {
      width: 200px;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.6s;
    }
  
    .panel .content {
      padding-right: 15%;
      transition: transform 0.9s ease-in-out;
      transition-delay: 0.8s;
    }
  
    .panel h3 {
      font-size: 1.2rem;
    }
  
    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
  
    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }
  
    .container:before {
      width: 1500px;
      height: 1500px;
      transform: translateX(-50%);
      left: 30%;
      bottom: 68%;
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
    }
  
    .right-panel .image,
    .right-panel .content {
      transform: translateY(300px);
    }
  
    .container.signin-signup {
      top: 5%;
      transform: translate(-50%, 0);
=======
    margin-top: 10px;

    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;

      h3 {
        text-align: center;
        text-decoration: 2.5px underline #46833c;
        text-underline-offset: 8px;
      }

      .option {
        color: gray;
      }
      option {
        border: 2px;
        color: #000000;
      }
    }

    .option {
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #41d3fe;
    }

    .option:hover {
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #6977fe;
    }

    .form-field {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #41d3fe;
    }

    .form-field:hover {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #6977fe;
    }

    .btn {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: none;
    }

    input {
      background: white;
      padding: 15px;
      margin: 10px 0px;
      width: 400px;
    }

    .pass-wrapper {
      position: relative;
      display: flex;
      margin-bottom: 14px;
    }

    i {
      position: absolute;
      top: 38%;
      right: 16%;
    }
    i:hover {
      color: #00fcb6;
      cursor: pointer;
    }

    button {
      background: #46833c;
      color: white;
      cursor: pointer;
      background: linear-gradient(to right bottom, #41d3fe, #6977fe);
    }

    button:hover {
      background: #6977fe;
    }

    button:disabled {
      cursor: default;
>>>>>>> 42c83ac0716679b0bfb9eda0959651a1ee8e6db6
    }
  }
  
  @media (max-width: 570px) {
    form {
      padding: 0 1.5rem;
    }
  
    .image {
      display: none;
    }
    .panel .content {
      padding: 0.5rem 1rem;
    }
    .container {
      padding: 1.5rem;
    }
  
    .container:before {
      bottom: 72%;
      left: 50%;
    }

  }
  

`;

export default WalletToWallet