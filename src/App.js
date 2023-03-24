import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostList from './Components/PostList/PostList.js';
import SideBar from './Components/SideBar/SideBar.js'

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <div className="TopBar">
          <Header />
          <SearchBar />
        </div>
        <PostList />
        <SideBar /> 
    </div>
    )
}

export default App;