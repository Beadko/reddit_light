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
		return RedditAPI.get(`${permalink}`).then( response => {
			const data = response.data[1].data.children;
			const comments = data.map((comment => comment.data));
			return comments;
		})
	}
)

