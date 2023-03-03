import React from 'react';
import { authorize } from 'react-native-app-auth'
let accessToken = '';
let userId = '';

const redirectUri = "http://localhost:3000/";
const Reddit = {
	getAccessToken() {
		if (accessToken) {
			return accessToken;
		} 
		//check the access token match
		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			//This wipes the access token and URL parameters when it expires, to grab a new one
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken; 
		} else {
			const accessUrl = /*;`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`*/;
			window.location = accessUrl;
		}
	},
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
