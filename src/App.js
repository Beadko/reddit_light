import React, {useState, useEffect} from 'react';
import './App.css';
import {getPosts} from './util/Reddit.js';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostList from './Components/PostList/PostList.js'


function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
        <div className="TopBar">
          <Header />
          <SearchBar setPosts={setPosts} getPosts={getPosts}/>
        </div>
        <PostList posts={posts} />
    </div>
    )

}


/*class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: []
    }
  }


  search(term) {
    console.log(term);
    Reddit.search(term).then(results => {
      return results.data;
      this.setState({search: this.props.search});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="TopBar">
          <Header />
          <SearchBar onSearch = {this.search}/>
        </div>
        <div className = "SearchResults"> {this.state.search}
        </div>
      </div>
    );
  }
}*/

export default App;