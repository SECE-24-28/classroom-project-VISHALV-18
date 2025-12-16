import React from 'react'

export const Eg = () => {
    let frds=["Smith","Kohli","Root","Kane"]
  return (
    <>
    <ul>
        {
            frds.map((val,indx)=>
            {
              return <h1 key={indx}>{val}</h1>
            }
            )
        
        }
        <h1>hello</h1>
        </ul>
    </>
  )
}
