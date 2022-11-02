import styled from "styled-components";
import { QrReader } from 'react-qr-reader';
import React, { useState ,useContext} from "react";
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Button } from "./ModalStyle";
import { ReactDOM } from "react";
import QrCode from "./QrCode";
import {Link as RLink} from "react-router-dom"
export default function Send(){
const [active, setActive] = useState(false);
 

  
const [decodedData, setdecodedData] = useState('No result');

 const [values, setValues] = useState({
    phoneNumber: "",
    amount: "",
    remark: "",
    
  });

 const handlePhoneNumber = (event) => {
    setValues({ ...values, amount: event.target.value });
  };
  const handleAmount = (event) => {
    setValues({ ...values, amount: event.target.value });
  };

  
  const handleRemark= (event) => {
    setValues({ ...values, remark: event.target.value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(data);
    // makePostRequest(values);
  };





	return(
       
       <Div>
        
        <SendContainer>
           
           <ReaderContainer>
             
             <ScannerButton>
             <Scanner>

               <QrReader
                    
                    
          onResult={(result, error) => {
          if (!!result) {
            setdecodedData(result?.text);

             setValues({ ...values, phoneNumber: result?.text });
             ReactDOM.unmountComponentAtNode(QrReader)

          }

          if (!!error) {
            console.info(error);
            
          }
        }}
        style={{ width: '100%' }}


                />
                
             </Scanner>
             <ButtonTextarea>
               <TextareaAutosize
              
                
                rowsMax={4}
                defaultValue={decodedData}
                value={decodedData} 
            />
               
               <ProceedButton onClick={() => setActive(true)}>
                  Proceed
               </ProceedButton>
               <Modal
                  active={active}
                  hideModal={() => setActive(false)}
                  
                  
                >
                {active && (

        <ModalBlock>
          <ModalOverlay ></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              
              <ModalClose >
               
                  <Button2 to = "/send" ><ArrowBackIcon/></Button2>
              </ModalClose>
            </ModalHeader>
            <ModalBody>
     
             <TextareaAutosizes
              
                
                rowsMax={4}
                defaultValue={decodedData}
                value={decodedData} 
            />
            
           
              <TextInput
                placeholder="Amount"
              />  
              <SendButton>
                  Send
              </SendButton>          


                                           
            </ModalBody>
            
          </ModalContainer>
        </ModalBlock>
      )}
                  
             </Modal>
             
             </ButtonTextarea>
             </ScannerButton>
           </ReaderContainer>
        </SendContainer>
       </Div> 
		)
}


const Div = styled.div`
height: 450px;
width: 500px;
display: flex;
  justify-content: center;
  align-items: center;
 @media (max-width: 730px){
  
   height: 600px;
   }
`;

const SendContainer = styled.div`
// padding: 10px;
// margin-left: -100px;
`;

const ReaderContainer = styled.div`
height: 500px;
width: 540px;
`;

const ScannerButton = styled.div`
display: flex;
width: 100%;
 @media (max-width: 730px){
  
   width: 400px;
   margin-left: 70px;
   display: block;
   margin-top: -250px;
   }
   @media (max-width: 500px){
  
   width: 300px;
   margin-left: 120px;
   }
`;

const Scanner = styled.div`
margin-top: 80px;
width: 100%;
 
  
`;

const ButtonTextarea = styled.div`
padding: 30px;
margin-top: 95px;
display: block;
width: 350px;
 @media (max-width: 730px){
  
   margin-top: -40px;
   width: 450px;
   margin-left: -20px;
   }
@media (max-width: 500px){
  
   width: 350px;
   margin-left: -20px;
   }
`;

const TextareaAutosize = styled.textarea`
border: 2px solid aqua;
padding-top: 35px;
font-size: 20px;
color: #1d1e22;
text-align: center;
width: 100%;
height: 100px;
   
`;
const Textarea = styled.textarea`
border: 2px solid palevioletred;
padding-top: 35px;
font-size: 17px;
color: palevioletred;
text-align: center;
width: 100%;
height: 100px;
`;
const ProceedButton = styled.button`
width: 100%;
margin-top: 16px;
border-radius: 4px;
border: none;
background:rgb(58, 135, 190);
white-space: nowrap;
padding: 20px 22px;
margin-left: 0;
font-size: 20px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
&:hover{
	background:rgb(58, 170, 190);
}
`;









export const ModalBlock = styled.div`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, .6);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalClose = styled.a`
  
  text-decoration: none !important;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 600;
  color: red;
  margin-left: 400px;
`;


export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 450px;
  border-radius: 10px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.5s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 10px 10px;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;



export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const Buttons = styled.button`
  background: #7b2cbf;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 2px solid #7b2cbf;
  border-radius: 3px;
  cursor: pointer;
`;
export const TextareaAutosizes = styled.textarea`
border: 2px solid aqua;
padding-top: 25px;
font-size: 20px;
color: #1d1e22;
text-align: center;
width: 100%;
height: 70px;
`;
export const TextInput = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  padding-top: 10px;
font-size: 20px;
color: #1d1e22;
text-align: center;
  border: 2px solid aqua;
  
  
  
`;

export const SendButton = styled.button`
width: 100%;
margin-top: 16px;
border-radius: 4px;
border: none;
background:rgb(58, 135, 190);
white-space: nowrap;
padding: 20px 22px;
margin-left: 0;
font-size: 20px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
&:hover {
  background:rgb(58, 170, 190);
}
`;
const Modal = styled.div`
`;
const Button2 = styled(RLink)`
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
background: rgb(58, 135, 190);
white-space: nowrap;
padding-top: 12px;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;
align-items: center;
justify-content: center;
&:hover{
  background: rgba(58, 135, 190, 0.7);
}
`;