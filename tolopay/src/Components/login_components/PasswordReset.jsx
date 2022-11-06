import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Container, FormStyle, Form, Button, Loading } from '../commonStyles';
 
import api from '../../api/api';

const PasswordReset = props => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { handleSubmit, register, watch ,formState: { errors } } = useForm();
    const onSubmit = values => {
        setLoading(true);
        api.post('/users/change-password',
            {
                id: props.id,
                token: props.token,
                password: values.password,
                confirmPassword: values.confirmPassword
            }
        ).then(response => {
            console.log(response);
            setLoading(false);
            navigate('/login');
        }).catch(error => {
            console.log(error)
            setLoading(false);
            props.onChange('error')
        });
        // console.log(values);
    }

  return (
    <Container style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
    {
        loading ? 
        <Loading >
            <div className='loaderBar'></div>
        </Loading>
        : ''
    }
        <Form onSubmit={handleSubmit(onSubmit)} style={{marginTop: 60}}>
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