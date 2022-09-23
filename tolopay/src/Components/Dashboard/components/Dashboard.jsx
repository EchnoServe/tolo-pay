import React from 'react'
import { useEffect } from "react";
import Analytics from './Analytics'
import styled from 'styled-components'
import scrollreveal from "scrollreveal";
import BasicTable from './Table';
import Transfers from './Expense';
import Expenses from './Transfers';
import Chart from './Chart';

function Dashboard() {

    useEffect(() => {
        const sr = scrollreveal({
          origin: "bottom",
          distance: "80px",
          duration: 2000,
          reset: false,
        });
        sr.reveal(
          `
            nav,
            .row__one,
            .row__two
            
        `,
          {
            opacity: 0,
            interval: 100,
          }
        );
      }, []);

  return (
    <Section>
        <div className="row1">
          <Analytics />
        </div>

        <div className="row2">
          <Transfers />
          <Chart />
        </div>      

        <div className="row3">
          <BasicTable />
        </div>
        
    </Section>
  )
}

const Section = styled.section`
  dispaly: flex;
  flex-direction: row;

  .row2{
    display: grid;
    grid-template-columns: 50rem 1rem;
    // grid-column-template: 1fr 2fr; 
  }
  
  .row3{
    display: grid;
    grid-template-columns: 100rem; 
  }
       
      @media screen and (min-width:250px) and (max-width: 768px) {
    margin-left: 1rem;

      .row1{
        dispaly: flex;
        flex-direction: column;
      }
      .row2{
        dispaly: flex;
        flex-direction: column;
      }
      .row3{
        dispaly: flex;
        flex-direction: column;
      }
    }
  }
`;

export default Dashboard