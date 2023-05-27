'use client';
import React from 'react'

const Home: React.FC = () => {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    fetch('http://localhost:3000/post/1', { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      setPost(data)
    })
  },[])

  return (
    <div>
      {post && (
        <>
          {post.title} {post.content}
        </>
      )}
    </div>
  )
}

export default Home
