import styled from 'styled-components'
import { primary } from '../../Utils/colors'

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif";

const form = styled.input`
    border: 1px solid rgb(187, 187, 187);
    padding: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1px 6px;
    color: rgb(39, 39, 39);

    /* background-color: rgb(247, 243, 243); */
    border-radius: 9px;
    width: 300px;
    height: 42px;
    margin-top: 6px;
    /* margin-bottom: 6px; */
    padding: 1px 6px;

    &:focus {
    outline: rgba(98, 131, 98, 0.911) solid 1px;
    border: none;
}`; 

export const Container = styled.div`
     height: 80vh;
     background-color: white;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     border-radius: 6px;
     border: 0.2px solid rgba(241,241,241);

     
        width: 100vw;
        margin: 54px 5%;
        padding: 20px;

    @media (min-width: 768px){
        width: 60vw;
    } 
    @media (min-width: 1080px){
        width: 33vw;
    }
`;

 export const Heading = styled.div`
 width: 350px;
    display: flex;
    flex-direction: column;
   
    `;
    /* border: 2px solid green; */
    

export const Title = styled.p`margin: 3px;`;
export const Subtitle = styled.p`margin: 1px;`;
export const SocialMediaContainer = styled.div`
    /* border: 2px solid aqua; */
    display: flex;
    justify-content: center;
    width: 360px;
    padding: 6px;
    margin-bottom: 0px;
    margin-top: 6px;
`;

export const SocialMediaLogin = styled.button`
border: none;
margin: 3px 1px;
width: 180px;
height: 45px;
border-radius: 6px;`;
    

export const Divider = styled.div`
/* border: 1px solid royalblue; */
padding: 1px;
margin-bottom: 3px;
margin-top: 0;`;
    
export const AlternatePara = styled.p`
/* border: 2px solid lawngreen; */
padding: 6px;
`; 
    

export const LoginFormButton = styled.div`
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Email = form;
export const Password = form;
export const Warning = styled.div`
    height: 21px;
    padding-left: 15px;
`;


export const LoginOptions = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
`;

export const LoginButton = styled.button`
    width: 300px;
    margin: 9px 3px;
    background-color: ${primary};
    border-radius: 6px;
    border: none;
    height: 51px;
    color: white;
    font-size: large;
`;
export const Para = styled.p`
    font-size: small;
    font-family: ${font};
`;
export const Pwarning = styled.p`
    font-size: small;
    font-family: ${font};
    color: red;

`;
