import React from 'react'
import { useEffect } from "react";
import Analytics from './Analytics'
import styled from 'styled-components'
import Spiral from './Spiral';
import Chart from './Chart';
import scrollreveal from "scrollreveal";
import Table from './Table';
import Transfers from './Transfers';

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
        <div className='grid'>
            <div className='row_one'>
                <Analytics />
                <Chart />
            </div>
            <div className='row_two'>
                <Spiral />
                <Table />
                <Transfers />
            </div> 
        </div>
    </Section>
  )
}

const Section = styled.section`
    margin-left: 10vw;
    padding: 2rem;
    padding-left: 0rem;
    height: 100%

    .grid{
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 3rem;
        margin-top: 2rem;
    }
        .row_one{
            display: grid;
            grid-template-columns: repeat(2,1fr);
            height: 50%;
            gap: 1rem;
        }

        .row_two{
            display: grid;
            grid-template-columns: repeat(3,1fr);
            height: 50%;
            gap: 1rem;
        }
       
      @media screen and (min-width: 280px) and (max-width: 1080px) {
    // margin-left: 0;
    .grid {
      .row_one,
      .row_two {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default Dashboard