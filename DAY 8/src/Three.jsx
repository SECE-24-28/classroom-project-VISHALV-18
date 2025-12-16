import React from 'react'
import {DataContext} from './DataContext'
import { useContext } from 'react'
const Three = () => 
    {
            const {dec} = useContext(DataContext)
  return (
    <div>
        <button onClick={dec}>-</button>
    </div>
  )
}
export default Three