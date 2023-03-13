import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SearchResults from './Components/SearchResults/SearchResults.js'
import Reddit from './util/Reddit.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults:[], 
    }
  }

  search(term) {
    Reddit.search(term).then(results => {
      console.log(results)
    })
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
        <SearchResults searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

export default App;
