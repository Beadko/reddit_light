
import axios from 'axios';

export const RedditAPI = axios.create({
	baseURL:`https://www.reddit.com`
});
