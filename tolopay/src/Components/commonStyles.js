import styled from "styled-components";
import {primary, button1, button3 } from "../Utils/colors";


export const Container = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #90909060;
`;

export const FormStyle = styled.input`
border: 1px solid rgb(187, 187, 187);
padding: 2;
display: flex;
flex-direction: column;
align-items: center;
/* margin: 1px 6px; */
color: rgb(39, 39, 39);

border-radius: 3px;
width: 300px;
height: 42px;
/* margin-top: 2px; */
padding: 1px 6px;

&:focus {
outline: rgba(98, 131, 98, 0.911) solid 1px;
border: rgba(98, 131, 98, 0.911) solid .5px;
}`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 42px;
  border-radius: 3px;
  border: none;
  margin: 6px;
  margin-top: 10px;
  background-color: ${button1};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${button3};
  }
`;

export const Loading = styled.div`

  width: 100%; 
  margin:0;
  border-radius:1px;
  // border:1px solid transparent;
  background-color: #90909070;
  position:relative;
  padding-bottom: 3px;

&:before {
  content:'';
  border:1px solid ${button1};
  border-radius:6px;
  position:absolute;
  
}
& .loaderBar { 
  position:absolute;
  border-radius:6px;
  top:0;
  right:100%;
  bottom:0;
  left:0;
  background: ${primary}; 
  width:0;
  animation:borealisBar 2s linear infinite;
} 

@keyframes borealisBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
}
`;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0, 0.2);
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 24px;
  width: 100%;
  height: 150px;
  border-radius: 9px;
  max-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  width: 81px;
  color: white;
  border-radius: 6px;
  background-color: ${button1};
  padding: 3px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${button3};
  }
  ${PopupInner} {
    position: absolute;
    top: 16px;
    right: 16px;
  }
`;