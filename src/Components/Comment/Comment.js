import React from 'react';
import './Comment.css';
import { formatDistanceToNowStrict, fromUnixTime } from 'date-fns';

const Comment=({comment})=>{

  	const formatDate = (timestamp) => {
  	const date = fromUnixTime(timestamp);
  	const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  	return timeAgo;
  	}
   
  
	return(

	      <div className="comment">
	      	<img src={`https://www.redditinc.com/assets/images/site/reddit-logo.png`} />
	        <p>Posted by: {comment.author}</p>
	        <p>Posted on: {formatDate([comment.created_utc])}</p>
	        <p>{comment.body}</p>
	      </div>
	)
}

export default Comment;