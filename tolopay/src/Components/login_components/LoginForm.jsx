import { Formik } from "formik";
import * as Yup from "yup";
import React from 'react';
import { primary } from "../../Utils/colors";

import { useContext } from "react";
import { Context } from "../../context/Context";//
import { useNavigate } from "react-router-dom";
import api from '../../api/api';


import { Email, LoginButton, LoginFormButton, LoginOptions, Password, Para, Pwarning, Warning } from './LoginContainer.style'

// accepts login input and submit
const LoginForm =  (props) => {

  const navigate=useNavigate();
  const { dispatch, isFetching, error } = useContext(Context);

  const handleLoading = (value) => {
    props.onChange(value);
  }

  return <Formik initialValues={{email: '', password: ''}} 
    onSubmit={async (data, {setSubmitting}) => {
       
          try {
            props.onChange(true);
            handleLoading(true);
      
            const res = await api.post("/users/login", {
              email: data.email,
              password:data.password
            });
            dispatch({ type: "SUCCESS", payload: res.data });
            navigate('/');
         
          } catch (error) {
            console.log(error)
            dispatch({ type: "FAILED" });
            handleLoading(false);
          }
          
          setSubmitting(false);
        } } 
        
        validationSchema = {
        Yup.object().shape({
          email: Yup.string()
        .email("Please provide a valid email.")
        .required("email required"),
      password: Yup.string()
        .required("Password must not be empty.")
        })
        } >
        {
      // destructuring props items
          props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;


      return (
    <LoginFormButton>
        <form className='login-form' onSubmit={handleSubmit}>
            {isFetching && <small style={{color:"green"}}>Loading..</small>}
          <Email name='email' type='email' placeholder='Email' 
          onChange={handleChange} onBlur={handleBlur} value={values.email}/>

        {/* formik email error displayer */}
          <Warning style={{marginBottom: 6}}>{errors.email && touched.email ?
            <Pwarning style={{color: 'red'}}>{errors.email}</Pwarning>: ''}
          </Warning> 
          
          <Password name='password' type='password' 
          placeholder='Password' onChange={handleChange} 
          onBlur={handleBlur}
          value={values.password}/>

          <Warning style={{marginBottom: 9}}>{errors.password && touched.password ?
            <Pwarning style={{color: 'red'}}>{errors.password}</Pwarning>  : ''}
          </Warning>

      

        <LoginOptions>
          <div>
            <a href='#' style={{color: primary}}>
              <Para>Forgot Password?</Para>
            </a>
          </div>

        </LoginOptions>

        <LoginButton type='submit' disabled={isSubmitting}>Login to Your Account</LoginButton>
        </form>
     </LoginFormButton>
    );
    } 
  }
  </Formik>
}

export default LoginForm