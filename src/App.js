import React, { useState, useEffect } from 'react';
import './App.css';
import { getPosts } from './Components/PostList/PostsSlice.js';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostList from './Components/PostList/PostList.js';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
        <div className="TopBar">
          <Header />
          <SearchBar setPosts={setPosts}/>
        </div>
        <PostList posts={posts}/>
    </div>
    )
}

export default App;