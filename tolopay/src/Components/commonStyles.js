import styled from "styled-components";

export const FormStyle = styled.input`
border: 1px solid rgb(187, 187, 187);
padding: 2;
display: flex;
flex-direction: column;
align-items: center;
margin: 1px 6px;
color: rgb(39, 39, 39);

/* background-color: rgb(247, 243, 243); */
border-radius: 3px;
width: 300px;
height: 42px;
margin-top: 2px;
/* margin-bottom: 6px; */
padding: 1px 6px;

&:focus {
outline: rgba(98, 131, 98, 0.911) solid 1px;
border: none;
}`;