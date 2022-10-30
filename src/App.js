
import './App.css';

import Navbars from './component/Navbar';
// import Card from './component/Card';
import Footer from './component/Footer';
import Jobseeker from './component/login/Jobseeker';
import Jobgiver from './component/SignUp/Jobgiver';
import { ContactUs } from './component/ContactUs';
import {Routes , Route } from "react-router-dom"
import  SearchJob  from './component/SearchJob';

function App() {
  return (
    <div>
      <Navbars/>
     
      {/* <Card/> */}
      
      
      
      <Routes>
        
        <Route path="/" element={<SearchJob/>} />
        <Route path="Contact" element={<ContactUs/>} />
        <Route path="Jobgiver" element={<Jobgiver/>} />
        <Route path="Jobseeker" element={<Jobseeker/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
