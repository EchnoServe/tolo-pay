import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

const data = [
  {
    alias: 'Su',
    name: "Sunday",
    money_in: 4000,
    money_out: 2400,
    
  },
  {
    alias: 'Mo',
    name: "Monday",
    money_in: 3000,
    money_out: 1398,
    
  },
  {
    alias: 'Tu',
    name: "Tuesday",
    money_in: 2000,
    money_out: 9800,
    
  },
  {
    alias: 'We',
    name: "Wednsday",
    money_in: 2780,
    money_out: 3908,
    
  },
  {
    alias: 'Th',
    name: "Thursday",
    money_in: 1890,
    money_out: 4800,
    
  },
  {
    alias: 'Fr',
    name: "Friday",
    money_in: 2390,
    money_out: 3800,
    
  },
  {
    alias: 'Sa',
    name: "Saturday",
    money_in: 3490,
    money_out: 4300,
    
  }
];

export default function App() {
  return (
    <Section>
        <div className="inner-container">
       <div className="title">
        <h4>YOUR WEEKLY TRANSACTION</h4>
      </div>
    <BarChart className="bar-chart"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 50,
        right: 0,
        left: 50,
        bottom: 5
      }}
    >
     
      <CartesianGrid strokeDasharray="0 9000" />
      <XAxis dataKey="alias" margin-top='1rem'/>
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="money_in" fill="#58508d" />
      <Bar dataKey="money_out" fill="#bc5090" />
    </BarChart>
    </div>
    </Section>
  );
}

const Section = styled.section`
padding: 0rem;
.inner-container{
  padding: 50px 60px 60px 5px;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;
  border-radius: 1rem; 
}


.title{
  text-gap: 1px;
  margin-left: 6.8rem;
  color: #003f5c ;
  letter-spacing: 2px;
}

@media screen and (min-width: 280px) and (max-width: 720px) {
  

}
`;