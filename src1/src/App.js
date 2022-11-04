import React, {useState} from 'react';
import './App.css';
import Navbar from './components/index';
import { BrowserRouter, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import SignUp from './pages/signup';
import Login from './pages/login';
import Agentlogin from './pages/Agentlogin';
import Snackbar from '@mui/material/Snackbar';
import Blocks from './components/Blocks';
import ItBlockView from './components/BlockView/ItBlockView.js'
import DividentBlockView from './components/BlockView/DividentBlockView.js'




function App() {

	const [openLoginModal, setOpenLoginModal] = useState('')
	const [openSignUpModal, setOpenSignUpModal] = useState('')
	const [openAgentloginModal, setOpenAgentloginModal] = useState('')
	const [snackbarState, setsnackbarState] = React.useState({
		snackbarOpen: false,
		vertical: 'top',
		horizontal: 'center',
		message:''
	  });
	  const { vertical, horizontal, snackbarOpen } = snackbarState;
	  
return (
	<>
	
	<BrowserRouter>
	<Navbar handleLoginBtn ={()=>setOpenLoginModal(true)} handleSignupBtn = {()=>setOpenSignUpModal(true)} handleAgentloginBtn = {()=>setOpenAgentloginModal(true)} snackbarState={snackbarState} setsnackbarState={setsnackbarState} />
	<Login open={openLoginModal} handleClose ={()=>setOpenLoginModal(false)} snackbarState={snackbarState}setsnackbarState={setsnackbarState}/>
	<SignUp open={openSignUpModal} handleClose ={()=>setOpenSignUpModal(false)} snackbarState={snackbarState} setsnackbarState={setsnackbarState}/>
	<Agentlogin open={openAgentloginModal} handleClose ={()=>setOpenAgentloginModal(false)} snackbarState={snackbarState} setsnackbarState={setsnackbarState}/><Routes>
		<Route exact path='/' element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/signup' element={<SignUp/>} />
		<Route path='/login' element={<Login/>} />
		<Route path='/Agentlogin' element={<Agentlogin/>} />	
		<Route path='/stockfolio/discover' element={<Blocks/>} />	
		<Route path="/ItBlockView" element={ <ItBlockView /> } />
        <Route path="/DividentBlockView" element={ <DividentBlockView /> } />
	</Routes>
	</BrowserRouter>
	<Snackbar
  			anchorOrigin={{ vertical, horizontal }}
			open={snackbarOpen}
			// onClose={handleClose}
			message={`Registration succesful`}
			key={vertical + horizontal}
/>
	</>
);
}

export default App;
