import React from 'react'
import {DataContext} from './DataContext'
import { useContext } from 'react'
const Two = () =>
     {
        const {inc} = useContext(DataContext)
  return (
    <>
        <button onClick = {inc}>+</button>

    </>
  )
}

export default Two