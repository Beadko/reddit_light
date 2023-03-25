import React, { useState, useEffect } from 'react';
import no_image from './No-image.png';
import './Post.css';
import { getComments } from '../PostList/PostsSlice.js';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNowStrict, fromUnixTime } from 'date-fns';



const Post = ({post}) => {
  const dispatch = useDispatch();
  const [isTextLong, setIsTextLong] = useState(post.text && post.text.length > 250);
  const comments = useSelector(state => state.posts.comments)
  const commentStatus = useSelector(state => state.posts.status);
  const commentError = useSelector(state => state.posts.error);



  const postHasImage = url => url.match(/\.(jpeg|jpg|png|gif)$/) !== null;

  const formatDate = (timestamp) => {
  const date = fromUnixTime(timestamp);
  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  return timeAgo;
  };

  useEffect(() => {
      dispatch(getComments());
  },[commentStatus, dispatch]);

  let commentsContent;
  if (commentStatus === 'loading') {
      commentsContent = <div className="spinner-border">Loading...</div>
    } else if (commentStatus === 'succeeded') {
      commentsContent = comments.map( comment => 
      <div key ={comment.id} className="commentsContent">
        <p>Posted by: {comment.author}</p>
        <p>Posted on: {formatDate([comment.created_utc])}</p>
        <p>{comment.body}</p>
      </div>

    );
    } else if (commentStatus === 'failed') {
      commentsContent = <div>{commentError}</div>
    }

  return (
    <div className="commentsContent"> {commentsContent} </div>
  )

  return (
    <article>
      <h3>{post.title}</h3>
      {postHasImage(post.img) ? (
                    <img src={post.img} alt="post-image"/>
                ) : null}
      {post.text ? (
        isTextLong ? (
          <p className='post-text'>
            {post.text.substring(0, 250)}
            <button
              className="show-more"
              type="button"
              onClick={() => setIsTextLong(!isTextLong)}
            >
              ...continue reading
            </button>
          </p>
        ) : (
          <p className='post-text'>{post.text}</p>
        )
      ) : null}

      <div className= 'post_info'>
        <p>{post.subreddit}</p>
        <p>Posted by: {post.author}</p>
        <p>Posted on: {formatDate([post.time_created])}</p>
        <p>{post.num_comments}</p>
      </div>
    </article>
    )
}

export default Post; 
