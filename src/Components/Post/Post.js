import React from 'react';
import { useEffect, useState } from 'react';
import noImageImage from '../../../public/No-image.png'

function FetchPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/posts');
      const fetchedPosts = await response.json();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);
  return (
    <Container>
      {posts.map(data => <div class="post">
     <div class="post-body">
      <h5 class="post-title">${post.title}</h5>
      <p class="post-text">${post.selftext}</p>
    </div> 
  </div>}
    </Container>
  );
}