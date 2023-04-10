import React from 'react';
import './Header.css';
import { FaReddit } from 'react-icons/fa';

const Header =() => {
	return(
		<div className="header">
			<FaReddit className="App-logo" alt="logo" />
			<h2 className="App-header">
	            Reddit Light
	         </h2>
		</div>

		)
	};
export default Header;