import { useContext, useRef } from "react";
import { Context } from "../../context/Context";//
import styled from 'styled-components'
import FoodIcon from "@material-ui/icons/Restaurant";
import GroceryIcon from "@material-ui/icons/ShoppingCart";
import HealthIcon from "@material-ui/icons/AddBoxRounded";
import TravelIcon from "@material-ui/icons/CardTravel";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
@media (max-width: 768px) {
  flex-direction: column;
  
  }
`
const Container = styled.div`
box-sizing: boredr-box;
display:flex;
font-size: 17px;
justify-content: center;
align-items: center;
min-height: 100vh;
width: 100%;
word-spacing: 1.8px;
line-height: 22px;
flex-wrap: wrap;
padding: 40px 0;
@media (max-width: 768px) {
  flex-direction: column;
  min-height: 100%;
}
`
const AddButton= styled.div`
position: relative;
    margin-right: 25%;
    margin-left:70%;
    @media (max-width: 768px) {
    margin-left:23%;
    justify-content:center;
    }
`
const Button = styled.button`
color:#404550;
border-color: #41d3fe ;
cursor: pointer;
justify-content: center;
box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
background-color: white;
border-radius:10px;
padding-left: 5px;
height: 65px;
width: 215px;
text-decoration: none;
font-size: 20px;
&:hover {
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    background: #6977fe;
    color:white;
  }
`
const H3 = styled.h3`
color:#404550;
font-size: 20px;
margin:0px 0px 0px 15px;
  @media (max-width: 768px) {
    margin:0px;
  }
  
`
const Icons = styled.div`
color:#404550;
z-index: 1;
transition: 0.5s;
margin-right: 10px;
font-size: 20% !important;
`


const Content= styled.div`
text-align:center;
padding-left: 31%;
height: 140px;
border-radius:15px 15px  0px 0px ;
display: flex;
background-color:white;
padding-top: 10%;
@media (max-width: 768px) {
  width:185px;
  height:100px;
border-radius:15px 0px  0px 15px ;
padding-left:10%;
}
`

const Content2= styled.div`
padding: 20px;
height: 170px;
background-color: #41d3fe;
border-radius: 0px 0px 15px 15px;
text-align:center;
@media (max-width: 768px) {
  width:185px;
  height:100px;
border-radius:0px 15px  15px 0px ;
}
`
const Card = styled.div`
position: relative;
width: 210px;
height:310px;
border-radius: 15px;
margin-left: 3%;
margin-right: 3%;
margin-bottom: 3%; 
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
&:hover {
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}
&:hover ${Content2} {
  background:#6977fe;
}
@media (max-width: 768px) {
  display:flex;
  width:370px;
  height:100px;
  margin-top:6%;
}
`

const H4= styled.h4`
font-size:20px;
color:white;
margin:100px 0px 0px 0px;
@media (max-width: 768px) {
  margin:21px 0px 0px 0px;
}
`

function Budget() {
  const { user } = useContext(Context);
  console.log()
  return (
   <MainContainer>
   
<Container>
<AddButton>
    <Link to='/budgetform'><Button ><big><b>+ </b></big>Add a New Budget</Button></Link></AddButton>
 
 {
  user.data.user.budget.map(remark=>{
    return <Card>
    
    <Content>  
      <H3>{remark.remark}</H3>
      </Content>
   
    <Content2>
    <H4>{remark.amount}</H4>
      </Content2>
  
</Card>
  })
 }
 

 
   

 

</Container>

   </MainContainer>
  )
}

export default Budget