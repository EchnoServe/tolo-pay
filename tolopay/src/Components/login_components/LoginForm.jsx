import { Formik } from 'formik';
import * as Yup from "yup";
import React from 'react';
import { primary } from '../../Utils/colors';
import { Email, LoginButton, LoginFormButton, 
  LoginOptions, Password, Para, Pwarning, Warning } from './LoginContainer.style';
import { Link } from 'react-router-dom';

// accepts login input and submit
const LoginForm = () => {

  return <Formik initialValues={{email: '', password: ''}} 
    onSubmit={ (values, {setSubmitting}) => {
        setTimeout(() => {
          setSubmitting(false);
          fetch('http://localhost:8000/api/v1/users/login', {
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
              email : values.email,
              password : values.password
            }),
            headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
          }).then(response => response.json()).then(result => {
            setSubmitting(true);
            if (result.status === "OK"){
              return <Link to={"/"} data={result}/>
            } else {
              
              console.log('error');
            }
            
            
            }).catch( e => {
              console.log(e)
              });
          
        }, 600); } } 
        
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
            <a href='d' style={{color: primary}}>
              <Para>Forgot Password?</Para>
            </a>
          </div>

        </LoginOptions>

        <LoginButton type='submit' disabled={isSubmitting}><span>Login to Your Account</span></LoginButton>

        </form>

     </LoginFormButton>
    );
    } 
  }
  </Formik>
}

export default LoginForm