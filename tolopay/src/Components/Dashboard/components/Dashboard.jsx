import React from 'react'
import { useEffect } from "react";
import Analytics from './Analytics'
import styled from 'styled-components'
import scrollreveal from "scrollreveal";
import BasicTable from './Table';
// import Transfers from './Expense';
import Expenses from './Transfers';
// import TriangleBar from './TriangleBar'

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
    <Section style={{
      marginLeft: "20%",
    }}>
         
             
                <Analytics />
                <BasicTable />
 
                
           
                    
        
    </Section>
  )
}

const Section = styled.section`
    display: grid;
    padding-top: 3rem;
    padding-right: 3rem;
    padding-left: 3rem;
    height: 100%
    .grid{
        display: grid;
        grid-templete-columns: 1fr 2fr;
        grid-row-gap: 5rem;
        margin-top: 2rem;
    }
        .row_one{
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
        }
         }
       
       
      @media screen and (min-width:250px) and (max-width: 768px) {
    // margin-left: 0;
    .grid {
      .row_one{
        grid-template-columns: 1fr;
      }
      .row_two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Dashboard