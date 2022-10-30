import React from 'react'
import logo from '../image/logo.PNG'
import BusinessIcon from '@mui/icons-material/Business';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer() {
  return (
    <>
   
        <div className="static-bottom d-flex justify-content-around bg-dark text-white">
        <div className="text w-25"><br/><img src={logo}alt="" style={{width:"5rem" }}/><p className='text-white' style={{"font-family": 'Island Moments','fontSize':'25px'}}>Best place to find your dream job in Nepal. Dhrishya is a leading human resource consulting & jobs provider company that provides career-related opportunities from the top companies of Nepal for job seekers as per their expertise. Search and find the best suitable jobs vacancy in Kathmandu Nepal from our site for you.</p></div>
        
        <div className="text w-25"><br/><h2 className=' pb-3'>Follow & Subscribe Us</h2>
&ensp; &ensp;&ensp;&ensp;&ensp;<InstagramIcon/>&ensp;<FacebookIcon/>&ensp;<GitHubIcon/>&ensp;<LinkedInIcon/>&ensp;<YouTubeIcon/><br/><br/>
<h2 className='pb-3'>Subscribe Now</h2>
<form class="row g-3">
 
  <div class="col-auto">
    <label for="inputPassword2" class="visually-hidden">Email</label>
    <input type="password" class="form-control" id="inputPassword2" placeholder="Your Email"/>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Send</button>
  </div>
</form>
<p className='text-white'>Subscribe Dhrishya Job Board and get latest updates daily.</p>
        </div>
        <div className="text"><br/>
            <h2 className='text-center pb-4'>Contact us</h2><ul className='list-group'>
            <li className='list-group-item'><BusinessIcon/>Kalimati,Kathmandu</li>
            <li className='list-group-item'><PhoneIphoneIcon/>Contact-number:9876767445</li>
            <li className='list-group-item'><EmailIcon/>Dhrishya@gmail.com</li>
            <li className='list-group-item'><AccessTimeIcon/>10:00am to 6:00pm</li>
            </ul></div>
       
    </div>
    </>
  )
}
