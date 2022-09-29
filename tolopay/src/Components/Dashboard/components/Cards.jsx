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



const Analytics = () => {
  return (
    <Section>
      {amount.map((value) => (
    <div className="big-container">
      <div className="cards">
        <div className="container">
          <div className="outer-card">
            <div className="inner-card">
              <div className="logo1">
                  <GiReceiveMoney />
              </div>
              <div className='content' >
                  <h5>MONEY IN </h5>
                  <h4 style={{color: '#1f77b4'}}>{value.money_in}</h4>
              </div>
            </div>
          </div>
          <div className="card-data">
            <div className="logo-i">
              <GiReceiveMoney />
            </div>
            <h1 style={{color: '#fff'}}>Hello!</h1>
            <p style={{letterSpacing: '1px'}}>TODAY YOUR WALLET HAS BEEN CREDITED WITH {value.money_in}</p>
            <p style={{letterSpacing: '1px', color: '#fff'}}>THANK YOU FOR CHOOSING US!</p>
            <p style={{letterSpacing: '1px'}}>HAVE A BEAUTIFUL DAY!</p>
          </div>
        </div>

        <div className="container">
          <div className="outer-card">
            <div className="inner-card inner-card1">
              <div className="logo2">
                <GiPayMoney />
              </div>
              <div className="content">
                <h5>MONEY OUT</h5>
                <h4 style={{color: '#1f77b4'}}>{value.money_out}</h4>
              </div>
            </div>
          </div>
          <div className="card-data">
            <div className="logo-o">
              <GiPayMoney />
            </div>
            <h1 style={{color: '#fff'}}>Hello!</h1>
            <p style={{letterSpacing: '1px'}}>TODAY YOU HAVE SPENT {value.money_out}.</p>
            <p style={{color:'#fff', letterSpacing:'1.5px'}}>"DO NOT SAVE WHAT IS LEFT AFTER SPENDING, BUT SPEND WHAT IS LEFT AFTER SAVING."</p>
            <p style={{letterSpacing: '1px', fontWeight: '4px'}}>KEEP SAVING!</p>
          </div>        
        </div>

        <div className="container">
          <div className="outer-card">
            <div className="inner-card">
              <div className="logo3">
                <IoStatsChart />
              </div>
              <div className='content'>
                <h5>AVAILABLE</h5>
                <h4 style={{color: '#1f77b4'}}>{value.current_balance}</h4>
              </div>
            </div>
          </div>
          
          <div className="card-data">
            <div className="logo-a">
              <IoStatsChart />
            </div>
            <p style={{letterSpacing: '1px'}}>YOUR CURRENT BALLANCE IS {value.current_balance}.</p>
            <p style={{color:'#fff', letterSpacing:'1PX'}}>YOUR BUDGETS ARE:</p>
            {rData.map((val) =>(
            <p>- {val.name}: {val.value} Birr</p>
            ))}
            <p style={{color:'#fff', letterSpacing:'1PX'}}>HAVE A WONDERFUL DAY!</p>
          </div> 
         
        </div>

        <div className="container">
          <div className="outer-card">
            <div className="inner-card inner-card2">
              <div className="logo4">
                <GiTrophyCup />
              </div>
              <div className="content">
                <h5>POINTS EARNED</h5>
                <h4 style={{color: '#1f77b4'}}>{value.points_earned}</h4>
              </div>
            </div>
          </div>
          <div className="card-data">
            <div className="logo">
              <GiTrophyCup />
            </div>
            <h1 style={{color: '#fff'}}>Congratulations!</h1>
            <p style={{letterSpacing: '1px'}}>YOU HAVE EARNED {value.points_earned} POINTS!</p>
            <p style={{color:'#fff', letterSpacing:'1.5px'}}>"IT'S NOT YOUR SALARY THAT MAKES YOU RICH; IT'S YOUR SPENDING HABITS."</p>
            <p style={{letterSpacing: '1px', fontWeight: '4px'}}>KEEP BUDGETING!</p>
          </div> 
        </div>
    
      </div>
    </div>  
       ))}  
  </Section>
  )
}

