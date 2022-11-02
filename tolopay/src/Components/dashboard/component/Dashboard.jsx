import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import VirtualCard from './VirtualCard';
import Charts from './Charts'
// import Table from './Table'
import Doughnut from './Doughnut'
import Transactions from './Transactions';

const Dashboard = () => {
  return (
   <Container>
    <SubContainer>
     <SectionOne>

        <ColumnOne1>
        <Card/>
        </ColumnOne1>
        <ColumnTwo1>
        <VirtualCard/>
        <Charts/>
        </ColumnTwo1>

     </SectionOne>

     <SectionTwo>

        <ColumnOne2>
        <Transactions/>
        <Doughnut/>

        {/* <Table/> */}

        </ColumnOne2>
{/* 
        <InvoiceContainer>   
        </InvoiceContainer> */}

        {/* <ColumnTwo2>
        </ColumnTwo2> */}

        

     </SectionTwo>

    </SubContainer>
   </Container>
  )
}


const Container = styled.div`
  width: 100%;
  /* height: 800px;
  margin-top: 80px; */
 
  /* background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%); */
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  /* margin: 1rem 4rem 1rem 4rem; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 1200px;
    margin: 1rem 0 0 0;
  }
`;

const SubContainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
  }
`;
const SectionOne = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  height: 40%;
  gap: 1rem;
  width: 100%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
    height: max-content;
  }
`;
const ColumnOne1 = styled.div`
  display: flex;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const ColumnTwo1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 115%;
  width: 100%;
  
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    justify-content: center;
    align-items: center;
  }
`;

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;

const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
 
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    height: max-content;
    width: 100%;
  }
`;
const ColumnOne2 = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
const InvoiceContainer = styled.div`
  height: 60%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnTwo2 = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;




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