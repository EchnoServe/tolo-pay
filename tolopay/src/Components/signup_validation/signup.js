import { useForm } from "react-hook-form";
import React, { useState } from "react";


import styled from "styled-components";
import "./signup.css";
import axios from "axios";



const Button = styled.button`
width: 250px;
height: 40px;
font-size: 20px;
border-radius: 6px;
border: none;
padding-left: 10px;
margin-top: 10px;
`
const Form = styled.div`
align-content: center;
width: 500px;
height: 600px;
margin-top: 5%;
margin-left: 35%;
padding: 7%;
background-color: rgb(185, 241, 210);
box-shadow: 3px 3px 10px;
font-family: Arial, Helvetica, sans-serif;
display: flex;
flex-direction: column;
`

const Title = styled.div`
color: rgb(40, 37, 37);
flex: 20%;
width: 100%;
display: grid;
place-items: center;
font-size: 35px;
`

const Inputs =styled.div`
flex: 80%;
width: 100%;
`

const Input =styled.input`
width: 250px;
    height: 40px;
    font-size: 20px;
    border-radius: 6px;
    border: none;
    padding-left: 10px;
    margin-top: 10px;
`
function App() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit =  async(data) => {
    console.log(data);
    const res = await axios.post("http://localhost:8000/api/v1/users/signup", {
      name:data.firstName + data.lastName,
      email: data.email,
      phoneNumber: data.phone,
      password:data.password,
      passwordConfirm:data.password,
     
    });
    
    console.log(res.data);

    reset();
  };

  return (
    <Form>
      <Title>Create Account</Title>
      <Inputs>
          <form onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
              
              <Input
              placeholder="First Name"
                type="name"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("firstName", { required: "FirstName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("firstName");
                }}
              />
              {errors.firstName && (
                <small className="text-danger">{errors.firstName.message}</small>
              )}
            </div>

            <div className="form-group">
              
              <Input
              placeholder="Last Name"
                type="name"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("lastName", { required: "LastName is Required" ,
                pattern: {
                value: /^[A-Za-z]/,
                message: "Invalid input name must only contain letters",
                }})}
                onKeyUp={() => {
                  trigger("lastName");
                }}
              />
              {errors.lastName && (
                <small className="text-danger">{errors.lastName.message}</small>
              )}
            </div>

            <div className="form-group">
              
              <Input
                placeholder="Email"
                type="email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email address is Required" ,
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>


            <div className="form-group">
              <Input
                 placeholder="Phone Number"
                type="number"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone  number is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d[09]))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{2})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone number",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>



            <div className="form-group">
              <Input 
              placeholder="Password"
              type='password'
                className={`form-control ${errors.password && "invalid"}`}
                {...register("password", { required: "Password is Required",
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
                trigger("password");
              }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </div>
            <Input
              type="submit"
              value="Sign Up"
            />
            
      

          </form>

        </Inputs>
      </Form>
    
  );
}

export default App;