import React from 'react';
import axios from 'axios';

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
});

export const getPosts = async (subreddit) => {
	const response = await RedditAPI.get(`r/${subreddit}.json?limit=20`);

	const data = response.data.data.children;

	const posts = data.map((post) => post.data);

	return posts;
};
