import React from 'react';
import axios from 'axios';

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
});

export const getPosts = async (term) => {
	const response = await RedditAPI.get(`search.json?q=${term}&sort=hot&limit=10`);

	const data = response.data.data.children;

	const posts = data.map((post) => {
		return { 
        	id: post.data.id,
        	title: post.data.title,
        	selftext:post.data.selftext,
        	subreddit: post.data.subreddit,
        	thumbnail: post.data.thumbnail,
		}
	});

	return posts;
};