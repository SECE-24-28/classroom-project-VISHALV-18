import { useState,useEffect } from 'react'
import './App.css'
import api from './api/Stu_api'
function App() {
  const [list,setlist] = useState([])
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        const res = await api.get("http://localhost:3500/student")
        setlist(res.data)
        console.log(res.data)
      }
      catch(err){
        //console.error(err)
      } 
    }
    fetchData()
  },[])

  return (
    <>
    {/* <h1>Hello</h1> */}
    {
      list.map((stu)=>
        <p key={stu.id}>{stu.id}-{stu.name}-{stu.mark}</p>
      )
    }

    </>
  )
}

export default App