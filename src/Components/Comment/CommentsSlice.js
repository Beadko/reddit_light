import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RedditAPI } from '../../util/Reddit.js';

const initialState = {
	status:'idle',
	error: null,
	comments: []
}

const commentsSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {

	}, 
	extraReducers(builder) {
    builder

      .addCase(getComments.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.comments = action.payload
      })
      .addCase(getComments.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export default commentsSlice.reducer;

export const selectComments = (state => state.comments.comments);

export const getComments = createAsyncThunk('reddit/getComments',
	async(permalink) => {
		return RedditAPI.get(`https://www.reddit.com/${permalink}`).then( response => {
			// We expect an array of 2 items back in response
			// The first item is the post, and the second is the comments
			// The top level comments are in the children of that data
			// Replies to those are nested inside each comment
			const data = response.data[1].data.children;
			const comments = data.map((comment => comment.data));
			return comments;
		})
	}
)

