// import { useState } from "react"
import styled from 'styled-components';
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";
import React,{useContext} from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { Context } from "./../../context/Context";//


const Budget_form = (props) => {
  const { user ,token,dispatch} = useContext(Context);
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate();

  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setOpen(false);
  };
  const handleClickEvent = () => {
    setOpen(true);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit =  async(data) => {
    console.log( user);
    const res = await axios.put("http://localhost:8000/api/v1/users/addbudget", {
      remark: data.remark,
      amount: data.amount,
     
    }, {
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    });
    console.log("------------",res.data.data.user)
    console.log("------()-()",user)

    dispatch({ type: "UPDATE_SUCCESS", payload: res.data});
    navigate('/planning');

    reset();
  };
  return (
    <Section>
    <div className="budgetpage">
        <form className="addbudget" onSubmit={handleSubmit(onSubmit)}>
            <h3 >Add Budget</h3>
            <input
                placeholder="Remark"
                type="name"
                className={`form-control ${errors.remark && "invalid"}`}
                {...register("remark", { required: "Remark is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input field must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("remarke");
                }}
              ></input>
                  {errors.firstName && (
                <small className="text-danger">{errors.firstName.message}</small>
              )}
             <input
              type="number"
              placeholder="Amount"
              className={`form-control ${errors.amount && "invalid"}`}
                {...register("amount", { required: "Amount is Required",
               })}
               onKeyUp={() => {
                trigger("amount");
              }}
            ></input>
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            
            <Button
                className="btn" type="submit" onClick={handleClickEvent} >Add Budget</Button>
              
        </form>
        <Snackbar
        
		anchorOrigin={{
		horizontal: "right",
		vertical: "top",
		}}
		open={open}
    onClose={handleToClose}
		autoHideDuration={3000}
      >
       <Alert severity= {'success'}>
       Budget Created!
    </Alert>
      </Snackbar>
    </div>
    </Section>
  )
}

const Section = styled.section`
.budgetpage{
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
     
      }
    .addbudget {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      padding: 10px;
      @media (max-width: 768px) {
      align-items:center;
      }
      h3{
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
    
    .option{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #41d3fe;
    }
  
    .option:hover{
      background-color: #fff;
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: 2px solid #46833c;
    }
    
    .form-field{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #41d3fe;
    }
  
    .form-field:hover{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border-style: solid;
      border-color: #6977fe;
    }
  
    .btn{
      margin: 10px 0 10px 0;
      padding: 15px;
      font-size: 16px;
      border: none;
      @media (max-width: 768px) {
      margin: 10px 0 10px 0;
      padding: 15px;}
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
    
    button:hover{
      background: #6977fe
    }
   
    
    button:disabled {
      cursor: default;
    }
  }
  
`;

export default Budget_form