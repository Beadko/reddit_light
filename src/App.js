import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import SideBar from './Components/SideBar/SideBar.js'
import HomePage from './Pages/HomePage.js';
import SearchPage from './Pages/SearchPage.js';
import SubredditPage from './Pages/SubredditPage.js';
import ErrorPage from './Pages/ErrorPage.js';
import { FaBars } from 'react-icons/fa';


function App() {
  //Sidebar going into the hamburger menu when the device is smaller
  const [showSidebar, setShowSidebar] = useState(false);
  const handleMenuClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="App">
        <div className="topbar">
          <Header />
          <SearchBar />
          <button className="menu-button" onClick={handleMenuClick}>
            <FaBars />
          </button>
        </div>
        <SideBar className={`sidebar ${showSidebar ? 'visible' : ''}`} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/r/:subreddit" component={SubredditPage} />
          <Route exact path="/search/:searchTerm" component={SearchPage} />
          <Route exact path="/:error" component={ErrorPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>

    )
}

export default App;

