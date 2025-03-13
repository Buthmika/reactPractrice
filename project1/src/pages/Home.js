import React from 'react'
import TopBox from '../components/TopBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopBox food="Kottu" price="Rs.200"/ >
      <TopBox food="Rice" price="Rs.100"/>
      <TopBox food="Noodles" price="Rs.300"/>
      
    </div>
  )
}
