import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorsMessage } from '../ErrorsMessage'


import axios from 'axios'
// const fs = require('fs')

export const SignUp = () => {

  const [state, setState] = useState(
    {
        name: "",
        email: "",
        password: "",
        
    }
)
const navigate =useNavigate()
const [errors,setErrors]=useState({
  name:"required",
  email:"not valid",
  password:"Minimum eight characters, at least one letter and one number"
})
function handleSubmit(e) {
  e.preventDefault();
 navigate("/login")
  // let data = state;

  //     fetch('http://localhost:8000/employer',{
  //       method:'POST',
  //       headers:{"Content-Type":"application/json"},
  //       body:JSON.stringify(data)
  //     })
  //     navigate("/login")
  

}
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]:e.target.value
  })

  }
  return (
    <div className='container' style={{"margin":"10%","padding-left":"20%"}}>
        <h1>Company SignUp Form </h1><br></br>
    <form className='pl-10' onSubmit={handleSubmit}>
    <div class="row mb-3">
     <label for="inputEmail3" class="col-sm-2 col-form-label">Name</label>
     <div class="col-sm-10">
       <input type="text" style={{"width":"50%"}} class="form-control"   onChange={handleChange} name='name' value={state.name} required/> <br />
      
      <span><ErrorsMessage msg={errors.name}/>
       </span>
        
            </div>
   </div>
   <div class="row mb-3">
     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
     <div class="col-sm-10">
       <input type="email" style={{"width":"50%"}} class="form-control"   onChange={handleChange} name='email' value={state.email}/><br />
      
       <span><ErrorsMessage msg={errors.email}/>
       </span>
        
     </div>
   </div>
   <div class="row mb-3">
     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
     <div class="col-sm-10">
       <input type="password" style={{"width":"50%"}} class="form-control"   onChange={handleChange} name='password' value={state.password}/><br />
      
       <span><ErrorsMessage msg={errors.password}/>
       </span>
        
     </div>
   </div>
  <div>
   <button type="submit" class="btn btn-primary p-10">Log in</button>
   </div>
 </form>
 </div>
  )
}
