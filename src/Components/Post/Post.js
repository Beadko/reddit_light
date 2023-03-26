import React, { useState, useEffect} from 'react';
import no_image from './No-image.png';
import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNowStrict, fromUnixTime } from 'date-fns';
import CommentList from '../Comment/CommentList.js';


const Post = ({post}) => {
  const dispatch = useDispatch();
  const [isTextLong, setIsTextLong] = useState(post.text && post.text.length > 250);
  const comments = useSelector(state => state.posts.comments);
  const commentStatus = useSelector(state => state.posts.status);
  const commentError = useSelector(state => state.posts.error);

//making sure the url of the post has any format of the image
  const postHasImage = url => url.match(/\.(jpeg|jpg|png|gif)$/) !== null;

// the timestamp is recorded in seconds, this will convert it into a time uploaded from now. Did not use "moment" as it has now depreciated
  const formatDate = (timestamp) => {
  const date = fromUnixTime(timestamp);
  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  return timeAgo;
  };

  return (
    <article>
      <h3>{post.title}</h3>
      {postHasImage(post.url) ? (
                    <img src={post.url} alt="post-image"/>
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
        <p>Posted on: {formatDate([post.created_utc])}</p>
        <p>{post.num_comments}</p>
      </div>
      <CommentList post={post}/>
    </article>
    )
}

export default Post; 
