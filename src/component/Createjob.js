import React, { useState } from 'react'
// import Alert from '@mui/material/Alert';
// import Stack from '@mui/material/Stack';
// import { Pizza } from './Alert1';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




export const Createjob = () => {
    const [state,setState]= useState({
        
            job: "",
            location: "",
            salary: "",
            vacancy: "",
            category:"",
            level:""
        

    })
    function handleAdd(e){
        
       
//         <div class="alert alert-primary" role="alert">
//   This is a primary alert—check it out!
// </div>
e.preventDefault();




    }
    function buttonAdded(){
        
        toast.success("Job Added Successfully",{
            position:"top-center",
            type:"success"
        })
        
    }
  function handleChange(e){
    setState({
        ...state,
        [e.target.name]:e.target.value
      })
  }
    return (
        <div className='container p-5' style={{"margin-top":"7%"}}>
            <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label required-field">Job Title</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="job" value={state.job} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Location</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="location" value={state.location} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="salary" value={state.salary} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Vacancy</label>
                    <input type="text" className="form-control" id="" onChange={handleChange} name="vacancy" value={state.vacancy} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                        {/* <input type="password" className="form-control" id="exampleInputPassword1" /> */}

                        {/* TODO: use dropdown with value seller and buyer */}
                        <select class="form-select" aria-label="Default select example" name="category" onChange={handleChange} value={state.category}>
                            <option value="">Select Category</option>
                            <option value="frontend">Front-end Developer</option>
                            <option value="backend">Back-end Developer</option>
                            <option value="fullstact">Full-stack Developer</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Level</label>
                        {/* <input type="password" className="form-control" id="exampleInputPassword1" /> */}

                        {/* TODO: use dropdown with value seller and buyer */}
                        <select class="form-select" aria-label="Default select example" name="level" onChange={handleChange} value={state.level}>
                            <option value="">Select Level</option>
                            <option value="fresher">Fresher</option>
                            <option value="junior">Junior</option>
                            <option value="mid">Mid</option>
                            <option value="senior">Senior</option>
                            
                        </select>
                    </div>
                <button type="submit" className="btn btn-primary" onClick={buttonAdded}>Add Job</button>
                <ToastContainer/>
            </form>
        </div>
    );
}
