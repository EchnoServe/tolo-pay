import React from 'react'
import { RadialBar } from 'recharts'
// import { Legend } from 'recharts'
import { Tooltip } from 'recharts'
import { RadialBarChart } from 'recharts'
import styled from 'styled-components'

const data = [
  {
    "name": "18-24",
    "uv": 31.47,
    "pv": 2400,
    "fill": "#203a21"
  },
  {
    "name": "25-29",
    "uv": 26.69,
    "pv": 4567,
    "fill": "#28492a"
  },
  {
    "name": "30-34",
    "uv": -15.69,
    "pv": 1398,
    "fill": "#215732"
  },
  {
    "name": "35-39",
    "uv": 8.22,
    "pv": 9800,
    "fill": "#37663a"
  },
  {
    "name": "40-49",
    "uv": -8.63,
    "pv": 3908,
    "fill": "#66a266"
  },
  {
    "name": "50+",
    "uv": -2.63,
    "pv": 4800,
    "fill": "#80b280"
  },
  {
    "name": "unknow",
    "uv": 6.67,
    "pv": 4800,
    "fill": "#99c199"
  }
]


const Spiral = () => {
  return (
    <Div className='spiral'>
      <RadialBarChart
        margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
        width={450} 
        height={350} 
        innerRadius="20%" 
        outerRadius="100%" 
        data={data} 
        startAngle={135} 
        endAngle={-210}
        barCategoryGap="1%"
        
>
        <RadialBar minAngle={15} label={{ fill: '#000', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
        <Tooltip />
      </RadialBarChart>
    </Div>
  )
}

const Div = styled.div`
//box-shadow: 0 20px 50px #46833c; 
margin-top: 4rem;
.spiral {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  }
.recharts-default-tooltip {
  background-color: white !important;
  border-color: #073604 !important;
  color: #073604;
}
`; 

export default Spiral