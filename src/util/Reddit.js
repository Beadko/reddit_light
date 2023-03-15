import React from 'react';
import axios from 'axios';

/*const redirectUri = "http://localhost:3000/";
const Reddit = {

	search(term) {
		return fetch(`https://www.reddit.com/search.json?q=${term}`
		).then(response => { 
			return response.json();
		})
		.then(data => {
		 data.data.children.data?.map(data => data.data);
		})
		.catch(err => {
			console.log(err);
		});
	}
}
export default Reddit; */

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
})

export const getPosts = async () => {
	const response = await RedditAPI.get(`search.json?q=${term}`);
	return response.data;
}
