import React from 'react';
import './SearchResults.css';
import Reddit from '../../util/Reddit'

class SearchResults extends React.Component {
	render() {
		return(
			<div className="SearchResults">
      			{posts.map(data => <div class="post">
     				<div class="post-body">
     		 			<h5 class="post-title">${post.title}</h5>
      					<p class="post-text">${post.selftext}</p>
   			 		</div> 
  				</div>}
  			</div>
		)
	}
}
export default SearchResults;