import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ErrorsMessage } from '../ErrorsMessage'
import { setjobseekerUserStore } from '../../redux/reducer/jobseekeruser';


export const Loging = () => {
 let navigate = useNavigate()
 let dispatch =useDispatch()
  const [state,setState]=useState({
    email:"",
    password:"",


  })
  const [errors,setErrors]=useState({
    email:"not valid",
    password:"password doesn't match"
  })
  function handleSubmit(e){
    e.preventDefault();
    dispatch(setjobseekerUserStore({
     state:state,
      loggedIn:true
    
    }))
    navigate('/')
     
    
    }
    
  function handleChange(e){
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  return (
    <div className='container' style={{"margin":"10%","padding-left":"20%"}}>
        <h1>Job Seeker Login Form </h1><br></br>
    <form className='pl-10' onSubmit={handleSubmit}>
   <div class="row mb-3">
     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
     <div class="col-sm-10">
       <input type="email" style={{"width":"50%"}} class="form-control" id=""  onChange={handleChange} name="email" value={state.email}/><br />
      
       <span><ErrorsMessage msg={errors.email}/>
       </span>
        
     </div>
   </div>
   <div class="row mb-3">
     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
     <div class="col-sm-10">
       <input type="password" style={{"width":"50%"}} class="form-control" id="" onChange={handleChange} name="password" value={state.password} /><br />
      
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
