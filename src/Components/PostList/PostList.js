import React, { useEffect } from 'react';
import Post from '../Post/Post.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, getPosts } from './PostsSlice.js'

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectAllPosts);
	const postStatus = useSelector(state => state.posts.status);
	const error = useSelector(state => state.posts.error);
	let postListEmpty = true;

	useEffect(() => {
		if (postListEmpty) {
			dispatch(getPosts('worldnews'));
			postListEmpty = false
		}
	},[])

  	useEffect(() => {
    	if (postStatus === 'idle') {
      	dispatch(getPosts())
    	}
  	}, [postStatus, dispatch])

  	let content;

  	if (postStatus === 'loading') {
    	content = <div className="spinner-border">Loading...</div>
  	} else if (postStatus === 'succeeded') {
    	content = posts.map( post => 
			<Post key ={post.id} post={post}/> 
		);
  	} else if (postStatus === 'failed') {
    	content = <div>{error}</div>
  	}

	return (
		<div className="postList"> {content} </div>
	)
}
export default PostList;