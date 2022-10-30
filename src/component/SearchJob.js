import React from 'react'
import jobs from '../data/data.json'
import Hero from './Hero';
import Search from './Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';



export default function SearchJob() {
  return (

    <>
      <Hero />
      <Search />
      <div className='container'>


        <div className='row'>
          {
            jobs.map(el => {
              return <div class="col-6 p-2" style={{ "margin-top": "1rem" }}>
                <div class="border d-flex p-3 shadow p-3 mb-5 bg-white rounded"  >
                  <div className="img"  >
                    <img class="card-img-left" style={{ width: "13rem", height: "7rem" }} src={el.img} alt="Card image cap" />
                  </div>
                  <div class="card-body">

                    <h3>{el.position}</h3>
                  <strong>{el.company}&ensp;</strong><span><AccessTimeIcon />{el.postedAt}&ensp;<BusinessIcon />{el.location}</span>
                   <br></br> 
                   <br></br> 
                    
                    {
        el.languages?.length>0 ?
        el.languages?.map(e=>{
          return <span> • {e.skill}</span>
        })
        :
        <p>No reviews yet</p>
      }

             <br></br>   
             <br></br>   
                      
             <button className='primary-success'>Apply Now</button>        

                 

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
