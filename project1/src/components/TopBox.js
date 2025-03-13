import React from 'react'
import "./TopBox.css"
export default function TopBox() {
  const topic="My name is buthmika"
  return (
    <div>
      <div className='topicBox'>
            <span className='text'>{topic}</span>
      </div>
    </div>
  )
}
