import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Sunday",
    money_in: 4000,
    money_out: 2400,
    
  },
  {
    name: "Monday",
    money_in: 3000,
    money_out: 1398,
    
  },
  {
    name: "Tuesday",
    money_in: 2000,
    money_out: 9800,
    
  },
  {
    name: "Wednsday",
    money_in: 2780,
    money_out: 3908,
    
  },
  {
    name: "Thursday",
    money_in: 1890,
    money_out: 4800,
    
  },
  {
    name: "Friday",
    money_in: 2390,
    money_out: 3800,
    
  },
  {
    name: "Saturday",
    money_in: 3490,
    money_out: 4300,
    
  }
];

export default function App() {
  return (
    <Section>
    <BarChart
      width={730}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="money_in" fill="#1f77b4" />
      <Bar dataKey="money_out" fill="#8cb8d6" />
    </BarChart>
    </Section>
  );
}

const Section = styled.section`
margin: 3rem 0rem 0rem 3rem;
@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  
}
`;