import React from 'react';
// import styled from 'styled-components';
import { FormStyle, Container, Button, Form } from '../commonStyles';



export const ForgotPassword = () => {
  return (
    <Container>
        <Form>
            <label>
                Your Account Email:
                <FormStyle name='email' type='email' />
            </label>
            <Button>Submit</Button>
        </Form>
    </Container>

  )
}

export default ForgotPassword
