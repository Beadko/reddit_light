import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	posts: null,
	isLoading: false,
	hasErrors: false,
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {

	}
});

export default postsSlice.reducer;

export const selectAllPosts = (state => state.posts);

export const fetchPosts = createAsyncThunk('reddit/getSubredditPosts', 
	async (subreddit) => {
	const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=20`);
	const json = await response.json();
	const data = response.data.data.children;
	const posts = data.map((post) => {
		return { 
			id: post.data.id,
	        title: post.data.title,
	        subreddit: post.data.subreddit,
		}
	});
	return posts;
});