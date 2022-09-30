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
      <div className="container">
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
      <Bar dataKey="money_in" fill="#1f77b4" />
      <Bar dataKey="money_out" fill="#8cb8d6" />
    </BarChart>
    </div>
    </div>
    </Section>
  );
}

const Section = styled.section`
.inner-container{
  // border: 1px solid #1f77b4;
box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px; 
border-radius: 1rem;
padding: 1rem 0rem 1rem 0rem;
margin: 2rem 1rem 0rem 0rem;
transition: all 0.8s ease;
background-color: #fff; 
}

.inner-container:hover{
  margin-top: 1rem;
  margin-right: 0rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  transition: all 0.8s ease;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px; 
  border: 1px solid #1f77b4;
  // border: none;
}

.title{
  text-gap: 1px;
  margin-left: 6.8rem;
  color: #1f77b4;
  letter-spacing: 2px;
}

@media screen and (min-width: 280px) and (max-width: 720px) {
margin-left: 1rem;
margin-top: 2rem;
margin-right: 1rem;
}
`;