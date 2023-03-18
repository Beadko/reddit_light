import React from 'react';
import Post from '../Post/Post.js';
import Reddit from '../../util/Reddit';

const PostList = ({ posts }) => {

	const results = posts.map( post => <Post key ={post.id} post={post}/> );

	return (
		<div className="postList"> {results} </div>
	)
}
export default PostList;