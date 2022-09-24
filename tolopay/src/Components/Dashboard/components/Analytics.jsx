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
        <h4>Money in [Received]</h4>
        <h3>value.money_in</h3>
      </div>
    </div>

    <div className="analytic">
      <div className="logo">
        <GiPayMoney />
      </div>
      <div className="content">
        <h4>Money out [Sent or Spent]</h4>
      <h3>value.money_out</h3>
      </div>
    </div>

    <div className='analytic'>
      <div className="logo">
        <IoStatsChart />
      </div>
      <div className='content'>
        <h4>Current balance [Available]</h4>
        <h3>value.current_ballance</h3>
      </div>
    </div>

    <div className="analytic">

    <div className="logo">
        <GiTrophyCup />
      </div>
    <div className="content">
        <h4>Points earned</h4>
        <h3>value.points_earned</h3>
      </div>
    </div>

    
    
  </Section>
  )
}

const Section = styled.section`
margin: 2rem 20rem 0rem 20rem;
display: flex;
flex-direction: row;
padding-right: 1rem;
gap: 1rem;
.analytic {
  ${cardStyles};
  padding: 1rem;
  padding-left: 1rem;
  padding: right: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
  background-color: #1f77b4;
  // &:hover {
  //   background-color: #1f77b4;
  //   color: white;
  //   svg {
  //     color: #1f77b4;
  //   }
  //   h4{
  //     color: white;
  //   }
  // }
  h2{
    margin-top: 0.5rem;
  }
  h4{
    margin-top: 0.5rem;
    color: white;
  }
  .logo {
    background-color:white;
    color: #1f77b4;
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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  .analytic {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      display: flex;
      flex-direction: colun;
    }
  
  }
}
`;

export default Analytics