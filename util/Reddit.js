import React from 'react';

const redirectUri = "http://localhost:3000/";
const Reddit = {

	search(term) {
		return fetch('https://reddit.com/search.json?q=${term}',)
		.then(response => { 
			return response.json();
		})
		.then(data => {
			data.data.children.map((data) => data.data);
		})
		.catch(err => {
			console.log(err);
		});
	}

export default Reddit;