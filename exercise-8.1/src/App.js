import BlogPosts from './components/BlogPosts';
import NewPost from './components/NewPost';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const responsePosts = await response.json();
      setPosts(responsePosts)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <NewPost />
      <BlogPosts posts={posts} />
    </>
  );
}

export default App;
