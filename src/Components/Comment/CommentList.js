import React, { useEffect, useState } from 'react';
import Comment from './Comment.js'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectComments, getComments } from './CommentsSlice.js';
import { FaSpinner } from 'react-icons/fa';


const CommentList = ({post}) => {
	const dispatch = useDispatch();
	const comments = useSelector(selectComments);
	const commentStatus = useSelector(state => state.comments.status);
	const error = useSelector(state => state.comments.error);
	//setting the limit of the comments to show
	const [showCount, setShowCount] = useState(5);
	const visibleComments = comments.slice(0, showCount);

  	useEffect(() => {
	  	let url = post.permalink.replace(/\/$/, '.json');
     	dispatch(getComments(url));
  	},[post.permalink, dispatch]);

	 let content;
	  if (commentStatus === 'loading') {
	      content = <div><FaSpinner />Loading...</div>
	    } else if (commentStatus === 'succeeded') {
	      content = visibleComments.map((comment, index) => 
	          <Comment className='comment' key={comment.id} comment={comment} />
	      );
	      showCount < comments.length && (
            <button onClick={() => setShowCount(showCount === 5 ? comments.length : 5)}>
               {showCount === 5 ? 'Show More' : 'Show Less'}
            </button>
         )

	    } else if (commentStatus === 'failed') {
	      content = <div>{error}</div>
	    }

	  return (
	    <div className="commentsContent"> {content} </div>
	  )
}

export default CommentList;