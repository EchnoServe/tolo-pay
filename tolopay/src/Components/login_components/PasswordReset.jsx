import React from 'react';
import { Container, FormStyle, Form, Button } from '../commonStyles';

const PasswordReset = () => {
  return (
    <Container>
        <Form>
            <label>
                New Password:
                <FormStyle name='password' type='password' />
            </label>
            <label>
                Confirm Password:
                <FormStyle name='passowrd' type='password' />
            </label>
            <Button>Submit</Button>
        </Form>
    </Container>
  )
}

export default PasswordReset