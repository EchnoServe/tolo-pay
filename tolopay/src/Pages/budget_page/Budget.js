
import React from "react";
import styled from "styled-components";
import {Link as RLink} from 'react-router-dom'
import { useContext } from "react";
import { Context } from "../../context/Context";//

function Budget() {
  const { user } = useContext(Context);
  return (
    
    <Con>
    <Container>
   
      <SubContainer>
      <AddBudget><BtnWrapper><Button to= "/addBudget">Add Budget</Button></BtnWrapper></AddBudget>
        <SectionOne>
       <ColumnOne1></ColumnOne1>
        
       
        <ColumnTwo1>
        <Container2>
        {
   user?.data.user?.budget.map(remark=>{
       return   <Card>
         <Content style={{backgroundColor:!remark.budgeted && "red"}}>
          <H3>{remark.remark}</H3>
          </Content>
         
           <Content2>
           <h4>{remark.amount}</h4>
          </Content2>
          </Card>
 })
}




          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

          <Card>
         <Content>
          <H3>Food</H3>
          </Content>
         
           <Content2>
           <h4>200 birr</h4>
          </Content2>
          </Card>

              </Container2>
          </ColumnTwo1>
        </SectionOne> 
      </SubContainer>
    </Container>
    </Con>
  );
}

const Container = styled.div`
  width: 90%;
  margin: 15px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
 
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0 0 0;
  }
`;

const Con = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
 

`;

const SubContainer = styled.div`
  
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  margin-top: 0;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  height: 470px;
  gap: 2rem;
  width: 100%;
  overflow-y: scroll;
  background-color: transparent;

  ::-webkit-scrollbar {
    width: 4px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;


  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  margin: 0;
  background-color: black;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const Container2 = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
grid-template-rows: 200px 270px;
font-size: 17px; 
align-items: center;
padding: 20px 0 30px 0 ;
align-items: center;
word-spacing: 1.8px;
line-height: 22px;
@media (max-width: 768px) {
  display:flex;
  flex-direction: column;
  min-height: 100%;
  margin-top:6%;
  margin-left:0px;
  margin-bottom:0px;
  grid-gap:10px;
  padding-top:0px;
  align-items:center;
  justify-content:center;
}
`;

const Content= styled.div`
text-align:center;

 
height: 85px;

border-radius:15px 15px  0px 0px ;
display: flex;
align-items: center;
justify-content: center;
color: rgba(0,0,0,0.8);
background-color:white;
border: 2px solid  rgba(58, 135, 190, 0.1); 


 
@media (max-width: 768px) {
width:170px;
height:80px;
border-radius:15px 0px  0px 15px ;
padding-left:10%;
}
`;

const Content2= styled.div`
padding: 20px;

height: 85px;
background-color: rgba(58, 135, 190, 0.7);
border-radius: 0px 0px 15px 15px;
text-align:center;
color: white;
@media (max-width: 768px) {
  width:170px;
  height:80px;
  padding-top:15px;
border-radius:0px 15px  15px 0px ;
}
`;


const Card = styled.div`
position: relative;
width: 180px;
height:170px;
text-align: center;
padding: 20px 0;
border-radius: 15px;
margin-left: 3%;
margin-right: 3%;
margin-bottom: 3%; 
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
&:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}
&:hover ${Content2} {
  background:rgb(58, 135, 190);
}
@media (max-width: 768px) {
  display:flex;
  width:340px; 
  padding:0px;
  height:80px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
`;

const H3 = styled.h3`
padding: 1rem;
font-size: 18px;
font-weight: 600;
text-align: center;
 
  @media (max-width: 768px) {
    margin:0px;
  }
  
`;

const AddBudget = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: flex-end;
   background-color: transparent;
  
`;
 
 

const BtnWrapper = styled.div`
 display: flex;
 justify-content: flex-start; 
 align-items: center;
 margin-right: 30px;
 
 `;

const Button = styled(RLink)`
border-radius: 4px;
border: none;
width: 130px;
background: rgb(58, 135, 190);
white-space: nowrap;
padding: 12px 12px;
margin-left: 0;
font-size: 15px;
font-weight: 600;
color: #fff;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;


&:hover{
  background: rgba(58, 135, 190, 0.7);
}


`;
export default Budget;
































 