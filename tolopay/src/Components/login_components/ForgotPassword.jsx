import React from 'react';
import {useForm } from 'react-hook-form';
import { FormStyle, Container, Button, Form } from '../commonStyles';

import api from '../../api/api';


export const ForgotPassword = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = async values => {
        try {
            const response = await api.post('/users/forgotpassword', {
                email: values.email 
            });
    
            console.log(response.message);
        } catch (error) {
            console.log(error.message);
        }
        
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
