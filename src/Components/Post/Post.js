import React, { useState, useEffect} from 'react';
import no_image from './No-image.png';
import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNowStrict, fromUnixTime } from 'date-fns';
import { FaRegCommentAlt } from 'react-icons/fa';
import CommentList from '../Comment/CommentList.js';


const Post = ({post}) => {
  const dispatch = useDispatch();
  const comments = useSelector(state => state.posts.comments);
  const commentStatus = useSelector(state => state.posts.status);
  const commentError = useSelector(state => state.posts.error);
  //setting status for the comment dropdown
  const [isOpen, setIsOpen] = useState(false);

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
      <div className= 'post-info'>
        <p className='post-subreddit'><img className= 'subreddit-icon' 
              src={post.subreddit.icon_img || `https://www.redditinc.com/assets/images/site/reddit-logo.png`} 
              alt='subreddit' /> 
              {post.subreddit}
        </p>
        <p className='post-author'>Posted by {post.author}</p>
        <p className='post-date'>{formatDate([post.created_utc])}</p>
      </div>
      <h3>{post.title}</h3>
      {postHasImage(post.url) ? (
                    <img src={post.url} alt="post-image" className='post-image'/>
                ) : <img className='no-image' src={no_image} alt='no-image'/>
    }
      <p className='post-text'>{post.text}</p>
      <p className='post-comments'>
        <FaRegCommentAlt className='comment-icon' />
          {post.num_comments}</p>
      <div className='comments-section'>
        <button className ='comments-button' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide Comments' : 'Show Comments'}
        </button>
        <div className={`comment-dropdown ${isOpen ? '' : 'hidden'}`}>
          <CommentList post={post}/>
        </div>
      </div>
    </article>
    )
}

export default Post; 
