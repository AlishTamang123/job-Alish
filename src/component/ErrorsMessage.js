import React from 'react'
import './ErrorsMessage.css'


export const ErrorsMessage = (props) => {
  return (
    <div>
        <>
        <p style={{"color":'red',"fontsize":"1em"}}>
        {props.msg}
        </p>
        </>
    </div>
  )
}
