import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Button from "@material-ui/core/Button";
import { Alert } from "@material-ui/lab";

export default function notification(props) {
const [open, setOpen] = React.useState(false);
const handleToClose = (event, reason) => {
	if ("clickaway" == reason) return;
	setOpen(false);
};
const handleClickEvent = () => {
	setOpen(true);
};

return (
	<div style={{}}>
	<Button onClick={handleClickEvent}>
		click me
	</Button>
	<Snackbar
		anchorOrigin={{
		horizontal: "right",
		vertical: "top",
		}}
		open={open}
    onClose={handleToClose}
		autoHideDuration={3000}
      >
       <Alert severity= {'success'}>
       Transfered Successfuly!
    </Alert>
      </Snackbar>
	</div>
);
}
