import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults:[], 
    }
  }


  render() {
    return (
      <div className="App">
        <nav>
          <p className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            Reddit Light
          </p>
          <SearchBar onSearch = {this.search}/>
        </nav>  
      </div>
    );
  }
}

export default App;
