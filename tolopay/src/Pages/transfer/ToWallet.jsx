
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { Context } from "../../context/Context";
import axios from "axios";
import { 
  // useState ,
  useContext} from "react";
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {useNavigate } from "react-router-dom";
const WalletToWallet = () => {
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();
  const { token ,user ,dispatch} = useContext(Context);

  // const handleClickToOpen = (event) => {
  //   event.preventDefault();
  //   setOpen(true);
  // };
  
  const handleToClose = () => {
    setOpen(false);
  };



  
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    trigger,
  } = useForm();

  async function makePostRequest(data) {
    try {
      const res =  axios.post(
        "http://localhost:8000/api/v1/transaction/transfer",{
        phoneNumber: data.phoneNumber,
        amount: data.amount,
        remark: data.remark,
        password:data.password,
      },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );
    
    dispatch({ type: "UPDATE_SUCCESS", payload: res.data});
    navigate("/dashboard")
    console.log("////>>>>",data)
    } catch (err) {
      console.log("[Login.js] makePostRequest", err);

      ///some thing set to be true
    }
  }
  const onSubmit = async (data) => {
    // data.preventDefault();
    console.log("-------------------------", data);
    makePostRequest(data);
  };

  return (
    

          <Section>
         
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Title >wallet to wallet</Title>
            <input
                placeholder="Customer Wallet Nmber"  
                className={`form-control ${errors.phoneNumber && "invalid"}`}
                 {...register("phoneNumber", { required: "phoneNumber is Required",
                 pattern: {
                   value: /^\s*(?:\+?(\d[09]))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                   message: "Invalid phoneNumber",
                 },
                })}
                onKeyUp={() => {
                 trigger("phoneNumber");
               }}/>
                     {errors.phoneNumber && (
                <small className="text-danger">{errors.phoneNumber.message}</small>
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
            
            <select className="option" id="remark"  {...register("remark", { required: "remark is Required",})}>
          { user?.data.user?.budget.map(option =>{
        return <option value={`${option.remark}`}>{option.remark}</option>
          
         })}
       
          </select>
            <input 
               placeholder="Password"
               type='password'
                 className={`  ${errors.password && "invalid"}`}
                 {...register("password", { required: "Password is Required",
                })}
                onKeyUp={() => {
                 trigger("password");
               }}
               />
               {errors.password && (
                 <small className="text-danger">{errors.password.message}</small>
               )}
           <button className="btn"  type="submit">
            Transfer
          </button>
        </form>
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
  )
}
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
.form{
height: 400px;
width: 450px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 10px;
align-items: center;

.invalid {
  border:1px solid red !important;
 }
 input, textarea {
  outline: none !important;
  box-shadow: none !important; 
  
}

.required{
  color: red;
}

.text-danger{
  color: red;
}
      h3{
          text-align: center;
          text-decoration: 2.5px underline rgb(58, 135, 190);
          text-underline-offset: 8px;         
      }
  
      .option {
          color: gray;
      }
      option {
          border: 2px;
          color: #000000;
      }
      
    
     .option{
     border: solid rgba(58, 135, 190,0.3);
     background: #f2f2f2;
     padding: 9px;
     border-radius: 3px;
     width: 70%;
 
    }

    .option:hover{
      border: solid rgb(58, 135, 190) ;
      transition: border 0.3s ease;
    }
  
    .option:focus{
      border: solid rgb(58, 135, 190) ;
      transition: border 0.3s ease;
    }
    
    .form-field{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #9dc297;
    }
  
    .form-field:hover{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #46833c;
    }
 
 input{
  border: solid rgba(58, 135, 190,0.3);
  -webkit-appearance: none;
  -ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 70%;
outline: none;
}

.inputMargin{
  margin-bottom: 10px;
}

input:focus::placeholder{
  color: transparent; 
}

input:focus::placeholder{
  color: #f2f2f2;
  transition: color 0.3s ease;
}

input:focus{
  border: solid rgb(58, 135, 190) ;
  transition: border 0.3s ease;
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
      color: rgb(58, 135, 190);
      cursor: pointer;
    }
    
    button {
border-radius: 4px;
border: none;
width: 70%;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 10px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
    }
    
    button:hover{
      background-image: linear-gradient(to bottom right, rgb(58, 135, 190), #71a6b6);
    }
   
    button:disabled {
      cursor: default;
    }
 
  
}
  
`;

const Title = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color:rgb(41, 75, 90);
  margin-bottom: 5px;
 
`;

export default WalletToWallet
