import classes from './BlogPosts.module.css';
import { useState, useEffect } from 'react';


function BlogPosts({posts}) {
  return (
    <ul classes={classes.list}>
      { posts.map((post) => <li key={post.id}>{post.title}</li>) }
    </ul>
  );
}

export default BlogPosts;
