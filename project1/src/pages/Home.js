import React from 'react'
import TopBox from '../components/TopBox'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <TopBox food="Kottu"/ >
      <TopBox food="Rice"/>
      <TopBox food="Noodles"/>
      
    </div>
  )
}
