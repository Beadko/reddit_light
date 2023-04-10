import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SideBar from './Components/SideBar/SideBar.js'
import PostList from './Components/PostList/PostList.js'
import { FaBars } from 'react-icons/fa';


function App() {
  //Sidebar going into the hamburger menu when the device is smaller
  const [showSidebar, setShowSidebar] = useState(false);
  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
      <div className="App">
        <div className="topbar">
          <Header />
          <SearchBar />
          <button className="menu-button" onClick={handleMenuClick}>
            <FaBars />
          </button>
        </div>
        <SideBar className={`sidebar ${showSidebar ? 'visible' : ''}`} />
        <PostList />
      </div>

    )
}

export default App;

