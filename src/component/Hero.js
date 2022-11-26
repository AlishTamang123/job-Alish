import React from 'react'
import image from '../image/bg.avif'

import './Hero.css'
export default function hero() {
  return (
    <>
    
    <div className='top mt-8' style={{"margin-top":"4%"}} >
        <img src={image} alt=""/>    
        </div>
         <div className="container mt-3 bottom">
        <h1>How TO Find Your Career</h1>
        <p>It's time to start living the life you've imagined.</p>
             </div>
             <div className="middle">
           
             </div>
             
             </>
  )
}
