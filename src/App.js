import React from 'react';
import logo from './logo.png';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.js';
import Reddit from './util/Reddit.js';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchResults:[], 
    }
  }

  search(term) {
    Reddit.search(term).then(results =>{
      let output = '<div class="card-columns">';
    // loop through post
    results.forEach((post) => {

      output += `<div class="card">
     <div class="card-body">
      <h5 class="card-title">${post.title}</h5>
      <p class="card-text">${post.selftext}</p>
      <a href="${post.url}" target="_blank" class="btn btn-dark">Read More</a>
    </div> 
  </div>`;});
    output += "</div>";
    document.getElementById("results").innerHTML = output;
    });
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
