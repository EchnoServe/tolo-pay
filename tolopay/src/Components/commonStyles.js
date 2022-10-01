import styled from "styled-components";
import {primary, button1} from "../Utils/colors";

export const FormStyle = styled.input`
border: 1px solid rgb(187, 187, 187);
padding: 2;
display: flex;
flex-direction: column;
align-items: center;
margin: 1px 6px;
color: rgb(39, 39, 39);

border-radius: 3px;
width: 300px;
height: 42px;
margin-top: 2px;
padding: 1px 6px;

&:focus {
outline: rgba(98, 131, 98, 0.911) solid 1px;
border: none;
}`;

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