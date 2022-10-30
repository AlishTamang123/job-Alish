import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/logo.PNG'
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import{Link, Navigate} from "react-router-dom";


export default function Navbars() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    

  };
  return (
   <div className='fixed-top justify-content-space-between ' >
   <Navbar bg="dark" variant="dark">
        <Container>
    <div className="left">

          <Navbar.Brand href="#home"><img src={logo} alt="" style={{width:"5rem" }}/></Navbar.Brand>
          </div>
          <div className="middle d-flex">
            <Link to="/" className='text-decoration-none text-white'>Search Jobs&ensp;&ensp;&ensp;</Link>
            <Link to="/Contact" className='text-decoration-none text-white'>Contact Us</Link>
           
            
          </div>
          
          <div className="right" >
        <a className='text-white'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        ><LoginIcon fontSize='small'/>Login</a>
      <a className='text-white'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}><PersonIcon fontSize='small'/>Register</a>
          </div>
        </Container>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to="/Jobseeker">Job Seeker</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/Jobgiver">Job Giver</Link></MenuItem>
        
      </Menu>
      </Navbar> 
     
       

      </div>
  )
}
