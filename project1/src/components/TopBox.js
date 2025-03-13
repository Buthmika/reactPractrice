import React from 'react'
import "./TopBox.css"
export default function TopBox(props) {
  const topic="Food is buthmika"
  return (
    <div>
      <div className='topicBox'>
            <span className='text'>Food is {props.food} the price
              is {props.price}</span>
            
      </div>
    </div>
  )
}
