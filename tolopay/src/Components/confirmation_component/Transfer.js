import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const TransferBtn = styled.button`
width: 120px;
height: 40px;
margin: 10px;
border: none;
background-color: rgb(7, 89, 7);
color: white;
border-radius: 0px;
font-size: 18px;
cursor: pointer;
`

const CancelBtn= styled.button`
width: 120px;
height: 40px;
background-color: white;
color: black;
border: 2px solid black;
font-size: 18px;
cursor: pointer;
`

function Transfer() {
  const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
	setOpen(true);
};

const handleToClose = () => {
	setOpen(false);
};

return (
	<div stlye={{}}>
	<h4>click to transfer money</h4>
	<Button variant="outlined" color="primary"
			onClick={handleClickToOpen}>
	Transfer
	</Button>
	<Dialog open={open} onClose={handleToClose}>
		<DialogContent>
		<DialogContentText>
		Are you sure you want to transfer this money?
		</DialogContentText>
		</DialogContent>
		<DialogActions>
    <TransferBtn>Transfer</TransferBtn>
		<CancelBtn onClick={handleToClose}
				color="primary" autoFocus>
			close
		</CancelBtn>


         
		</DialogActions>
	</Dialog>
	</div>
  // return (<div
  //     style={{
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       height: "100vh",
  //       backgroundColor: "#46833C",
  //       color: "#fff",
  //       gap: "3rem",
  //     }}
  //   >
  //     <h1
  //       style={{
  //         fontSize: "10rem",
  //       }}
  //     >
  //       Tolo-pay
  //     </h1>
  //     <p>Pay Anything Anywhere Easily</p>
  //   </div>
  );
}

export default Transfer;