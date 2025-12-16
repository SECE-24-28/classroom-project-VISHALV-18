import { use, useEffect, useState } from 'react'
import Home from  './Home.jsx'
import './App.css'
import Search from './Search.jsx'
import AddPost from './AddPost.jsx'
import format from 'date-fns/format'
function App() {
const [list,setlist]=useState([])
const [search,setSearch]=useState("")
const [posts,setPosts]=useState([])
const[body,setBody]=useState('')
const[title,setTitle]=useState('')
useEffect(()=>{
const fetchdata=async()=>{
try{
const res=await fetch("http://localhost:3000/feedback")
const resdata=await res.json()
setlist(resdata)
setPosts(resdata)
}catch(err){
console.log('Fetch error:',err)
}
}
fetchdata()
},[])
const handleSubmit=(e)=>
{
  e.preventDefault()
  
  const id=(list.length)?(Number(list[list.length-1].id)+1):(1)
  const datetime=format(new Date(),"MMMM dd,yyyy pp")
  const newObj={id,title,datetime,body}
  const newList=[...list,newObj]
  setlist(newList)


  setTitle('')
  setBody('')
}

const filteredPosts = list.filter(post => 
  post.title.toLowerCase().includes(search.toLowerCase())
)

  return (
    <>
    <Search search={search} setSearch={setSearch}/>
   <Home list={filteredPosts}/>
<hr/>
<AddPost title={title} setTitle={setTitle}
  body={body} setBody={setBody}
  handleSubmit={handleSubmit}
/>

    </>
  )
}

export default App