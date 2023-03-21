import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

export const initialState = {
	postsFound:false,
	postsNotFound: false,
	isLoading: false,
	hasErrors: false,
	posts:[],
	searchTerm:'',
	sortBy: 'relevance'
}

export const searchSlice = createSlice({
	name:'search',
	initialState,
	reducers: {

	},
});

export const PostsSlice = createSlice({
	name:'posts'
	initialState,
	reducers: {
		posts: PostsReducer
	}
})