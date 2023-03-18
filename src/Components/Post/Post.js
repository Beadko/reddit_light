import React from 'react';
import Reddit from '../../util/Reddit.js';

const Post = ({post}) => {

  return (
    <article>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt="post image"/>
      <p>{post.subreddit}</p>
    </article>
    )
}

export default Post; 
