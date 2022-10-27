import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, FormStyle, Form, Button } from '../commonStyles';

import api from '../../api/api';

const PasswordReset = props => {
    const navigate = useNavigate();

    const { handleSubmit, register, watch ,formState: { errors } } = useForm();
    const onSubmit = values => {
        api.post('/users/change-password',
            {
                id: props.id,
                token: props.token,
                password: values.password,
                confirmPassword: values.confirmPassword
            }
        ).then(response => {
            console.log(response);
            navigate('/login');
        }).catch(error => {
            console.log(error)
            props.onChange('error')
        });
        // console.log(values);
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