import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RedditAPI } from '../../util/Reddit.js';

const initialState = {
	posts: [],
	status:'idle',
	error: null
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {

	}, 
	extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default postsSlice.reducer;

export const selectAllPosts = (state => state.posts.posts);

export const getPosts = createAsyncThunk('reddit/getSubredditPosts', 
	async (subreddit) => {
	const response = await RedditAPI.get(`r/${subreddit}.json?limit=20`);
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