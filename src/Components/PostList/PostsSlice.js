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
        state.posts = action.payload
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
        state.posts = action.payload
      })
      .addCase(getSearchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
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

export default postsSlice.reducer;

export const selectPosts = (state => state.posts.posts);

export const getPosts = createAsyncThunk('reddit/getPosts', 
	async (subreddit) => {
	const response = await RedditAPI.get(`r/${subreddit}.json`);
	const data = response.data.data.children;
	const posts = data.map((post) => {
		return { 
			id: post.data.id,
	       	title: post.data.title,
	        text: post.data.selftext,
	        author: post.data.author,
					num_comments: post.data.num_comments,
		    	img: post.data.url,
		}
	});
	return posts;
});

export const getSearchPosts = createAsyncThunk('reddit/searchPosts',
	async(searchTerm) => {
		return RedditAPI.get(`search.json?q=${searchTerm}&sort=top&limit=30`).then( response => {
			const data = response.data.data.children;
			const posts = data.map((post) => {
				return { 
					id: post.data.id,
	        		title: post.data.title,
			        text: post.data.selftext,
			        author: post.data.author,
			        num_comments: post.data.num_comments,
			        time_created: post.data.created_utc,
		          img: post.data.url,
		   		}
		   	});
			return posts;
		});
	}
);

export const getComments = createAsyncThunk('reddit/getComments',
	async({subreddit, postId}) => {
		return RedditAPI.get(`https://www.reddit.com/${subreddit}/comments/${postId}.json?limit=30`).then( response => {
			const data = response.data.data.children;
			const comments = data.map((comment => comment.data));
		})
	}
)

