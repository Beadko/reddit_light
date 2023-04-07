import './SearchBar.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm, getSearchPosts, selectPosts } from '../PostList/PostsSlice.js';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({setPosts, searchPosts}) => {
	const handleSubmit = event => event.preventDefault();
	const dispatch = useDispatch();

	const handleTermChange = event => {
		if (!event.target.value) return;

 		dispatch(getSearchPosts(event.target.value));
	};

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleTermChange(event)
    	}
	}

 	return(
 		<div className="searchbar">
 			<form onSubmit={handleSubmit}>
 	  			<input placeholder="type something here" onKeyUp={handleKeyPress}/>
 			</form>
 		</div>
 	)
}
export default SearchBar;
