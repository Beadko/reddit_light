import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RedditAPI } from '../../util/Reddit.js';

const initialState = {
	posts: [],
	status:'idle',
	error: null,
	searchTerm:''
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
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getSearchPosts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getSearchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(getSearchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })

  }
});

export default postsSlice.reducer;

export const selectAllPosts = (state => state.posts.posts);

export const getPosts = createAsyncThunk('reddit/getPosts', 
	async (subreddit) => {
	const response = await RedditAPI.get(`r/${subreddit}/new.json?&limit=30`);
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

export const getSearchPosts = createAsyncThunk('reddit/searchPosts',
	async(term) => {
		const response = RedditAPI.get(`search.json?q=${term}&sort=top&limit=30`);
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