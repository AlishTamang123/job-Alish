import React from 'react'
import jobs from '../data/data.json'
import Hero from './Hero';
// import Search from './Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import Fuse from 'fuse.js';
// import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import  { useState } from 'react';



export default function SearchJob() {
  const fuse = new Fuse(jobs, {
    keys: [
      'name',
      'company',
      'category'
    ],
    includeScore: true
  });

  const [query, updateQuery] = useState('');
  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }
  const results = fuse.search(query);
  // const jobsResults = results.map(job => job.item);
  const jobsResults  = query ? results.map(job => job.item) : jobs;
  return (

    <>
      <Hero />
      
      <div className="container" style={{ "margin-left": "35rem", "margin-top":"1rem"}} >
      <form className="row g-3 " action="action_page.php">
      
      <div class="col-auto">
  <input class="form-control form-control-md" type="text" value={query} onChange={onSearch} placeholder="Search.." name="search"/></div>
  <div class="col-auto"> &ensp;<Button variant="contained" label={'margin="dense"'}>   Search</Button></div>
</form>
</div>
      <div className='container '>
     
        <div className='row'>
          
          {
            jobsResults.map(el => {
              return <div class="col-6 p-2" style={{ "margin-top": "1rem" }}>
                <div class="border d-flex p-3 shadow p-3 mb-5 bg-white rounded"  >
                  <div className="img"  >
                    <img class="card-img-left" style={{ width: "13rem", height: "7rem" }} src={el.img} alt="" />
                  </div>
                  <div class="card-body">

                    <h3>{el.position}</h3>
                  <strong>{el.company}&ensp;</strong>
                  <br></br>
                  <br></br>
                  <p><AccessTimeIcon />{el.postedAt}&ensp;<BusinessIcon />{el.location}</p>
                   <br></br> 
                   
                    {
        el.languages?.length>0 ?
        el.languages?.map(e=>{
          return <> • {e.skill}</>
        })
        :
        <p>No reviews yet</p>
      }

             <br></br>   
             <br></br>   
                      
    <Link to={`/products/${el.id}` }>       <button className='primary-success'>Show Details</button>        </Link>  

                 

                  </div>
                 
               
                
                </div>
               
              </div>

            })
          }
        </div>


      </div>
    </>



  )
}
