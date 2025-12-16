import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'

function App() {
let frds=["Root","Smith","Kohli","Kane"]
  return (
    <>
    <Header title={"Friends List"}
      city={"Chennai"}
    />
      {
        (frds.length) ?
        <Content frds={frds}/>
        :
        (
        <h1>No Friends</h1>
        )
      }
    </>
  )
}

export default App
