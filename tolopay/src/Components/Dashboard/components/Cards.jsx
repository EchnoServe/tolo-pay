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

function createData(name, value){
  return{name, value};
}

const rData = [
  createData('Food', 400 ),
   createData('Transfers', 300 ),
  createData('Entertainment', 300 ),
  createData('House hold', 200 ),
   createData('tution fee', 600 ),

];



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
                    <h3 style={{color: '#1f77b4'}}>{value.money_in}</h3>
                    <h4 style={{color:'#003f5c'}}>Money in</h4>
                  </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner inner-card1">
              <div className="logo2">
                <GiPayMoney />
              </div>
              <div className="content">
                <h3 style={{color: '#1f77b4'}}>{value.money_out}</h3>
                <h4 style={{color:'#003f5c'}}>Money out</h4>
              </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner">
              <div className="logo3">
                <IoStatsChart />
              </div>
              <div className='content'>
                <h3 style={{color: '#1f77b4'}}>{value.current_balance}</h3>
                <h4 style={{color:'#003f5c'}}>Available</h4>
              </div>
              </div>
            </div>

            <div class="card">
              <div class="card_inner inner-card2">
              <div className="logo4">
                <GiTrophyCup />
              </div>
              <div className="content">
                <h3 style={{color: '#1f77b4'}}>{value.points_earned}</h3>
                <h4 style={{color:'#003f5c'}}>Points earned</h4>
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
  gap: 2rem;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
  width: 190px;
  padding: 50px;
  border-radius: 1rem;
  background: #ffffff;
  box-shadow: 5px 5px 13px #ededed, -5px -5px 13px #ffffff;
}

.card_inner {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: left;
  justify-content: space-between;
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
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

.card_inner{
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  gap: 2rem;
}


  .card{
    height: 8rem;
  }

`;

export default Cards