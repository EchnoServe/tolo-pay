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

export default function Charts() {
  return (
    <Section>
        <div className="inner-container">
       <div className="title">
        <h4>YOUR WEEKLY TRANSACTIONS</h4>
      </div>
    <BarChart className="bar-chart"
      width={466}
      height={220}
      data={data}
      margin={{
        top: 20,
        right: 20,
        left: 20,
        bottom: 20
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

const Section = styled.div`
 
.inner-container{
  padding-top:15px;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;
  border-radius: 1rem; 
  border: 1px solid #1f77b4;
  /* width: 400px; */
  height: 17rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: 0.4s ease-in-out;
   
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    /* height: max-content;
    width: 90%;
    margin-top: 1rem; */
  }







}
.title{
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003f5c;
  
  white-space: nowrap;
}
@media screen and (min-width: 280px) and (max-width: 720px) {
  .inner-container{
    border-radius: 0rem;
    width: 70%;
    margin-left: 88px;
    margin-right: 40px;
    /* margin: 0 30px; */

  }
}
`;