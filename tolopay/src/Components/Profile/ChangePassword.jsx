import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { useForm } from "react-hook-form";
import { Context } from "../../context/Context";
import api from "../../api/api"
import { CloseButton, Popup, PopupInner } from '../commonStyles';
import axios from 'axios';
 
 

export default function ChangePassword() {
   
   const { user, dispatch ,token} = useContext(Context);
  const [status, sentStatus ] = useState('');


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  
  const onSubmit = async (data) => {
        console.log("<>",data);
    console.log("<>",user.data.user.id)
      const res = await axios.post("http://localhost:8000/api/v1/users/user-change-password", {
      id: user.data.user._id,
      oldPassword: data.oldpassword,
      password: data.newpassword,
      confirmPassword: data.message,
    }, 
    {
    headers: {
      Authorization:
        `Bearer ${token}`,
    },
  });
    
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    reset();
  };
 

  return (
    <div>
    {status !== '' ?
    <Popup onChange={sentStatus}>
          <PopupInner>
            <h2>
             {status}
            </h2>
            <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <CloseButton onClick={() => sentStatus('')} >Close</CloseButton>
            </div>
            
          </PopupInner>
          
        </Popup>
    : ''}
     <Title>Details</Title>
     <Form onSubmit={handleSubmit(onSubmit)}>
     <Input>
     <InputWrap>
     <Label>Enter old password</Label>
     <input placeholder=' ' type='password' 
     className={`form-control ${errors.oldpassword && "invalid"}`}
     {...register("oldpassword", { required: "Old password is Required",
    })}
    onKeyUp={() => {
     trigger("oldpassword");
   }}
   />
   {errors.oldpassword && (
     <small className="text-danger">{errors.oldpassword.message}</small>
   )}
     </InputWrap>

     <InputWrap>
     <Label>Enter new password</Label>
     <input placeholder=' ' type='password'
     className={`form-control ${errors.message && "invalid"}`}
     {...register("message", { required: "Password is Required",
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
     trigger("message");
   }}
   />
   {errors.message && (
     <small className="text-danger">{errors.message.message}</small>
   )}
     </InputWrap>

     <InputWrap>
     <Label>Confirm new password </Label>
     <input placeholder=' ' type='password'
     className={`form-control ${errors.newpassword && "invalid"}`}
     {...register("newpassword", { required: "Please confirm password",
    })}
    onKeyUp={() => {
     trigger("newpassword");
   }}
   />
   {errors.newpassword && (
     <small className="text-danger">{errors.newpassword.message}</small>
   )}
     </InputWrap>
     </Input> 


     <BtnWrapper>
      <Button type='submit'>Change</Button>
     </BtnWrapper>

     </Form>
      
    </div>
  )
}



const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1px;
 
input{
border: solid #f2f2f2;
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 200px;
outline: none;
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

.invalid {
    border:1px solid red !important;
   }
   input, textarea {
    outline: none !important;
    box-shadow: none !important; 
    
  }

  .text-danger{
  color: red;
}

`;

const  InputWrap = styled.div`
display: flex;
flex-direction: column;
padding: 0 3px 3px 3px;
`;

const Input = styled.div`
margin-top: 5px;
display: block; 
align-items: flex-start;
padding: 0px;


@media screen and (min-width: 320px) and (max-width: 1080px){
  display: block;
  justify-content: center;
  align-items: center;
  width: 300px;
  

  input{
    width: 75%;
  }
}

`;



const Title = styled.h1`
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  color:rgba(58, 135, 190,0.8);
  padding-left: 15px;
`;

const Label = styled.label`

  font-size: 14px;
  text-decoration: none;
  font-weight: 550;
  padding: 9px;
  color:rgba(41, 75, 90,0.9);
  

`;

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-left: 8px;
 `;

const Button = styled.button`
margin-top: 16px;
border-radius: 4px;
border: none;
width: 150px;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 8px 12px;
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


