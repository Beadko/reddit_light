import React from 'react';
import logo from './logo.png';
import './App.css';

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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Reddit Light
          </p>
        </header>
      </div>
    );
  }
}

export default App;
