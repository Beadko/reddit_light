import React from 'react';
import { useEffect, useState } from 'react';

const Post = ({post}) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
    </article>
    )
}

/*class Post extends React.Component {
    constructor(props){
    super(props);
  }
  render () {
    return (
      <div class = "Post">
        <h5 class="post-title">${this.props.post.title}</h5>
     </div>
    );
  }
}*/

export default Post; 
