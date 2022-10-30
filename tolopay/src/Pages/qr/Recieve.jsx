import styled from "styled-components";
import QRcode from 'qrcode.react';
import React, {useState, useContext} from 'react'

import { Context } from "./../../context/Context";


export default function Recieve(){
	const { user } = useContext(Context);
	const [qr, setQr] = useState('1000');
	return(
       
       <Div>
       <GeneratedQr>
       	   <UserInfo>
                
                 
                 <Name> 
                  Daniel Shobe
                 </Name>
                
                
                
                <PhoneNumber>
                 0949052848
                </PhoneNumber>
                
       	   </UserInfo>
       	   <QrCodeValues>
       	      {
                    qr ?
                    <QRcode 
                        id="myqr"
                        value={user?.data.user.phoneNumber.toString()} 
                        size={350}
                        includeMargin={true}
                    /> :
                    <p>No QR code preview</p>
                }
       	   </QrCodeValues>
       	   </GeneratedQr>
       </Div> 
		)
}


const Div = styled.div`
height: 400px;
width: 800px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 1250px){
  height: 600px;
   }
   
`;
const GeneratedQr = styled.div`
display: flex;
width: 100%;
@media (max-width: 1250px){
  
   display: block;
   }
`;


const UserInfo = styled.div`
width: 70%;
text-align: center;
height: 150px;
background-color: #fff;
color: #1d1e22;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 10px;
margin-top: 90px;
margin-bottom: 140px;
@media (max-width: 1470px){
  
   width: 40%;
   }
   @media (max-width: 1366px){
  
   width: 25%;
   }
   @media (max-width: 1250px){
  
   display: flex;
   width: 45%;
   margin-left: 60px;
   margin-top: 10px;
   }
   @media (max-width: 1082px){
   width: 350px;
   height: 70px;
  
    margin-left: 100px;
   }
   @media (max-width: 650px){
   margin-left: 70px;
   }
   @media (max-width: 580px){
   margin-left: 30px;
   }
   @media (max-width: 580px){
   margin-left: 10px;
   }
`;

const QrCodeValues = styled.div`
@media (max-width: 1250px){
  
   margin-top: -120px;
    margin-left: 60px;
   }
@media (max-width: 1082px){
  
   margin-top: -120px;
    margin-left: 100px;
   }
margin-left: 30px;
 
@media (max-width: 650px){
   margin-left: 70px;
   }
   @media (max-width: 580px){
   margin-left: 30px;
   }
@media (max-width: 580px){
   margin-left: 10px;
   }
`;


const Name = styled.div`
margin-top: 40px;
letter-spacing: 2.4px;
font-weight: 500;
color: #B10DC9;
@media (max-width: 1250px){
  
   margin-left: 20px;
   margin-top: 60px;
   }
 @media (max-width: 1082px){
   margin-top: 30px;
   }
`;


const PhoneNumber = styled.div`
margin-top: 40px;
font-weight: 500;
letter-spacing: 2.4px;
color: #B10DC9;
@media (max-width: 1250px){
  
   margin-left: 30px;
   margin-top: 60px;
   }
   @media (max-width: 1082px){
   margin-top: 30px;
   }
`;