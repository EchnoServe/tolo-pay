import React from 'react'
import styled from 'styled-components';
 
 

export default function ChangePassword() {
  return (
    <div>
     <Title>Details</Title>
     <Form>
     <Input>
     <InputWrap>
     <Label>Enter old password</Label>
     <input placeholder=' ' type='password'/>
     </InputWrap>

     <InputWrap>
     <Label>Enter new password</Label>
     <input placeholder=' ' type='password'/>
     </InputWrap>

     <InputWrap>
     <Label>Confirm new password </Label>
     <input placeholder=' ' type='password'/>
     </InputWrap>
     </Input> 


     <BtnWrapper>
      <Button>Change</Button>
     </BtnWrapper>

     </Form>
      
    </div>
  )
}



const Form = styled.form`
display: flex;
flex-direction: column;
gap: 1px;
 
input{
border: solid #f2f2f2;
-webkit-appearance: none;
-ms-appearance: none;
-moz-appearance: none;
appearance: none;
background: #f2f2f2;
padding: 9px;
border-radius: 3px;
width: 200px;
outline: none;
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

const  InputWrap = styled.div`
display: flex;
flex-direction: column;
padding: 3px;
`;

const Input = styled.div`
margin-top: 10px;
display: block; 
align-items: flex-start;
padding: 5px;


@media screen and (min-width: 320px) and (max-width: 1080px){
  display: block;
  justify-content: center;
  align-items: center;
  width: 300px;
  

  input{
    width: 75%;
  }
}

`;



const Title = styled.h1`
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  color:rgba(58, 135, 190,0.8);
  padding-left: 15px;
`;

const Label = styled.label`

  font-size: 14px;
  text-decoration: none;
  font-weight: 550;
  padding: 9px;

`;

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-left: 8px;
 `;

const Button = styled.button`
margin-top: 16px;
border-radius: 4px;
border: none;
width: 150px;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 8px 12px;
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


