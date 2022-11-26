import React, { useState } from 'react'
import { ErrorsMessage } from '../ErrorsMessage';
import "../ErrorsMessage.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCompanyUserStore } from '../../redux/reducer/companyuser';



export const Login = () => {
  
  const [state,setState]=useState({
    email:"",
    password:""
  })
  const [errors,setErrors]=useState({
    email:"not valid",
    password:"password doesn't match"
  })
 let navigate=useNavigate()
 let dispatch = useDispatch()
  function handleSubmit(e){
e.preventDefault();
dispatch(setCompanyUserStore({
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
      <h1>Company Login Form </h1><br></br>
    <form onSubmit={handleSubmit}>
   <div class="row mb-3">
     <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
     <div class="col-sm-10">
       <input type="email" style={{"width":"50%"}} class="form-control" id="inputEmail3" onChange={handleChange} name="email" value={state.email} required /> <br />
       {/* {
        !state.email &&
         <ErrorsMessage msg={errors.email}/>
       
       } */}
       <span>
       <ErrorsMessage msg={errors.email}/>
       </span>
{/* } */}
     </div>
   </div>
   
   <div class="row mb-3">
     <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
     <div class="col-sm-10">
     {/* pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" */}
       <input type="password" style={{"width":"50%"}} class="form-control"  id="inputPassword3" onChange={handleChange} name="password" value={state.password}/> <br />
{/* {
  !state.password && */}
  <span>
       <ErrorsMessage msg={errors.password}/>
       </span>
{/* } */}
     </div>
     
   </div>
  <div>
   <button type="submit" class="btn btn-primary p-10">Log in</button>
   </div>
 </form>
 </div>
  )
}
