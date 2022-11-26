import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/logo.PNG'
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import PersonIcon from '@mui/icons-material/Person';
import './Navbar.css'
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import{Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyUserStore } from '../redux/reducer/companyuser';
import { setjobseekerUserStore } from '../redux/reducer/jobseekeruser';




export default function Navbars() {
  let navigate = useNavigate();
   
 
  let dispatch = useDispatch();
  function handleLogout(){
    dispatch(setCompanyUserStore(null))
    dispatch(setjobseekerUserStore(null))
    navigate('/')
  }
     
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
    

  };
 
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
    

  };
  const {Companyuser } = useSelector((state) => state.Companyuser)
  const {jobseekeruser } = useSelector((state) => state.jobseekeruser)
  

  return (
   <div className='fixed-top justify-content-space-between ' >
   <Navbar bg="dark" variant="dark">
        <Container>
    <div className="left">

          <Navbar.Brand href="#home"><img src={logo} alt="" style={{width:"5rem" }}/></Navbar.Brand>
          </div>
          <div className="middle d-flex">
            {!Companyuser ? 
            <Link to="/" className='text-decoration-none text-white'>Search Jobs&ensp;&ensp;&ensp;</Link> :
            <>
            <Link to="/create" className='text-decoration-none text-white'>Create Jobs&ensp;&ensp;&ensp;</Link>
            <Link to="/piechart" className='text-decoration-none text-white'>Piechart&ensp;&ensp;&ensp;</Link>
            <Link to="/barchart" className='text-decoration-none text-white'>Barchart&ensp;&ensp;&ensp;</Link>
            </> 
}
           
            <Link to="/Contact" className='text-decoration-none text-white'>Contact Us&ensp;&ensp;&ensp;</Link>
            <Link to="/FAQ" className='text-decoration-none text-white'>FAQ</Link>
            
          </div>
          
          <div className="right" >
       {(!Companyuser) && (!jobseekeruser) ?   <>
        <a className='text-white'
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        ><CorporateFareIcon fontSize='small'/> Company</a>
      <a className='text-white'
        id="demo-positioned-button1"
        aria-controls={open1 ? 'demo-positioned-menu1' : undefined}
        aria-haspopup="true"
        aria-expanded={open1 ? 'true' : undefined}
        onClick={handleClick1}><PersonIcon fontSize='small'/> Job Seeker</a>
     </> :<button onClick={handleLogout}>Logout</button>}    </div>
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
        <MenuItem onClick={handleClose}><Link to="/login">Login</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/signup">Register</Link></MenuItem>
        
      </Menu>
      <Menu
        id="demo-positioned-menu1"
        aria-labelledby="demo-positioned-button1"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose1}><Link to="/loging">Login</Link></MenuItem>
        <MenuItem onClick={handleClose1}><Link to="/signupg">Register</Link></MenuItem>
        
      </Menu>
     
      </Navbar> 
     
       

      </div>
  )
}
