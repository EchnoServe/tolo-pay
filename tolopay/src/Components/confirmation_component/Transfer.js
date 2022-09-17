import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
background-color: white;
height:170px;
width: 440px;
align-content: center;
padding-left: 20px;
padding-top: 20px;
padding-bottom:15px;
`
const ModalBg = styled.div``
const TitleCloseBtn = styled.div`
display: flex;
justify-content: flex-end;
`

const Button= styled.button`
background-color: transparent;
border: none;
font-size: 16px;
cursor: pointer;
`

const Title = styled.div`
display: inline-block;
  text-align: center;
  margin-top: 10px;
  margin-bottom:10px
`
const Footer = styled.div`
flex: 20%;
display: flex;
justify-content: center;
align-items: center;
`

const TransferBtn = styled.button`
width: 150px;
height: 45px;
margin: 10px;
border: none;
background-color: rgb(7, 89, 7);
color: white;
border-radius: 0px;
font-size: 20px;
cursor: pointer;
`

const CancelBtn= styled.button`
width: 150px;
height: 45px;
background-color: white;
color: black;
border: 2px solid black;
font-size: 20px;
cursor: pointer;
`
function Transfer({ setOpenModal }) {
  return (
    <ModalBg>
      <ModalContainer>
        <TitleCloseBtn>
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </Button>
        </TitleCloseBtn>
        <Title>
          <h4>Are You Sure You Want to Transfer this Money?</h4>
        </Title>
        <Footer>
        <TransferBtn>Transfer</TransferBtn>
          <CancelBtn
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </CancelBtn>
          
        </Footer>
      </ModalContainer>
      </ModalBg>
  );
}

export default Transfer;
