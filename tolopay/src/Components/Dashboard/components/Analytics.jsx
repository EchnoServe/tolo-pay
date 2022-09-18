import React from 'react'
import styled from 'styled-components'
import { cardStyles } from "./ReusableStyles";
import { IoStatsChart } from "react-icons/io5";
import {GiTrophyCup} from 'react-icons/gi';
import {GiReceiveMoney} from 'react-icons/gi'
import { GiPayMoney } from 'react-icons/gi';

const Analytics = () => {
  return (
    <Section>

    <div className='analytic'>
    <div className='content'>
        <h5>Money in</h5>
        <h2>700,000 Birr</h2>
        <h5>Total received</h5>
      </div>
      <div className="logo">
        <GiReceiveMoney />
      </div>
    </div>

    <div className="analytic">
      <div className="logo">
        <GiPayMoney />
      </div>
      <div className="content">
        <h5>Money out</h5>
        <h2>60,000 Birr</h2>
        <h5>Total sent or spent</h5>
      </div>
    </div>

    <div className='analytic'>
      <div className="logo">
        <IoStatsChart />
      </div>
      <div className='content'>
        <h5>Current balance</h5>
        <h2>700,000 Birr</h2>
        <h5>Available</h5>
      </div>
    </div>

    <div className="analytic">
    <div className="content">
        <h5>Points earned</h5>
        <h2>16pts</h2>
      </div>
      <div className="logo">
        <GiTrophyCup />
      </div>
    </div>
  </Section>
  )
}

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
.analytic {
  ${cardStyles};
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;
  box-shadow: 0 20px 50px #46833c; 
  &:hover {
    background-color: #46833c;
    color: white;
    svg {
      color: green;
    }
  }



  .logo {
    background-color:white;
    color: dark-green;
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
      flex-direction: row-reverse;
    }
  }
}
`;

export default Analytics