import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostList from './Components/PostList/PostList.js';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
        <div className="TopBar">
          <Header />
          <SearchBar />
        </div>
        <PostList />
    </div>
    )
}

export default App;