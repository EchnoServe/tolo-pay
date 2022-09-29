import styled from 'styled-components'
import { FormStyle } from '../commonStyles';
import { primary, button1, grayB } from "../../Utils/colors";

const font = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', sans-serif";
const medium = "776px";

export const Para = styled.p`
    font-size: small;
    font-family: ${font};
`;
export const Pwarning = styled.p`
    font-size: small;
    font-family: ${font};
    color: red;

`; 

export const Container = styled.div`
     height: 432px;
     background-color: white;
     display: flex;
     justify-content: start;
     align-items: center;
     flex-direction: column;
     border-radius: 6px;
     border: 0.1px solid rgba(235,235,235);
     width: 372px;
     padding-top: 0px;
    
     @media (min-width: ${medium}){
         width: 50vw;
     } 
`;

 export const Heading = styled.div`
    width: 360px;
    margin-bottom: 1px;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    
export const Subtitle = styled.p`margin: 1px;`;
export const SocialMediaContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    padding: 6px;
    margin-bottom: 0px;
    margin-top: 6px;
`;

export const SocialMediaLogin = styled.div`
display: flex;
justify-content: first baseline;
align-items: center;
border: 0.5px solid ${grayB};
background-color: white;
margin: 6px 1px;
width: 300px;
height: 45px;
border-radius: 6px;
cursor: pointer;

${Para} {
    color: ${primary};
}

&:hover {
background-color: ${button1};
}
&:hover ${Para} {
    color: white;
}
`;
    

export const Divider = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 45px;
width: 100%;
// border: 1px solid royalblue;
padding: 1px;
margin-bottom: 3px;
margin-top: 0;`;
    
export const AlternatePara = styled.span`
/* border: 2px solid lawngreen; */
padding: 6px;
margin-bottom: 15px;
margin-top: 9px;
display: inline-block;
font-size: 1rem;

&::before, &::after {
    border-top: 1px solid #ccc;
         content: '';
         display: inline-block;
         top: 0.9em;
         width: 111px;
         margin: 3px 9px;
} 
&:before {
    right: 75%;
 }
 &:after {
    left: 75%;
 }
`; 
    

export const LoginFormButton = styled.div`
    /* border: 2px solid rebeccapurple; */
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const Email = FormStyle;
export const Password = FormStyle;
export const Warning = styled.div`
    height: 18px;
    padding-left: 9px;
`;


export const LoginOptions = styled.div`
    width: 300px;
    display: flex;
    justify-content: end;
`;

export const LoginButton = styled.button`
    width: 300px;
    margin: 9px 3px;
    background-color: ${button1};
    border-radius: 6px;
    border: none;
    height: 42px;
    color: white;
        font-size: medium;
        font-family: ${font};
    
    cursor: pointer;

    &:hover {
        outline: ${button1} solid 1px;
        border-radius: 3px;
        font-size: 17px;
    }
`;



