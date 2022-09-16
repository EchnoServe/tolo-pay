import React from 'react'
import styled from 'styled-components'
import FoodIcon from "@material-ui/icons/Restaurant";
import GroceryIcon from "@material-ui/icons/ShoppingCart";
import HealthIcon from "@material-ui/icons/AddBoxRounded";
import TravelIcon from "@material-ui/icons/CardTravel";


const MainContainer = styled.div`
`
const Container = styled.div`
margin: 0px;
padding: 0;
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
`
const AddButton= styled.div`
float: right;
    margin-top: 5%;
    margin-right: 5%;
`
const Button = styled.button`
color:#46833C ;
border-color:#40D13D ;
cursor: pointer;
justify-content: center;
box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
background-color: white;
padding-left: 5px;
height: 65px;
width: 215px;
text-decoration: none;
font-size: 20px;
&:hover {
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    background:  #CEF5C7;
  }
`
const Card = styled.div`
position: relative;
width: 250px;
height:350px;
border-radius: 15px;
margin-left: 3%;
margin-right: 3%;
margin-bottom: 3%;  
`

const H3 = styled.h3`
color:#404550;
font-size: 20px;
margin:0px 0px 0px 15px;
&:hover {
    color:white;
  }
`
const Icons = styled.div`
color:#404550;
z-index: 1;
transition: 0.5s;
margin-right: 10px;
font-size: 20% !important;
&:hover {
    color:white;
  }

`
const Box= styled.div`
position:absolute;
top:20px;
left: 20px;
right:20px;
bottom:20px;
background:#Ffff;
box-shadow: 0 10px 20px rgba(0,0,0,0.1);
border-radius: 15px;
display: block;
justify-content: center;
align-items: center;
&:hover {
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
    background: #46833C;
  }
  &:hover ${H3} {
    color:white;
  }
  &:hover ${Icons} {
    color:white;
  }
`

const Content= styled.div`
text-align:center;
padding-left: 23%;
height: 140px;
display: flex;
padding-top: 10%;
`

const Content2= styled.div`
padding: 20px;
height: 170px;
background-color: #CEF5C7;
border-radius: 0px 0px 15px 15px;;
text-align:center;
`


function Budget() {
  return (
   <MainContainer>
    <AddButton><Button><big><b>+ </b></big>Add new budget</Button></AddButton>
<Container>

  <Card>
    <Box>
      <Content>
    <Icons><FoodIcon/></Icons>  
        <H3>Food</H3>

      </Content>
      <Content2>
      <h2 style={
          {
            fontSize:'22px',
            color:'#404550',
            margin:"100px 0px 0px 0px", 
          }
        }>200 birr</h2>
        </Content2>
    </Box>
  </Card>


  <Card>
    <Box>
      <Content>
    <Icons><GroceryIcon/></Icons>  
        <H3>Grocery</H3>

      </Content>
      <Content2>
      <h2 style={
          {
            fontSize:'22px',
            color:'#404550',
            margin:"100px 0px 0px 0px", 
          }
        }>200 birr</h2>
        </Content2>
    </Box>
  </Card>


  <Card>
    <Box>
      <Content>
    <Icons><TravelIcon/></Icons>  
        <H3>Travel</H3>

      </Content>
      <Content2>
      <h2 style={
          {
            fontSize:'22px',
            color:'#404550',
            margin:"100px 0px 0px 0px", 
          }
        }>200 birr</h2>
        </Content2>
    </Box>
  </Card>
  <Card>
    <Box>
      <Content>
    <Icons><HealthIcon /></Icons>  
        <H3>Health</H3>

      </Content>
      <Content2>
      <h2 style={
          {
            fontSize:'22px',
            color:'#404550',
            margin:"100px 0px 0px 0px", 
          }
        }>200 birr</h2>
        </Content2>
    </Box>
  </Card>

</Container>

   </MainContainer>
  )
}

export default Budget