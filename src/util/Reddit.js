import React from 'react';
import axios from 'axios';

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
});

/*export const getPosts = async (subreddit) => {
	const response = await RedditAPI.get(`r/${subreddit}.json?limit=20`);

	const data = response.data.data.children;

	const posts = data.map((post) => {
		return { 
			id: post.data.id,
	        title: post.data.title,
	        subreddit: post.data.subreddit,
		}
	});

	return posts;
};*/
