import React from 'react'
import styled from 'styled-components'
import { cardStyles } from "./ReusableStyles";
import { IoStatsChart } from "react-icons/io5";
import {GiTrophyCup} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi'
import { GiPayMoney } from 'react-icons/gi';

function data(money_in, money_out, current_balance, points_earned) {
  return { money_in, money_out, current_balance, points_earned };
}

const amount = [
  data("700,000 Birr", '60,000 Birr', "700,000 Birr", "16pts"),
]


const Analytics = () => {
  return (
    <Section>
 
      <div className='analytic'>
    <div className="logo">
        <GiReceiveMoney />
      </div>
    <div className='content' >
        <h5>Money in [Received]</h5>
        <h3>value.money_in</h3>
      </div>
    </div>

    <div className="analytic">
      <div className="logo">
        <GiPayMoney />
      </div>
      <div className="content">
        <h5>Money out [Sent or Spent]</h5>
      <h3>value.money_out</h3>
      </div>
    </div>

    <div className='analytic'>
      <div className="logo">
        <IoStatsChart />
      </div>
      <div className='content'>
        <h5>Current balance [Available]</h5>
        <h3>value.current_ballance</h3>
      </div>
    </div>

    <div className="analytic">

    <div className="logo">
        <GiTrophyCup />
      </div>
    <div className="content">
        <h5>Points earned</h5>
        <h3>value.points_earned</h3>
      </div>
    </div>

    
    
  </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: row;
padding-right: 3rem;
gap: 2rem;
.analytic {
  ${cardStyles};
  padding: 1rem;
  padding-left: 1rem;
  padding: right: 1rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
  &:hover {
    background-color: rgb(105, 119, 254);
    color: white;
    svg {
      color: #6977fe;
    }
  }

  h2{
    margin-top: 0.5rem;
  }
  h5{
    margin-top: 0.5rem;
  }


  .logo {
    background-color:white;
    color: #6977fe;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg {
      font-size: 1.5rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  // grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  // .analytic {
  //   &:nth-of-type(3),
  //   &:nth-of-type(4) {
  //     display: flex;
  //     flex-direction: column;
  //   }

  display: flex;
  flex-direction: column;
  
  .analytic.content{
    padding: 2rem;
  }

  }
}

`;

export default Analytics