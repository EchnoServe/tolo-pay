import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "styled-components";


function createData(from, to, previous_ballance, transfer_amount, current_ballance, dateAndTime, remark) {
  return { from, to, previous_ballance, transfer_amount, current_ballance, dateAndTime, remark};
}

const rows = [
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'other'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'food'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'gym'),  
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", ''),

];

const makeStyle=(remark)=>{
  if(remark === 'other')
  {
    return {

      background: '#ffadad8f',
      color: 'red',
    }
  }
}
export default function BasicTable() {
  return (
      <Div className="Table">
      <h4>YOUR TRANSACTION HISTORY</h4>
        <TableContainer
          component={Paper}
          // style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ maxWidth: 8 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left"></TableCell>
                <TableCell align="left">From</TableCell>
                <TableCell align="left">To</TableCell>
                <TableCell align="left">Previous Ballance</TableCell>
                <TableCell align="left">Transfer Amount</TableCell>
                <TableCell align="left">Current Ballance</TableCell>
                <TableCell align="left">Date & Time</TableCell>
                <TableCell align="left">Remark</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "rgba(105, 119, 254, 0.1)" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left"></TableCell>
                  <TableCell component="th" scope="row">{row.from}</TableCell>
                  <TableCell align="left">{row.to}</TableCell>
                  <TableCell align="left">
                    <span>{row.previous_ballance}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span>{row.transfer_amount}</span>
                    </TableCell>
                  <TableCell align="left">
                    <span>{row.current_ballance}</span>
                    </TableCell>
                  <TableCell align="left">
                    <span className="left">{row.dateAndTime}</span>
                  </TableCell>
                  <TableCell align="left">
                    <span className="remark" style={makeStyle(row.remark)}>{row.remark}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Div>
  );
}

const Div = styled.div`
box-shadow: rgba(31, 119, 180, 0.4) 0px 8px 24px; 
border-radius: 0.5rem;
border: 1px solid #1f77b4;

width: 930px;
.MuiTableRow-root > * {
  white-space: nowrap;
}

.MuiTableRow-root.MuiTableRow-head > * {
  // font-weight: bold !important;
  color: #003f5c !important;
  letter-spacing: 1px;
  font-size: 1rem;
  white-space: nowrap;
  padding: 10px;
}
.Table:last-child {
  border-bottom: 0.2rem solid #1f77b4;
}
.remark{
  padding: 8px;
  border-radius: 9px;
}
h4{
  letter-spacing: 2px;
  color: #003f5c;
  text-align: center;
}
/* @media screen and (max-width: 768px) {
  border-radius: 0rem;
  overflow: auto;
  white-space: wrap;
  width: 28rem;  
} */
`;