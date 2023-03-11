import React from 'react';

const redirectUri = "http://localhost:3000/";
const Reddit = {

	search(term) {
		return fetch(`https://www.reddit.com/search.json?q=${term}`,
		{
			method: 'GET',
		}).then(response => { 
			return response.json();
		})
		.then(data => {
		 console.log(data);
		})
		.catch(err => {
			console.log(err);
		});
	}
}
export default Reddit;