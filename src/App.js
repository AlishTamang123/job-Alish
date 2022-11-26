
import './App.css';

import Navbars from './component/Navbar';

import Footer from './component/Footer';
import { JobDetail } from './component/JobDetail';
// import  {Pizza}  from './component/Alert1';
import {Login} from './component/Company/Login';
import {SignUp} from './component/Company/SignUp';
import { ContactUs } from './component/ContactUs';
import {Routes , Route } from "react-router-dom"
import  SearchJob  from './component/SearchJob';
import  {Createjob}  from './component/Createjob';
import { Loging } from './component/Jobseeker/Loging';
import { SignUpg} from './component/Jobseeker/SignUpg';
import { Faq } from './component/Faq';
import Piechart from './component/Piechart';
import Barchart from './component/Barchart';

function App() {
  return (
    <div>
      <Navbars/>
      

     
      {/* <Card/> */}
      
      
      
      <Routes>
        
        <Route path="/" element={<SearchJob/>} />
        <Route path="/create" element={<Createjob/>} />
        <Route path="/piechart" element={<Piechart/>} />
        <Route path="/jobdetail" element={<JobDetail/>} />
        <Route path="/barchart" element={<Barchart/>} />
        <Route path="Contact" element={<ContactUs/>} />
        <Route path="FAQ" element={<Faq/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="loging" element={<Loging/>} />
        <Route path="signupg" element={<SignUpg/>} />
        <Route path="products" >
          <Route path=":id" element={<JobDetail/>}/>
        </Route>

      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
