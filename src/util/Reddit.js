import React from 'react';
import axios from 'axios';

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
});

export const getPosts = async () => {
	const response = await RedditAPI.get(`search.json?q=${term}`);
	return response.data;
};