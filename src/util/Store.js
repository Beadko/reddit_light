import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Components/PostList/PostsSlice.js'

export const store = configureStore({ 

	reducer: {
		posts: postsReducer,
	}
});