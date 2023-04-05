import classes from './BlogPosts.module.css';
import { useState, useEffect } from 'react';


function BlogPosts() {
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
    <ul classes={classes.list}>
      { posts.map((post) => <li key={post.id}>{post.title}</li>) }
    </ul>
  );
}

export default BlogPosts;
