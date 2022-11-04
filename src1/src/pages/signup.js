import React,{ useEffect } from 'react';
import Popup from 'reactjs-popup';
import { useState } from 'react';
import axios from 'axios';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";


export default function Form(props) {

	

	const {open = true, handleClose, snackbarState, setsnackbarState} = props;
// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [MobileNumber, setMobileNumber] = useState('');

// States for checking the errors
// const [submitted, setSubmitted] = useState(false);
const [submitted, setSubmitted] = React.useState(false);
const [error, setError] = useState(false);



// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

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

// Handling the MobileNumber change
const handleMobileNumber = (e) => {
	setMobileNumber(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '' || MobileNumber === '') {
	setError(true);
	} else {

		axios.post('http://localhost:5000/userSignup', {
			"name":name,
			"email" : email,
			"password": password,
			"phone": MobileNumber
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
		{/* <h1>User {name} and {email} successfully registered!!</h1> */}
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
	{/* <div>
		<h1></h1>
	</div> */}

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<Dialog open={open} onClose={handleClose}>
        <DialogTitle>signup</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To signup to this website, please enter your required fields here. We
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
          label="Name"
      
		  onChange={handleName}
        />
		</Grid>

		{/* value={Name} type="Name" /> */}
        {/* <label className="label">Name</label>
		<input onChange={handleName} className="input" */}
	<Grid item>
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

<Grid item>
<TextField
			type='MobileNumber'
			onChange={handleMobileNumber}
          required
          id="outlined-required"
          label="MobileNumber"
      
		  onChange={handleMobileNumber}
        />
</Grid>
</Grid>
	
		
		{/* value={password} type="password" /> */}

		<button onClick={handleSubmit} className="btn" type="submit">
		signup
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



