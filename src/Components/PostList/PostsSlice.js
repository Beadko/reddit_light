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

export const fetchPosts = createAsyncThunk('reddit/getSubredditPosts', 
	async (subreddit) => {
	const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
	const json = await response.json();
	return json.data.children.map(post => post.data)
});