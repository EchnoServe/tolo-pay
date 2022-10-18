import React from 'react'
import { RadialBar } from 'recharts'
import { Legend } from 'recharts'
import { Tooltip } from 'recharts'
import { RadialBarChart } from 'recharts'
import styled from 'styled-components'

const data = [
  {
    "name": "Sunday",
    "uv": 31.47,
    "fill": "#203a21"
  },
  {
    "name": "Monday",
    "uv": 26.69,
    "fill": "#28492a"
  },
  {
    "name": "Tuesday",
    "uv": -15.69,
    "fill": "#215732"
  },
  {
    "name": "Wednsday",
    "uv": 8.22,
    "fill": "#37663a"
  },
  {
    "name": "Thursday",
    "uv": -8.63,
    "fill": "#66a266"
  },
  {
    "name": "Friday",
    "uv": -2.63,
    "fill": "#80b280"
  },
  {
    "name": "Saturday",
    "uv": 6.67,
    "fill": "#99c199"
  }
]

const style = {
	top: 90,
	left: 350,
	lineHeight: '24px',
};

const Spiral = () => {
  return (
    <Div className='spiral'>
      <RadialBarChart
        width={500} 
        height={300} 
        cx={150}
        cy={180}
        innerRadius="20%" 
        outerRadius="130%"
        barSize={500} 
        data={data} 
        startAngle={135} 
        endAngle={-210}
        barCategoryGap="5%"
        
>
        <RadialBar minAngle={15} label={{ fill: '#000', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
        <Legend iconSize={30} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
        <Tooltip />
      </RadialBarChart>
    </Div>
  )
}

const Div = styled.div`
// box-shadow: 0 20px 50px #46833c; 
margin-top: 5rem;
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