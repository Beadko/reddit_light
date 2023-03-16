import React from 'react';
import './SearchBar.css';

const SearchBar = ({posts, setSearchResults}) => {
	const handleSubmit = event => event.preventDefault();

	const handleTermChange = event => {
		if (!event.target.value) return setSearchResults(posts);

		const resultsArray = posts.filter(post => post.title.includes(event.target.value) || post.body.includes(event.target.value))

		setSearchResults(resultsArray);
	};

 	return(
 		<form className="SearchBar" onSubmit={handleSubmit}>
 	  		<input placeholder="type something here" onChange = {handleTermChange}/>
 		</form>
 	)
}
export default SearchBar;
