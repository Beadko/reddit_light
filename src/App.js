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
    console.log(term);
    Reddit.search(term).then(results => {
      this.setState({searchResults: results.data})
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
      </div>
    );
  }
}

export default App;
