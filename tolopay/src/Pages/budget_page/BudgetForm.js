// import { useState } from "react"
import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link as RLink} from "react-router-dom"
import { useForm } from "react-hook-form";
import { Context } from "./../../context/Context";//
import React,{useContext} from "react";
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
 

const Budget_form = (props) => {
    const { user ,token,dispatch} = useContext(Context);
     
    const navigate=useNavigate();
  
 
const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
  trigger,
} = useForm();

const onSubmit =  async(data) => {
  console.log(data,"<><><>");
  const res = await axios.put("http://localhost:8000/api/v1/users/addbudget", data, {
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  });

  dispatch({ type: "UPDATE_SUCCESS", payload: res.data});
  navigate('/budget');

  reset();
};
  return (
   <Con>
    <Container>
      <SubContainer>
      <Button2 to = "/budget" ><ArrowBackIcon/></Button2>
        <SectionOne>
        
          <ColumnTwo1>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Title >Add Budget </Title>

            <input
                placeholder="Budget Name"
                type="name"
                className={`form-control ${errors.remark && "invalid"}`}
                {...register("remark", { required: "Budget name is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Budget name must only start letters",
                }})}
                onKeyUp={() => {
                  trigger("remark");
                }}
              ></input>
                  {errors.remark && (
                <small className="text-danger">{errors.remark.message}</small>
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
              {errors.amount && (
                <small className="text-danger">{errors.amount.message}</small>
              )}
            
            <Button type="submit" >Add Budget</Button>
              
        </Form>
    
        </ColumnTwo1>
        </SectionOne>
      </SubContainer> 
    </Container>
    </Con>
   
  )
}


const Container = styled.div`
  width: 90%;
  margin: 1rem 4rem 1rem 4rem;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`;


const SubContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
 flex-direction: column;
  /* gap: 4rem; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  gap: 2rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
// const ColumnOne1 = styled.div`
//   display: flex;
//   gap: 3rem;
//   margin: 0;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
//     width: 100%;
//   }
// `;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const Form = styled.form`
height: 400px;
width: 450px;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: center;
align-items: center;
background-color: rgba(58, 135, 190,0.2);
border: 1px solid rgba(58, 135, 190,0.1);
border-radius: 4px;

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

input{
border: solid rgba(58, 135, 190,0.3);
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px 0 9px 9px;
border-radius: 3px;
width: 70%;
outline: none;
}

.inputMargin{
  /* margin-bottom: 10px; */
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

`;

const Title = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color:rgb(41, 75, 90);
  margin-bottom: 5px;
 
`;


const Button = styled.button`
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

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`;

const Button2 = styled(RLink)`
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
background: rgb(58, 135, 190);
white-space: nowrap;
padding-top: 12px;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
align-items: center;
justify-content: center;

&:hover{
  background: rgba(58, 135, 190, 0.7);
}

`;

export default Budget_form