const Section = styled.section`
.big-container{
  position: absolute;
  transition: 0.8s ease;
.cards{
display: flex;
position: relative;
gap: 1rem;


.container{
  transition: 0.8s ease;
  position: relative;
  width: 285px;
  height:20px;
  border-radius: 10px;
  // border-bottom: 0.1rem solid #1f77b4;
  // border-right: 0.1rem solid #1f77b4;
  // border-left: 0.2rem solid #1f77b4;
  transition: 0.3s;
  padding: 30px 10px;
  background: #fff;
  z-index: 100;
  cursor: pointer;
}

.container:hover{
  height: 350px;
  transition: 0.8s ease;
}


.outer-card {
  transition: 0.8s ease;
  white-space: nowrap;
  position: relative;
  width: 100%;
  height: 100%; 
  transform: translateY(-57px);
  z-index: 99;
}

.card-data{
  padding: 10px 20px;
  text-align: center;
  transform: translateY(-200px);
  opacity: 0;
  transition: 0.8s ease;
  .logo{
   color: #ff8000;
   font-size: 2rem;
  svg{
    border-radius: 3rem;
    background: #fff;
    padding: 1rem;
  }
  }
  .logo-a{
    color: green;
    font-size: 2rem;
   svg{
     background: #fff;
     border-radius: 3rem;
     padding: 1rem;
   }
   }

   .logo-o{
    color: #e60000;
    font-size: 2rem;
   svg{
     background: #fff;
     border-radius: 3rem;
     padding: 1rem;
   }
   }

   .logo-i{
    color: #1f77b4;
    font-size: 2rem;
   svg{
     border-radius: 3rem;
     background: #fff;
     padding: 1rem;
   }
   }

}

.container:hover > .card-data{
  opacity: 1;
  transform: translateY(-300px);
  transition: 0.8s ease-in-out;
  box-sizing: border-box;
  background: linear-gradient(44.44deg, #408EF4 7.79%, #D1DEEC 94.18%);
}


.inner-card {
  position: relative;
  bottom: 0;
  width: 275px;
  border-radius: 1rem;
  padding: 0.3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  transition: 0.5s ease-in-out;
  border-bottom: 0.1rem solid #1f77b4;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;  
  

  

  h2{
    margin-top: 0.5rem;

  }
  h5{
    margin-top: 0.5rem;
    letter-spacing: 0.1rem;
    color: #1f77b4;
  }

}
  .logo1 {
    color: #fff;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg {
      background: linear-gradient(44.44deg, #408EF4 7.79%, #D1DEEC 94.18%);       
      font-size: 1.5rem;
      border-radius: 34% 64% 77% 26% / 73% 54% 45% 19%;
      padding: 1rem;
    }
  }

  .logo2 {
    // background-color:white;
    color: #fff;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg {
      background: linear-gradient(44.44deg, #D87478 7.79%, #FDEBE5 94.18%);       
      font-size: 1.5rem;
      border-radius: 34% 64% 77% 26% / 73% 54% 45% 19%;      
      padding: 1rem;
    }
  }

  .logo3 {
    // background-color:white;
    color: #fff;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg {
      background: linear-gradient(44.44deg, #47BF82 7.79%, #E3F8D9 94.18%);       
      font-size: 1.5rem;
      border-radius: 34% 64% 77% 26% / 73% 54% 45% 19%;
      padding: 1rem;
    }
  }

  .logo4 {
    // background-color:white;
    color: #fff;
    border-radius: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    svg {
      background: linear-gradient(44.44deg, #765A98 7.79%, #CEBCCC 94.18%);       
      font-size: 1.5rem;
      border-radius: 34% 64% 77% 26% / 73% 54% 45% 19%;
      padding: 1rem;
    }
  }

}
@media screen and (min-width: 280px) and (max-width: 720px) {
.big-container{
  position: static;
}
margin:4rem 0 0 5rem; 
display: flex;
gap: 3rem;
flex-direction: column;

.container{
  width: 400px;
}

.inner-card1 {
  display: flex;
  flex-direction: row-reverse;
  }

  .inner-card2 {
    display: flex;
    flex-direction: row-reverse;
    }
}
}

`;

export default Analytics