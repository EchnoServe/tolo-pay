import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, FormStyle, Form, Button } from '../commonStyles';

import api from '../../api/api';

const PasswordReset = () => {

    const { handleSubmit, register, watch ,formState: { errors } } = useForm();
    const onSubmit = async values => {
        // const response = await api.post('/users/forgotpassword', );
    }

  return (
    <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <label>
                New Password:
                <FormStyle name='password' type='password' 
                    {...register("password", { required: "password is required",
                minLength: {
                  value: 8,
                  message: "minimum required length is 8",
                },
                maxLength: {
                  value: 16,
                  message: "maximum allowed length is 16 ",
                }
               })}
                />
            </label>
            <small style={{color: 'red'}}>{ errors.password && errors.password.message }</small>
            <label>
                Confirm Password:
                <FormStyle name='password' type='password' 
                    {
                        ...register("confirmPassword", {
                            required: true,
                            validate: (val) => {
                                if (watch("password") !== val){
                                    return "Passwords don't match!"
                                }
                            }
                        })
                    }
                />
            </label>
            <small style={{color: 'red'}}>{ errors.confirmPassword && errors.confirmPassword.message }</small>
            <Button>Submit</Button>
        </Form>
    </Container>
  )
}

export default PasswordReset