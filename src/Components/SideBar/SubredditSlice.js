import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RedditAPI } from '../../util/Reddit.js';

const initialState = {
 subreddits: [],
 status:'idle',
 error: null,
}

const subredditSlice = createSlice({
	name:'subreddits',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder
			.addCase(getSubreddits.pending, (state, action) => {
        		state.status = 'loading'
      		})
      		.addCase(getSubreddits.fulfilled, (state, action) => {
        		state.status = 'succeeded'
        		state.posts = action.payload
      		})
      		.addCase(getSubreddits.rejected, (state, action) => {
        		state.status = 'failed'
        		state.error = action.error.message
      		})
	}
});

export default subredditSlice.reducer;

export const selectSubreddits = (state => state.subreddits.subreddits);

export const getSubreddits = createAsyncThunk('reddit/getSubreddits', 
	async () => {
	const response = await RedditAPI.get(`/subreddits.json`);
	const data = response.data.data.children;
	const subreddits = data.map((subreddit) => subreddit.data);
	return subreddits;
});
