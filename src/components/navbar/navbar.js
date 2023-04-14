import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar() {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display='flex' justifyContent='space-between' textAlign="center" alignContent='center'>
            <Link style={{textDecoration: 'none'}}  to="/"><Typography  color='white'  marginLeft='100px'>HOME</Typography></Link> 
            <Link style={{textDecoration: 'none'}} to="/brs"><Typography color='white' marginLeft='100px'>BRS</Typography></Link> 
            <Link style={{textDecoration: 'none'}} to="/bjp"><Typography  color='white'marginLeft='100px' >BJP</Typography></Link>
            <Link style={{textDecoration: 'none'}} to="/congress"><Typography  color='white'marginLeft='100px' >CONGRESS</Typography></Link>  
            <Link style={{textDecoration: 'none'}} to="/vote"><Typography  color='white'marginLeft='100px' >VOTE</Typography></Link>
            <Link style={{textDecoration: 'none'}} to="/output"><Typography  color='white'marginLeft='100px' >OUTPUT</Typography></Link>

          </Box>

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;