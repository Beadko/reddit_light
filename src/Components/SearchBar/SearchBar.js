import './SearchBar.css';
import React from 'react';

const SearchBar = ({setPosts, getPosts}) => {
	const handleSubmit = event => event.preventDefault();

	const handleTermChange = event => {
		if (!event.target.value) return;

 		getPosts(event.target.value).then(posts => {
      		setPosts(posts);
    	})
	};

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleTermChange(event)
    	}
	}

 	return(
 		<form className="SearchBar" onSubmit={handleSubmit}>
 	  		<input placeholder="type something here" /*onChange = {handleTermChange}*/ onKeyUp={handleKeyPress}/>
 		</form>
 	)
}
export default SearchBar;
