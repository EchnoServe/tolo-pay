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
        <div className="row1">
          <Cards />
        </div>
        <div className="row2">
          <VirtualCard />
          <Doughnut />

        </div>
        <div className="row3">
          <Table />
          <Chart />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`

.container {
  margin: 5rem 15rem;
  display: grid;
  height: 5vh;
  grid-template-rows: 0.2fr 0.5fr 0.5fr;
}


.row1{
}

.row2{
  display: grid;
  grid-template-columns: 37rem 37rem;
  gap: 4.5rem;
  margin-top: 2rem;;
}


.row3{
  display: grid;
  grid-template-columns: 42rem 35rem;
  gap: 1.5rem;
  margin-top: 3rem;
}

@media only screen and (max-width: 978px) {
  .container {
    margin-left: 2rem;
    margin-right: 2rem;
    grid-template-columns: 1fr;
  }

}

@media only screen and (max-width: 855px) {
  .container{
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .row2 {
    margin-left: 0rem;
    margin-right: 0rem;
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
  .row3 {
    margin-left: 0rem;
    margin-right: 0rem;
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}

`;

export default Dashboard