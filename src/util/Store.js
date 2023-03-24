import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../Components/PostList/PostsSlice.js';
import subredditReducer from '../Components/SideBar/SubredditSlice.js';

export const store = configureStore({ 

	reducer: {
		posts: postsReducer,
		subreddits: subredditReducer,

	}
});