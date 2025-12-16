import React from 'react'
import { Outlet } from 'react-router'
import { Route,Routes,Link } from 'react-router'
const PostPage = () => {
  return (
    <>
        <ol>
            <li><Link to="1">Post1</Link></li>
            {/* <li><Link to="2">Post2</Link></li>
            <li><Link to="3">Post3</Link></li> */}
            <li><Link to="newpost">NewPost</Link></li>
        </ol>
        <Outlet/>
        </>
  )
}

export default PostPage