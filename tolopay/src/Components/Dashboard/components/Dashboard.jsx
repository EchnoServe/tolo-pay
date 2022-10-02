import React from 'react'
import Analytics from './Cards'
import Table from './Table'
import Expense from './Doughnut'
import Chart from './Chart'
import styled from 'styled-components'

const Dashboard = () => {
  return (
    <Section>
    <div className='grid'>
      <div className="row1">
          <Analytics />
          <div className="row">
           <Chart />
          <Expense />
          </div>
          
      </div>
      <div className="row2">
          <Table />
          
      </div>
    </div>
    </Section>
  )
}

const Section = styled.section`
.grid{
  
  margin: 4rem 5rem 5rem 20rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100vw;
  overflow: hidden;
   
    .row{
      margin-top: 6rem;
      display: grid;
      grid-template-columns: 40rem 39rem;
    }

  

  .row2{
    // margin-top: 1rem;
    display: grid;
    grid-template-columns: 79rem;
  }
 
}
@media (max-width: 1700px){
  .grid{
    margin: 4rem 5rem 5rem 15rem;
  }
}
@media (max-width: 1550px){
  .grid{
    margin: 4rem 5rem 5rem 10rem;
  }
}
@media (max-width: 1450px){
  .row{
    grid-template-columns: 30rem 29rem;
  }
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  .grid{
    display: flex;
    flex-direction: column;
    // grid-template-rows: repeat(4);
    margin: 0rem;

   
    .row{
      display: flex;
      flex-direction: column;
      // grid-template-rows: 30rem 30rem;
    }
  
    .row2{
      display: flex;
      // grid-template-columns: 30rem;
    }
  
  }

}

`;

export default Dashboard;