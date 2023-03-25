import React, {useState} from 'react';
import no_image from './No-image.png';
import './Post.css';
import { useSelector } from '../PostList/PostsSlice.js';
import { formatDistanceToNowStrict, fromUnixTime } from "date-fns";



const Post = ({post}) => {

  const postHasImage = url => url.match(/\.(jpeg|jpg|png|gif)$/) !== null;
  const formatDate = (timestamp) => {
  const date = fromUnixTime(timestamp);
  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  return timeAgo;
}

  return (
    <article>
      <h3>{post.title}</h3>
      {postHasImage(post.img) ? (
                    <img src={post.img} alt="post image"/>
                ) : null}
      <p className="ellipsis">{ post.text }</p>
      <div className= 'post_info'>
        <p>Posted by: {post.author}</p>
        <p>Posted on: {formatDate([post.time_created])}</p>
        <p>{post.num_comments}</p>
      </div>
    </article>
    )
}

export default Post; 
