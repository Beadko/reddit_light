import React from 'react';
import { useEffect, useState } from 'react';
//* import noImageImage from '../../../public/No-image.png'

class Post extends React.Component {

  /*FetchPosts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      async function fetchPosts() {
        const response = await fetch('/posts');
        const fetchedPosts = await response.json();
        setPosts(fetchedPosts);
      }
      fetchPosts();
    }, []); 
  } */
  render () {
    return (
      <div class = "Post">
        <h5 class="post-title">${post.title}</h5>
     </div>
    );
  }
}

export default Post; 