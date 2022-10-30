import React from 'react'
import styled from 'styled-components'
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



const Card = () => {
  return (
    <Section>
      {amount.map((value) => (
      <div class="main__cards">
            <div class="card">
              <div class="card_inner">
                <div className="logo1">
                    <GiReceiveMoney />
                  </div>
                <div className='content' >
                    <h3>{value.money_in}</h3>
                    <h4>Recieved</h4>
                  </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner inner-card1">
              <div className="logo2">
                <GiPayMoney />
              </div>
              <div className="content">
                <h3>{value.money_out}</h3>
                <h4>Transfered</h4>
              </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner">
              <div className="logo3">
                <IoStatsChart />
              </div>
              <div className='content'>
                <h3>{value.current_balance}</h3>
                <h4>Available</h4>
              </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner inner-card2">
              <div className="logo4">
                <GiTrophyCup />
              </div>
              <div className="content">
                <h3>{value.points_earned}</h3>
                <h4>Points earned</h4>
              </div>
              </div>
            </div>
          </div>
      ))}
  </Section>
  )
}

const Section = styled.section`
.main__cards {
  
  width: 60rem;
  display: flex;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  transition: 0.4s ease-in-out;
  

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
  }
}
.card {
  border: 1px solid #1f77b4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 250px;
  padding: 30px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}
.card_inner {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: left;
  justify-content: center;
  .content{
    h3{
    }
    h4{
      color: #787878;
      font-weight: 50;
    }
  }
}
.logo1 {
  padding-top: 1rem;
  color: #fff;
  svg {
    background-color: #1f77b4;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2rem;
  }
}
.logo2 {
  padding-top: 1rem;
  color: #fff;
  svg {
    background-color: #bc5090;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2rem;
  }
}
.logo3 {
  padding-top: 1rem;
  color: #fff;
  svg {
    background-color: #ff6361;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2rem;  
  }
}
.logo4 {
  padding-top: 1rem;
  color: #fff;
  svg {
    background-color: #ffa600;
    font-size: 1.5rem;
    padding: 1rem;
    border-radius: 2rem;
  }
}
 

`;

export default Card
