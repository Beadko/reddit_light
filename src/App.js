import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchResults from './Components/SearchResults/SearchResults.js'
import Reddit from './util/Reddit.js';
import SearchBar from './Components/SearchBar/SearchBar.js';


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
        <div className="TopBar">
          <Header />
          <SearchBar onSearch = {this.search}/>
        </div>
        <div className = "SearchResults"> {this.search}
        </div>
      </div>
    );
  }
}

export default App;
