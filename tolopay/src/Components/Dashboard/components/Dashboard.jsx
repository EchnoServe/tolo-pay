import React from 'react'
import styled from 'styled-components'
import Cards from './Cards';
import VirtualCard from './VirtualCard';
import Chart from './Chart'
import Table from './Table'
import Doughnut from './Doughnut'

const Dashboard = () => {
  return (
    <Section>
      <div className="container">
        <div className="grid">
          <div className="col1">
          <div className="row1">
            <Cards />
          </div>
          <div className="row2">
            <VirtualCard />
            <Doughnut />
          </div>
          </div>
          <div className="col2">
            <Chart />
          </div>
          </div>
        
        <div className="row3">
          <Table />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin-left: 0rem;


.grid{
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.row2{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}

.col2{
  margin-right: 0rem;
}


.row3{
  display: grid;
  margin-top: 2rem;
  margin-right: 6rem;
}

@media only screen and (max-width: 978px) {
  .container {
    margin: 1rem;
    grid-template-columns: 1fr;
  }

}

@media only screen and (max-width: 855px) {
  margin: 0rem;


  .grid{
    display: grid;
    grid-template-columns: 25rem;
    margin-left: 0rem;
    margin-right: 0rem;
  }

  .row2 {
    margin-left: 0rem;
    margin-right: 0rem;
    grid-template-columns: 25rem;
    margin-top: 30px;
    gap: 2rem;
  }
  .row3 {
    margin-left: 0rem;
    margin-right: 0rem;
    grid-template-columns: 25rem;
    margin-top: 30px;
  }
}

`;

export default Dashboard