import React from 'react';
import {useForm } from 'react-hook-form';
import { FormStyle, Container, Button, Form } from '../commonStyles';

// import api from '../../api/api';


export const ForgotPassword = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async values => {

        console.log(values.email);
        
        fetch('http://localhost:8000/api/v1/users/forgotpassword', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    email: values.email
                })
            }).then(response => response.json())
            .then(result => console.log(result))
            .catch((error) => {
            console.log(error.message);
        });
        
    }

  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Your Account Email:
                <FormStyle name='email' type='email' 
                {
                    ...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email"
                        }
                    })
                }/>
            </label>
            <small style={{color: 'red'}}>{ errors.email && errors.email.message }</small>
            <Button>Submit</Button>
        </Form>
    </Container>

  )
}

export default ForgotPassword
