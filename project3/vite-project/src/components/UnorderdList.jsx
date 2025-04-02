import React from 'react'
import ReactFragment from './ReactFragment'

function UnorderdList({itemList}) {
  return (
    <div>
      <ReactFragment items={itemList}></ReactFragment>
    </div>
  )
}

export default UnorderdList
