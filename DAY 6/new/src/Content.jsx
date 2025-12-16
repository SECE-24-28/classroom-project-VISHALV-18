import React from 'react'

const Content = ({ frds }) => {
  return (
    <div>
      <ul>
        {
          frds.map((val, indx) => 
            <li key={indx}>{val}</li>
          )
        }
      </ul>
    </div>
  )
}

export default Content
