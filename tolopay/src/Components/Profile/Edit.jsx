import React from 'react'
import styled from 'styled-components';
 
 

export default function Edit() {
  return (
    <div>
     <Title>Personal details</Title>
     <Form>
     <Input>
     <InputWrap>
     <Label>First Name</Label>
     <input className='inputMargin' placeholder='Sumeya' type='text'/>
     </InputWrap>

     <InputWrap>
     <Label>Last Name</Label>
     <input placeholder='Ibrahim' type='text'/>
     </InputWrap>
     
     </Input> 


     <Input>
     <InputWrap>
     <Label>Phone Number</Label>
     <input className='inputMargin' placeholder='0910602110' type='text'/>
     </InputWrap>

     <InputWrap>
     <Label>Email</Label>
     <input placeholder='sumei295@gmail.com' type='Email'/>
     </InputWrap>
     
     </Input> 


     <Input>
     <InputWrap>
     <Label>Username</Label>
     <input className='inputMargin' placeholder='@sumeya' type='text'/>
     </InputWrap>

     <InputWrap>
     <Label>City</Label>
     <input placeholder='Addis Ababa ' type='text'/>
     </InputWrap>
     
     </Input> 

     <BtnWrapper>
      <Button>Update</Button>
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
width: 130%;
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

const  InputWrap = styled.div`

display: flex;
flex-direction: column;
gap: 10px;

`;

const Input = styled.div`
margin-top: 10px;
display: flex; 
align-items: flex-start;
gap: 100px;
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
  padding-left: 5px;
`;

const Label = styled.label`

  font-size: 14px;
  text-decoration: none;
  font-weight: 550;

`;

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-left: 5px;
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


