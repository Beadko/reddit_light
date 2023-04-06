import React from 'react';
import './Comment.css';
import { formatDistanceToNowStrict, fromUnixTime } from 'date-fns';
import { FaReddit } from 'react-icons/fa';

const Comment=({comment})=>{

  	const formatDate = (timestamp) => {
  	const date = fromUnixTime(timestamp);
  	const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  	return timeAgo;
  	}
   
  
	return(
		<div className="comment">
			<div className="comment-data">
		        <p><FaReddit className='user-icon' /> {comment.author}</p>
		        <p> {formatDate([comment.created_utc])}</p>
		       </div>
		    <div className='comment-body'>
		        <p>{comment.body}</p>
		    </div>
	    </div>
	)
}

export default Comment;