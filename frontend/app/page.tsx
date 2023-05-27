'use client';
import React from 'react'

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/post/1', { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
  },[])

  return (
    <div>
      {posts.map(post => {
        <div>
          {post.title} {post.content}
        </div>
      })}
    </div>
  )
}

export default Home
