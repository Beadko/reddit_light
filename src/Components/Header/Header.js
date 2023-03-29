import React from 'react';
import logo from '../../logo.png';
import './Header.css';

class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="Header">
				<h2 className="App-header">
	        		<img src={logo}  className="App-logo" alt="logo" />
	            	Reddit Light
	          	</h2>
			</div>

		)
	}

}
export default Header;