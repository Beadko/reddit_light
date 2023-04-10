import React from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="header">
				<FaReddit className="App-logo" alt="logo" />
				<h2 className="App-header">
	            	Reddit Light
	          	</h2>
			</div>

		)
	}

}
export default Header;