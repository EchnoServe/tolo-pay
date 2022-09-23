import React from 'react'
import styled from 'styled-components'
import { cardStyles } from "./ReusableStyles";
import Expenses from './Expense'

function data(food, transfer, entertainment, tution) {
  return { food, transfer, entertainment, tution};
}

const amount = [
  data("400 Birr", '700 Birr', '300 Birr', "300 Birr"),
]


const Transfers = () => {
  return (
    <Section>
    <div className='cards'>
    <div className='analytic'>
    <div className='content' >
        <h5>Food</h5>
        <h3>value.food</h3>
    </div>
    </div>

    <div className="analytic">
      <div className="content">
        <h5>Transfers</h5>
        <h3>value.transfer</h3>
      </div>
    </div>

    <div className='analytic'>
      <div className='content'>
        <h5>Entertainment</h5>
        <h3><value className="entertainment"></value></h3>
      </div>
    </div>
    
</div>
      
  </Section>
  )
}

const Section = styled.section`
margin: 1rem 0rem 2rem 20rem;
display: grid;
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
// border-radius: 1rem;
grid-row-start: 1;
grid-row-end: 3;


.cards{
  margin-right: 20rem;
  display: grid;
  grid-gap: 2rem;
  // flex-direction: column;
  grid-template-columns: 1fr 1fr;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
  // border-radius: 1rem;
  // margin-bottom: 3rem;
}


.analytic {
  ${cardStyles};
  margin: 0.5rem 0rem 0.5rem 0rem;
  padding: 0.5rem;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;
  // box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
  background-color: rgba(105, 119, 254, 0.1);
  &:hover {
    background-color: rgb(105, 119, 254);
    color: white;
    svg {
      color: #6977fe;
    }
  }

  h2{
    padding-top: 0rem;
    padding-bottom: 0rem;

  }
  h5{
    padding-top: 0rem;
    padding-bottom: 0rem;

  }


  
}


@media screen and (min-width: 280px) and (max-width: 720px) {
 

  display: flex;
  flex-direction: column;
  
  .analytic.content{
    padding: 2rem;
  }

  }
}
`;

export default Transfers