import React from 'react'
import ReactFragment from './ReactFragment'

function OrderdList({itemList}) {
  return (
    <div>
      <ReactFragment items={itemList}></ReactFragment>
    </div>
  )
}

export default OrderdList
