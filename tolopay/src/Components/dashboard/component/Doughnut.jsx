
// import { rgb } from 'd3';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector,Cell, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const COLORS = ['#003f5c', '#58508d','#844d6c', '#bc5090','#ff6361', '#695356','#ba5139', '#ea6d30', '#db7b65','#ef8f52', '#ecbb65', '#fbc9be','#ffa600', '#1f77b4','#026573', '#255f63','#35523c'];
const data = [
  { name: 'Food', value: 400},
  { name: 'Transfers', value: 300 },
  { name: 'Entertainment', value: 300},
  { name: 'House hold', value: 200},
  { name: 'Sport', value: 600},
  { name: 'Transport', value: 600},
    
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#000">{`${value} Birr`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#333">
        {`[${(percent * 100).toFixed(2)}% `}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={35} textAnchor={textAnchor} fill="#333" className='text'>
        {`of total expenses]`}
      </text>
    </g>
  );
};

export default class Doughnut extends PureComponent {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
      <Section>
      <h4>YOUR BUDGETS</h4>
      <ResponsiveContainer >
         <PieChart>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"

            innerRadius={35}
            outerRadius={60}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          >
            	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
            </Pie>
         
        </PieChart>
      </ResponsiveContainer>
      </Section>
    );
  }
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-template-rows: 2fr;
  box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;
  border-radius: 0.5rem;
  border: 1px solid #1f77b4;
  height: 250px;
  width: 540px;
  position: relative;
  h4{
  
    color: #003f5c;

    padding-top: 0.5rem;
    position: absolute;
    top: 0px;
  }
@media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-rows: 3fr;
    height: 250px;
    width: 90%;
    border-radius: 0rem;
    margin: 0 30px 30px 30px;
  
    .text{
      display: flex;
      position: relative;
      white-space: pre-wrap;
    }
  
}
`;
