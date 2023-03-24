import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, getSubreddits } from './SubredditSlice.js';
import { getPosts } from '../PostList/PostsSlice.js';



const SideBar = () => {
	const dispatch = useDispatch();
	const subreddits = useSelector(selectSubreddits);
	const subredditStatus = useSelector(state => state.subreddits.status);
	const error = useSelector(state => state.subreddits.error);

	useEffect(() => {
		dispatch(getSubreddits());
	},[dispatch]);

	let content;

  	if (subredditStatus === 'loading') {
    	content = <div className="spinner-border">Loading...</div>
  	} else if (subredditStatus === 'succeeded') {
    	content = subreddits.map((subreddit) => (
				<li key={subreddit.id}>
					<button className={subreddit.display_name} onClick={() => dispatch(getPosts(subreddit.display_name))}>
					<img src={subreddit.icon_img || `https://www.redditinc.com/assets/images/site/reddit-logo.png`
						 }
						alt={`${subreddit.display_name}`}
						className="subreddit-icon" 
					/>
					{subreddit.display_name}
					</button>
				</li>
			))
  	} else if (subredditStatus === 'failed') {
    	content = <div>{error}</div>
  	}

	return(
		<div className="side_bar">
			<h3 className="subreddit-title">Your Subreddits</h3>
			<ul className="subreddit-list">
			{content}
			</ul>
		</div>
	)
}
export default SideBar;