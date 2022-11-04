import React,{ useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import axios from 'axios';


export default function Form(props) {

	const {open = true, handleClose,snackbarState, setsnackbarState} = props;
// States for registration
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
// const [submitted, setSubmitted] = useState(false);
const [submitted, setSubmitted] = React.useState(false);
const [error, setError] = useState(false);

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (email === '' || password === '') {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (email === '' || password === '') {
	setError(true);
	} else {

		axios.post('http://localhost:5000/login', {
			"email_id" : email,
			"password": password
		})
		.then(response => {setSubmitted(true)
			handleClose(false)
			setsnackbarState({...snackbarState, snackbarOpen:true})
		})
		.catch(error => {
			setSubmitted(false);
			console.error('There was an error!', error);
		});
	// console.log()
	// setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
    
    useEffect(()=>{
        setTimeout(function() {
            setSubmitted(false)
             }, 3000);
           },
       [])
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1></h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1></h1>
	</div>
	);
};

return (
	<div className="form">


	{/* Calling to the methods */}
	<div className="messages">
		{/* {errorMessage()} */}
		{successMessage()}
	</div>

	<Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To login to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
      	<form>
		{/* Labels and inputs for form data */}

		{/* <label className="label">Email</label> */}
		{/* <input onChange={handleEmail} className="input" */}

<Grid container spacing={3} flexDirection='column' justifyContent={'center'} alignItems={'center'}>
<Grid item >
		<TextField
          required
          id="outlined-required"
          label="Email"
      
		  onChange={handleEmail}
        />
		</Grid>

		{/* value={email} type="email" /> */}

		{/* <label className="label">Password</label>
		<input onChange={handlePassword} className="input" */}

<Grid item>
<TextField
			type='password'
			onChange={handlePassword}
          required
          id="outlined-required"
          label="Password"
      
		  onChange={handlePassword}
        />

</Grid>
</Grid>
	
		
		{/* value={password} type="password" /> */}

		<button onClick={handleSubmit} className="btn" type="submit">
		Login
		</button>

	</form>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>

    
	</div>
);
}



