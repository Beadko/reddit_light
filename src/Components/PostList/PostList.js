import React, { useEffect } from 'react';
import './PostList.css';
import Post from '../Post/Post.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, getPosts } from './PostsSlice.js';
import { FaSpinner } from 'react-icons/fa';

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectPosts);
	const postStatus = useSelector(state => state.posts.status);
	const error = useSelector(state => state.posts.error);

	useEffect(() => {
		if (postStatus === 'idle') {
			dispatch(getPosts('funny_cats'));
		}
	},[postStatus, dispatch])

  	let content;
  	if (postStatus === 'loading') {
    	content = <div><FaSpinner /> Loading...</div>
  	} else if (postStatus === 'succeeded') {
    	content = posts.map( post => 
			<Post key ={post.id} post={post}/> 
		);
  	} else if (postStatus === 'failed') {
    	content = <div>{error}</div>
  	}

	return (
		<div className="post-list"> {content} </div>
	)
}
export default PostList;