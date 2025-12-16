import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Gallary from './Gallary'
import PostPage from './PostPage'
import Post from './Post'
import NewPost from './NewPost'   

function App() {
  return (
      <>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/gallary">Gallary</Link> </li>
          <li><Link to="/postpage">PostPage</Link> </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallary" element={<Gallary />}/>
    <Route path="/postpage" element={<PostPage/>}>
          <Route path=":id" element={<Post/>}/>
          <Route path="newpost" element={<NewPost/>}/> 
    </Route>
           </Routes>
      </>
  )
}

export default App
