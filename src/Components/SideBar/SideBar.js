import React, { useEffect, useState } from 'react';
import './SideBar.css'
import { useSelector, useDispatch } from 'react-redux';
import { selectSubreddits, getSubreddits, changeActiveSubreddit } from './SubredditSlice.js';
import { getPosts } from '../PostList/PostsSlice.js';




const SideBar = () => {
	const dispatch = useDispatch();
	const subreddits = useSelector(selectSubreddits);
	const subredditStatus = useSelector(state => state.subreddits.status);
	const error = useSelector(state => state.subreddits.error);
	const currentSubreddit = useSelector(state => state.subreddits.activeSubreddit);

	useEffect(() => {
		dispatch(getSubreddits());
	},[dispatch]);


	let content;
  	if (subredditStatus === 'loading') {
    	content = <div className="spinner-border">Loading...</div>
  	} else if (subredditStatus === 'succeeded') {
    	content = subreddits.map((subreddit) => (

			<li className='individual-subreddits'
				key={subreddit.id}                            
				onClick={() => dispatch(changeActiveSubreddit(subreddit.display_name))}
                className={currentSubreddit === subreddit.display_name ? 'current' : ''}
                >
				<button className={`${subreddit.display_name}`} 
						onClick= {() => dispatch(getPosts(subreddit.display_name))
						}>
				<img className ='subreddit-icon' 
					 src={subreddit.icon_img || `https://www.redditinc.com/assets/images/site/reddit-logo.png`
						 }
					 alt={`${subreddit.display_name}`}
					/>
				{subreddit.display_name}
				</button>
			</li>
		))
  	} else if (subredditStatus === 'failed') {
    	content = <div>{error}</div>
  	}



	return(
		<div className="sidebar">
			<h5 className="subreddit-title">SUBREDDITS</h5>
			<ul className="subreddit-list">
			{content}
			</ul>
		</div>
	)
}
export default SideBar;