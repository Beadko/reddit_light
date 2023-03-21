import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	posts: null,
	isLoading: false,
	hasErrors: false,
}

const PostsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {

	}
});

export default postsSlice.reducer;