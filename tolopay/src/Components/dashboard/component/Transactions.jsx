import React from 'react'
import styled from 'styled-components'
import {Link as RLink } from 'react-router-dom'
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import img from '../assets/5.jpg'

export default function Transactions() {
  return (
    <Container>
        <TitleWrapper>
        <h4>RECENT TRANSACTIONS</h4>
        <Button to = "/history">  <ReadMoreIcon/></Button>
        </TitleWrapper>

        <Transaction>

            <div className="info top">
                <div className='img'>
                <img src={img} alt='avatar'/>
                
                <div className="name">
                <H4>renim Ibrahim</H4>
                <Name>wallet</Name>
                </div>
                    
                </div>
                <Amount>
                <h4 className='received'>200</h4>
                </Amount>
            </div>


            <div className="info">
                <div className='img'>
                <img src={img} alt='avatar'/>
                
                <div className="name">
                <H4>renim Ibrahim</H4>
                <Name>wallet</Name>
                </div>
                    
                </div>
                <Amount>
                <h4 className='received'>3000</h4>
                </Amount>
            </div>

            <div className="info">
                <div className='img'>
                <img src={img} alt='avatar'/>
                
                <div className="name">
                <H4>renim Ibrahim</H4>
                <Name>wallet</Name>
                </div>
                    
                </div>
                <Amount>
                <h4>4000</h4>
                </Amount>
            </div>

             

        </Transaction>
        
    </Container>
  )
}


const Container = styled.div`
  height: 250px;
  width: 360px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;
  border-radius: 1rem; 
  border: 1px solid #1f77b4;
  position: relative;

  h4{
  color: #003f5c;
  }
`;

 const TitleWrapper = styled.div`
 display: flex;
 align-items: space-between;
 justify-content: space-between;
 gap: 100px;
 padding: 10px;
 `;

const Button = styled(RLink)`
border-radius: 4px;
border: none;
color: rgb(58, 135, 190);
white-space: nowrap;
margin-left: 0;
font-size: 15px;
font-weight: 600;
outline: none;
cursor: pointer;
overflow: hidden;
text-decoration: none;
text-align: center;

&:hover{
  color: rgba(58, 135, 190, 0.6);
}
`;

const Transaction = styled.div`
  height: 100%;
  width: 100%; 
  color: #000;
  transition: 0.4s ease-in-out;
 
 
       p{
          font-size: 14px;
          text-decoration: none;
          font-weight: 400;
        }

        .info{

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 20px;
        padding-top: 15px;
        padding-right: 15px;
        padding-left: 15px;
        margin: 0;
       
        
        .img{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 5px;

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }

        .name{
            display: flex;
            flex-direction: column;
            padding: 7px 0 0 0; 
        }
        }
        }
        .top{
            padding-top: 0;
           }

`;


const Name = styled.h4`
font-weight: 300;
`;

const Amount = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
 
h4{
padding-top: 10px;
color: #BB7158;
}

.received{
    color: #91AE5B;
}
`;


const H4 = styled.h4`
font-weight: 550;
color: rgba(58, 135, 190, 0.6);


`;