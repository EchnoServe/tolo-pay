 import axios from "axios";
import { useState ,useContext} from "react";
import styled from "styled-components";
import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { 
   
  useNavigate } from "react-router-dom";




import { Context } from "./../../context/Context";//


const WalletToWallet = () => {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const { token ,user ,dispatch} = useContext(Context);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data,values) => {
    console.log(data);
    event.preventDefault();
    makePostRequest(data);
    reset();
  }; 

  const handleClickToOpen = (event) => {
    event.preventDefault();

    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    remark: "",
    password: "",
  });


  const handleRemark= (event) => {
    setValues({ ...values, remark: event.target.value });
  };
  async function makePostRequest(values,data) {
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

  return (
    <Section>
      <div className="walletToWallet">
        <form className="moneyTransfer" >
          <h3>wallet to wallet</h3>
          <input
                placeholder="Customer Phone Nmber"  
                className={`form-control ${errors.phone && "invalid"}`}
                 {...register("phone", { required: "Phone  number is Required",
                 pattern: {
                   value: /^\s*(?:\+?(\d[09]))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                   message: "Invalid phone number",
                 },
                })}
                onKeyUp={() => {
                 trigger("phone");
               }}/>
                     {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
         <input
                placeholder="Amount"
                className={`form-control ${errors.amount && "invalid"}`}
                {...register("amount", { required: "Amount is Required",
                pattern: {
                  value: /^([1-9][0-9]*)$/,
                  message: "Invalid Amount",
                },
               })}
               onKeyUp={() => {
                trigger("amount");
              }}/>
                    {errors.amount && (
               <small className="text-danger">{errors.amount.message}</small>
             )}

          <select className="option" id="remark" onChange={handleRemark}>
     
          { user?.data.user?.budget.map(option =>{
           return <option value={option.remark}>{option.remark}</option>
            
          })}
          </select>

          
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
    <TransferBtn onClick={handleSubmit(onSubmit)}>Transfer</TransferBtn>
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
background-color: rgba(58, 135, 190, 0.7);
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
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    .moneyTransfer {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;

      h3 {
        text-align: center;
        text-decoration: 2.5px underline rgba(58, 135, 190, 0.7);
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
      border: 2px solid rgba(58, 135, 190, 0.7);
    }

    .option:hover {
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid rgba(58, 135, 190, 0.7);
    }

    .form-field {
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: rgba(58, 135, 190, 0.7);
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
      color: rgba(58, 135, 190, 0.7);
      cursor: pointer;
    }

    button {
      background: rgba(58, 135, 190, 0.7);
      color: white;
      cursor: pointer;
      background: rgba(58, 135, 190, 0.7);
    }

    button:hover {
      background: rgba(58, 135, 190, 0.7);
    }

    button:disabled {
      cursor: default;
    }
  }
  
`;

export default WalletToWallet;
