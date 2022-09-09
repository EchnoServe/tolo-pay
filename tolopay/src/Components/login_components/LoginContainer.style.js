import styled from 'styled-components'
import { gray10, gray80, primary } from '../../Utils/colors'

export const Container = styled.div`
     height: 75vh;
     background-color: rgba(252,252,252);
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     border-radius: 20px;
     border: 0.2px solid rgba(241,241,241);

     
        width: 100vw;
        margin: 54px 5%;
        padding: 20px;

    @media (min-width: 768px){
        width: 60vw;
    } 
    @media (min-width: 1080px){
        width: 40vw;
    }
`;

 export const Heading = styled.div`
 width: 400px;
    display: flex;
    flex-direction: column;
   
    `;
    /* border: 2px solid green; */
    

export const Title = styled.p`margin: 5px;`;
export const Subtitle = styled.p`margin: 2px;`;
export const SocialMediaContainer = styled.div`
    /* border: 2px solid aqua; */
    display: flex;
    justify-content: center;
    width: 500px;
    padding: 10px;
    margin-bottom: 0px;
    margin-top: 10px;
`;

export const SocialMediaLogin = styled.button`
/* border: 2px solid firebrick; */
margin: 5px 2px;
width: 200px;
height: 45px;
border-radius: 15px;`;
    

export const Divider = styled.div`
/* border: 1px solid royalblue; */
padding: 1px;
margin-bottom: 5px;
margin-top: 0;`;
    
export const AlternatePara = styled.p`
/* border: 2px solid lawngreen; */
padding: 10px;
`; 
    

export const LoginFormButton = styled.div`
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const LoginFormInput = styled.input` 
    
    border: 2px solid rgb(187, 187, 187);
    padding: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 2px;
    color: rgb(39, 39, 39);
    
    /* background-color: rgb(247, 243, 243); */
    border-radius: 15px;
    width: 390px;
    height: 54px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 1px 9px;
    
    &:focus {
    outline: rgba(98, 131, 98, 0.911) solid 1px;
    border: none;
    } `;
/* .login-form :focus ::placeholder {
    color: rgba(25, 173, 25, 0.911);
} */
export const LoginOptions = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-between;
`;
export const RememberMe = styled.div`
    width: 132px;
    display: flex;
    justify-content: space-evenly;
`;

export const LoginButton = styled.button`
    width: 390px;
    margin: 10px 2px;
    background-color: ${primary};
    border-radius: 6px;
    border: none;
    height: 51px;
    color: white;
    font-size: large;
`;
