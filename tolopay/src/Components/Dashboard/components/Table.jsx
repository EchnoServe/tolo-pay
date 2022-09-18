import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';


const List = () => {
const rows = [
    {
    type: 'Transfer',
    transferMethod: 'wallet to wallet',
    amount: '30,000 Birr',
    dateTime: '19 july 4:30',
    },
    {
    type: 'Withdrawal',
    transferMethod: 'wallet debit',
    amount: '20,000 Birr',
    dateTime: '19 july 4:30',
    },
    {
    type: 'Transfer',
    transferMethod: 'wallet to bank',
    amount: '12,000 Birr',
    dateTime: '19 july 4:30',
    }
]

  return (
    <Section>
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className='tableCellh'>
          <TableRow>
            <TableCell className='tableCell1'><h4>List of transaction</h4></TableCell>
            <TableCell className='tableCell1'><h4>Transfer methode</h4></TableCell>
            <TableCell className='tableCell1'><h4>Amount</h4></TableCell>
            <TableCell className='tableCell1'><h4>Date & Time</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
            <TableRow
              key={row.dateTime}
            >
              <TableCell className='tableCell'>{row.type}</TableCell>
              <TableCell className='tableCell'>{row.transferMethod}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.dateTime}</TableCell>
            </TableRow>
           </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <a className="view" href="#">
            View all <HiArrowNarrowRight />
           </a>
    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
margin-top: 6rem;
// box-shadow: 0 20px 50px #46833c; 

.tableCell{
    background-color: #f3fcf2;
}

.tableCellh{
    color: dark-green;
    background-color: #b5cfb4;
    &:hover{
        color: white;
        background-color: #46833c;
    }

.tableCell1{
    color:
}
}
.view {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: #073604;
  font-weight: bold;
  margin-top: 1rem;
  gap: 0.5rem;
  svg {
    transition: 0.3s ease-in-out;
    font-size: 1.4rem;
  }
  &:hover {
    svg {
      transform: translateX(0.5rem);
    }
  }
}

`;

export default List