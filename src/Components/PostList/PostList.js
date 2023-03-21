import React from 'react';
import Post from '../Post/Post.js';
import Reddit from '../../util/Reddit';
import { useSelector } from 'react-redux';

const PostList = () => {
	const posts = useSelector(state => state.posts)

	const renderedPosts = posts.map( post => <Post key ={post.id} post={post}/> );

	return (
		<div className="postList"> {renderedPosts} </div>
	)
}
export default PostList;