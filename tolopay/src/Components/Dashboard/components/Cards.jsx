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



const Cards = () => {
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
                    <h4>Money in</h4>
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
                <h4>Money out</h4>
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
  display: flex;
  gap: 1rem;
}

.card {
  border: 1px solid #1f77b4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 250px;
  padding: 30px;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;

}

.card_inner {
  display: flex;
  flex-direction: row;
  gap: 3rem;
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


@media only screen and (max-width: 855px) {
  .main__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }

.card_inner{
  display: flex;
  flex-direction: column;
  align-items: ;
  justify-content: center;
  gap: 0rem;
}


  .card{
    height: 6rem;
    width: 115px;
    border: 1px solid #1f77b4;
    border-radius: 0.5rem;
    padding: 3rem;
  }
}

`;

export default Cards