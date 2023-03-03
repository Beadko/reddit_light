import React from 'react';

const redirectUri = "http://localhost:3000/";
const Reddit = {
	search(term) {
		return fetch('https://reddit.com/search.json?q=${term}',
		).then(response => { 
			return response.json();
			}).then(jsonResponse => {
				if (!jsonResponse.listings) {
					return [];
				}
				return jsonResponse.listings.items.map(listing => listing.data)
			}).catch(err => console.log(err))
			};
	}
