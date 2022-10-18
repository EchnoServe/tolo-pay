import React from "react";
import styled from "styled-components";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
 
 
 
 

function Budget() {
  




  return (
    
    <Con>
    <Container>
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
          </ColumnOne1>

          <ColumnTwo1>
            

              <Container2>

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

        {/* <div>hiiiiiiiiiii</div> */}

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
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  /* border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem; */
  margin: 1rem 4rem 1rem 4rem;
 
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
/* background-color: black; */

`;

const SubContainer = styled.div`
  /* margin: 0.5rem 0; */
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40%;
  gap: 2rem;
  width: 100%;
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
grid-template-columns: auto auto auto auto   ;
grid-template-rows: 200px 270px;
/* grid-gap: 10px; */
font-size: 17px; 
align-items: center;

/* justify-content:center; */
word-spacing: 1.8px;
line-height: 22px;
/* flex-wrap: wrap; */
/* padding: 40px 0px; */
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
padding-left: 24%;
height: 85px;
border-radius:15px 15px  0px 0px ;
display: flex;
background-color:white;
padding-top: 10%;
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
background-color: rgb(58, 135, 190);
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
  background:#6977fe;
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
color:#404550;
font-size: 20px;
text-align: center;
margin:0px 0px 0px 15px;
  @media (max-width: 768px) {
    margin:0px;
  }
  
`;
 
 



const Setting = styled.div`
  height: 100%;
  background-color:rgba(70, 131, 60,0.2);
  /* margin-bottom: 10px; */
  padding: 10px;
  transition: 0.4s ease-in-out;
  color: #000;
  border: 2px solid rgba(70, 131, 60,0.5);  
  border-radius: 10px;

  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
padding: 1rem;
font-size: 15px;
font-weight: 300;

`;








export default Budget;

































// import React from 'react'
// import styled from 'styled-components'


// const Container1 = styled.div`
//   width: 90%;
//   margin: 1rem 4rem 1rem 4rem;
 
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     display: flex;
//     flex-direction: column;
//     width: 100%;
//     margin: 1rem 0 0 0;
//   }
// `;


// const Con = styled.div`
// width: 100%;
// height: 100%;
// display: flex;
// justify-content: center;
// align-items: center;
// /* background-color: black; */

// `;

// const SubContainer = styled.div`
//   /* margin: 0.5rem 0; */
//   height: 80%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 4rem;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     height: 100%;
//   }
// `;
 

// const SectionOne = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 40%;
//   gap: 2rem;
//   width: 100%;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     flex-direction: column;
//     align-items: center;
//     height: max-content;
//   }
// `;

// const ColumnTwo1 = styled.div`
//   display: flex;
//   gap: 3rem;
//   margin: 0;
//   @media screen and (min-width: 320px) and (max-width: 1080px) {
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     gap: 1rem;
//     width: 100%;
//   }
// `;


// const cardContainer = styled.div`
//   height: 100%;
//   width: 14rem;
//   background-color: rgba(70, 131, 60,0.2);
//   color: #000;
//   transition: 0.4s ease-in-out;
//   border: 2px solid  rgba(70, 131, 60,0.5);
//   border-radius: 10px;
// `;




// const MainContainer = styled.div`
// @media (max-width: 768px) {
//   flex-direction: column;
  
  
//   }
// `
// const Container = styled.div`
// display: grid;
// grid-template-columns: auto auto auto auto auto ;
// grid-template-rows: 100px 300px;
// grid-gap: 30px;
// font-size: 17px;
// background-color:black;
// align-items: center;
// justify-content:center;
// word-spacing: 1.8px;
// line-height: 22px;
// /* flex-wrap: wrap; */
// /* padding: 40px 0px; */
// @media (max-width: 768px) {
//   display:flex;
//   flex-direction: column;
//   min-height: 100%;
//   margin-top:6%;
//   margin-left:0px;
//   margin-bottom:0px;
//   grid-gap:10px;
//   padding-top:0px;
//   align-items:center;
//   justify-content:center;
// }
// `
// const AddButton= styled.div`
 
//     margin-top: 5%;
//     margin-right: 25%;
//     margin-left:70%;
//     @media (max-width: 768px) {
//     margin-left:23%;
//     align-items:center;
//     justify-content:center;
//     }
// `
// const Button = styled.button`
// color:#404550;
// border-color: #41d3fe ;
// cursor: pointer;
// justify-content: center;
// box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
// background-color: white;
// border-radius:10px;
// padding-left: 5px;
// height: 65px;
// width: 215px;
// text-decoration: none;
// font-size: 20px;
// &:hover {
//     box-shadow: 0 10px 40px rgba(0,0,0,0.2);
//     background: #6977fe;
//     color:white;
//   }
// `

// const Icons = styled.div`
// color:#404550;
// z-index: 1;
// transition: 0.5s;
// margin-right: 10px;
// font-size: 20% !important;
// `


// const Content= styled.div`
// text-align:center;
// padding-left: 23%;
// height: 85px;
// border-radius:15px 15px  0px 0px ;
// display: flex;
// background-color:white;
// padding-top: 10%;
// @media (max-width: 768px) {
//   width:170px;
//   height:80px;
// border-radius:15px 0px  0px 15px ;
// padding-left:10%;

// }
// `

// const Content2= styled.div`
// padding: 20px;
// height: 85px;
// background-color: #41d3fe;
// border-radius: 0px 0px 15px 15px;
// text-align:center;
// @media (max-width: 768px) {
//   width:170px;
//   height:80px;
//   padding-top:15px;
// border-radius:0px 15px  15px 0px ;
// }
// `
// const Card = styled.div`
// position: relative;
// width: 180px;
// height:170px;
// text-align: center;
// padding: 20px 0;
// border-radius: 15px;
// margin-left: 3%;
// margin-right: 3%;
// margin-bottom: 3%; 
// box-shadow: 0 10px 20px rgba(0,0,0,0.1);
// &:hover {
//   box-shadow: 0 10px 40px rgba(0,0,0,0.2);
// }
// &:hover ${Content2} {
//   background:#6977fe;
// }
// @media (max-width: 768px) {
//   display:flex;
//   width:340px; 
//   padding:0px;
//   height:80px;
//   box-shadow: 0 10px 20px rgba(0,0,0,0.1);
// }
// `;


// // eslint-disable-next-line no-unused-vars


// const H4= styled.h4`
// font-size:20px;
// color:white;
// margin:20px 0px 0px 0px;
// @media (max-width: 768px) {
  
// }
// `

// function Budget() {
//   return (
//     <Con>
//     <Container1>
//       <SubContainer>
//       <SectionOne>
//         <ColumnTwo1>
//         {/* <AddButton><Button><big><b>+ </b></big>Add a New Budget</Button></AddButton> */}
//  <Container>

//   <Card>
    
//       <Content>
    
//         <H3>Food</H3>
//         </Content>
     
//       <Content2>
//       <H4>200 birr</H4>
//         </Content2>
    
//   </Card>


//   <Card>
   
//       <Content>
   
//         <H3>Grocery</H3>

//       </Content>
//       <Content2>
//       <H4>900 birr</H4>
//         </Content2>
    
//   </Card>


//   <Card>
    
//       <Content>
     
//         <H3>Travel</H3>

//       </Content>
//       <Content2>
//       <H4>400 birr</H4>
//         </Content2>
    
//   </Card>
//   <Card>
    
//       <Content>
    
//         <H3>Health</H3>

//       </Content>
//       <Content2>
//       <H4>600 birr</H4>
//         </Content2>
   
//   </Card>

//   <Card>
    
//     <Content>
  
//       <H3>Health</H3>

//     </Content>
//     <Content2>
//     <H4>600 birr</H4>
//       </Content2>
 
// </Card>

// <Card>
    
//     <Content>
   
//       <H3>Health</H3>

//     </Content>
//     <Content2>
//     <H4>600 birr</H4>
//       </Content2>
 
// </Card>

// <Card>
    
//     <Content>
 
//       <H3>Health</H3>

//     </Content>
//     <Content2>
//     <H4>600 birr</H4>
//       </Content2>
 
// </Card>

// <Card>
    
//     <Content>
 
//       <H3>Health</H3>

//     </Content>
//     <Content2>
//     <H4>600 birr</H4>
//       </Content2>
 
// </Card>

// <Card>
    
//     <Content>
  
//       <H3>Health</H3>
//     </Content>
//     <Content2>
//     <H4>600 birr</H4>
//       </Content2>
 
// </Card>

// </Container>

  
//    </ColumnTwo1>
//    </SectionOne>
//    </SubContainer>
//    </Container1>
//    </Con>
//   )
// }

// export default Budget