import React, { useEffect } from 'react';
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

  	useEffect(() => {
	  	let url = post.permalink.replace(/\/$/, '.json');
     	dispatch(getComments(url));
  	},[post.permalink, dispatch]);

	 let content;
	  if (commentStatus === 'loading') {
	      content = <div><FaSpinner />Loading...</div>
	    } else if (commentStatus === 'succeeded') {
	      content = comments.map(comment => 
	          <Comment key={comment.id} comment={comment} />
	      );
	    } else if (commentStatus === 'failed') {
	      content = <div>{error}</div>
	    }

	  return (
	    <div className="commentsContent"> {content} </div>
	  )
}

export default CommentList;