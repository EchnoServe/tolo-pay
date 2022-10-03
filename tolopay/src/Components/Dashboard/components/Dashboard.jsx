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
          {/* <Chart /> */}
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
.container {
  margin: 3rem 15rem;
  display: grid;
  height: 5vh;
  grid-template-rows: 0.2fr 0.5fr 0.5fr;
}

.grid{
  display: grid;
  grid-template-columns: 63rem 25rem;
  gap: 2rem;
}

.row2{
  display: grid;
  grid-template-columns: 25rem 35rem;
  gap: 3.5rem;
  margin-top: 2rem;
}

.col2{
  // margin-left: 2rem;
}


.row3{
  display: grid;
  grid-template-columns: ;
  gap: 1.5rem;
  margin-top: 2rem;
}

@media only screen and (max-width: 978px) {
  .container {
    margin: 2rem 0 2rem 2rem;
    grid-template-columns: 1fr;
  }

}

@media only screen and (max-width: 855px) {
  .container{
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .grid{
    display: grid;
    grid-template-columns: 35rem;
  }

  .row1{
    margin-left: 2rem;
    margin-right: 2rem;
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