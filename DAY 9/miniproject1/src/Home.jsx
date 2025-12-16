import React from 'react'

const Home = ({ list }) => {
  return (
    <div>
      <h2>Feedback Posts</h2>

      {list && list.length > 0 ? (
        list.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  )
}

export default Home
