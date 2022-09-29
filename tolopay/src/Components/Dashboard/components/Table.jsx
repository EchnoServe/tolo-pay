import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import styled from "@emotion/styled/types/base";
import styled from "styled-components";


function createData(to, from, previous_ballance, transfer_amount, current_ballance, dateAndTime, Remark) {
  return { to, from, previous_ballance, transfer_amount, current_ballance, dateAndTime, Remark};
}

const rows = [
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
  createData("Troye Sivan", 'Harry Styles', "10,000",'20,000','20,000', "19 july 4:30", 'Approved'),
];



export default function BasicTable() {
  return (
      <Div className="Table">
      <h3>Your transaction history</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>To</TableCell>
                <TableCell align="left">From</TableCell>
                <TableCell align="left">Previous Ballance</TableCell>
                <TableCell align="left">Transfer amount</TableCell>
                <TableCell align="left">Current Ballance</TableCell>
                <TableCell align="left">Date & Time</TableCell>
                <TableCell align="left">Remark</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">{row.to}</TableCell>
                  <TableCell align="left">{row.from}</TableCell>
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
                    <span className="status">{row.remark}</span>
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
margin-right: 10rem;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; 
margin-top: 2rem;
margin-bottom: 7rem;
overflow: auto;
white-space: nowrap;
// padding-left: 1rem;
.MuiTableRow-root > * {
  padding: 30px;
}
.MuiTableRow-root.MuiTableRow-head > * {
  font-weight: bold !important;
  color: #6977fe !important;
}
.Table td,
th {
  border: none !important;
}
.Table:first-child {
  border-radius: 0.7rem !important;
}
.status {
  padding: 8px;
  border-radius: 9px;
}
.Details {
  color: #00b5ff !important;
}
h3{
  color: rgb(105, 119, 254);
  padding-left: 2rem;
  padding-top: 2rem;
}
@media screen and (max-width: 1200px) {
  .Table {
    width: 100%;
    margin-top: 2rem;
  }
}
@media screen and (max-width: 768px) {
  .Table{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 23rem;
  }
}
`;