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
    </Section>
    
  );
};
const TransferBtn = styled.button`
width: 120px;
height: 40px;
margin: 10px;
border: none;
background-color: #41d3fe;
color: white;
border-radius: 0px;
font-size: 18px;
cursor: pointer;
`

const CancelBtn= styled.button`
width: 120px;
height: 40px;
background-color: white;
color: black;
border: 2px solid black;
font-size: 18px;
cursor: pointer;
`
const Section = styled.section`
  .walletToWallet {
    overflow: hidden;
    background-color: #f0f0f0;
    display: flex;
    min-height: 90vh;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    max-width: 100vw;
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
    }
  }
  
`;

export default WalletToWallet;