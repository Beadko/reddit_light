import React, { useEffect } from 'react';
import Post from '../Post/Post.js';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, getPosts } from './PostsSlice.js'

const PostList = () => {
	const dispatch = useDispatch();
	const posts = useSelector(selectAllPosts);
	const postStatus = useSelector(state => state.posts.status);

	useEffect(()=>{
		dispatch(getPosts())
	},[dispatch]);

	const renderedPosts = posts.map( post => 
			<Post key ={post.id} post={post}/> 
	);

	return (
		<div className="postList"> {renderedPosts} </div>
	)
}
export default PostList;