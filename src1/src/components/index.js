import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar(props) {

	const {handleLoginBtn,handleSignupBtn,handleAgentloginBtn} = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
		  <Avatar alt="logo" src="https://api.logo.com/api/v2/images?format=webp&logo=logo_ee064ed8-ed27-49b4-ae6c-e00e028abca8&width=2000&height=1500&quality=100&margins=500&fit=contain&u=1665659629" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StockFolio
          </Typography>
   
		  <div style={{
			display: "flex",
		}}>
			<Button color="inherit">

			{/* <NavLink color="inherit" to="/about"> */}
				About
			{/* </NavLink> */}
			</Button>


			<Button onClick={handleSignupBtn} color="inherit">
			{/* <NavLink to="/sign-up" activeStyle> */}
				Sign Up
			{/* </NavLink> */}
			</Button>
		

			<Button onClick={handleLoginBtn} color="inherit">
			{/* <NavLink to="/login" activeStyle> */}
				Login
			{/* </NavLink> */}
			</Button>
		

			<Button onClick={handleAgentloginBtn}color="inherit">
			{/* <NavLink to="/Agent" activeStyle> */}
				Agent 
			{/* </NavLink> */}

			</Button>
		
		</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
