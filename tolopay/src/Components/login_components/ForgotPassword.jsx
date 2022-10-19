import React from 'react';
import {useForm } from 'react-hook-form';
import { FormStyle, Container, Button, Form } from '../commonStyles';

import api from '../../api/api';


export const ForgotPassword = props => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    
    const onSubmit = async values => {

        console.log(values.email);


        api.post('/users/forgot-password', {
            email: values.email
        }).then(response => {
            props.sentStatus(response.data.message);
            console.log(response.data);
        }).catch(error => console.log(error));
        
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
