import { rgb } from 'd3';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const data = [
  { name: 'Food', value: 400 },
  { name: 'Transfers', value: 300 },
  { name: 'Entertainment', value: 300 },
  { name: 'House hold', value: 200 },
  { name: 'tution fee', value: 600 },

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
      <text x={ex + (cos >= 0 ? 1 : -1) * 2} y={ey} textAnchor={textAnchor} fill="#000">{`${value} Birr`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 2} y={ey} dy={18} textAnchor={textAnchor} fill="#333">
        {`[${(percent * 100).toFixed(2)}% `}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={38} dx={-25} textAnchor={textAnchor} fill="#333">
        {`of total expenses]`}
      </text>
    </g>
  );
};

export default class Expenses extends PureComponent {

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
      <Section lassName='chart'>
      <ResponsiveContainer width="100%" height="100%">
         <PieChart >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="51%"
            cy="40%"
            innerRadius={60}
            outerRadius={70}
            fill='rgb(50, 130, 200)'
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
      
      </Section>
    );
  }
}

const Section = styled.section`
// box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
border-radius: 1rem;
// background-color: #ebc4d2;
box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px;
margin: 2rem 0rem 1rem 20rem;



@media screen and (max-width: 768px) {
  .chart{
    display: flex;
    flex-direction: column;
  }
}

`;
