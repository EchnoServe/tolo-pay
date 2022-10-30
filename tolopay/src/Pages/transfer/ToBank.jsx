import React from 'react'
import styled from 'styled-components';

export default function ToBank() {
  return (
    <Form>
    <Title>Transfer to your bank account</Title>
    <input placeholder='Name' type='text'/>
    <input placeholder='Account Id' type='text'/>
    <input placeholder='Remark' type='password'/>
    <input placeholder='Amount' type='text'/>
     
      <Button>Transfer</Button>
    </Form>
  )
}

const Form = styled.div`
height: 400px;
width: 450px;
display: flex;
flex-direction: column;
gap: 25px;
justify-content: center;
align-items: center;

input{
border: solid rgba(58, 135, 190,0.3);
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 70%;
outline: none;
}

.inputMargin{
  margin-bottom: 10px;
}

input:focus::placeholder{
  color: transparent; 
}

input:focus::placeholder{
  color: #f2f2f2;
  transition: color 0.3s ease;
}

input:focus{
  border: solid rgb(58, 135, 190) ;
  transition: border 0.3s ease;
}

`;

const Title = styled.h1`
  font-size: 18px;
  text-decoration: none;
  font-weight: 600;
  color:rgb(41, 75, 90);
  margin-bottom: 5px;
 
`;

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 width: 70%;
 
 `;

const Button = styled.button`
border-radius: 4px;
border: none;
width: 70%;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 10px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
`;