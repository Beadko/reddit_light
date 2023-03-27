import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.js';
import SearchBar from './Components/SearchBar/SearchBar.js';
import PostList from './Components/PostList/PostList.js';
import SideBar from './Components/SideBar/SideBar.js'
import HomePage from './Pages/HomePage.js';
import SearchPage from './Pages/SearchPage.js';
import SubredditPage from './Pages/SubredditPage.js';
import ErrorPage from './Pages/ErrorPage.js';


function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Router>
      <div className="App">
        <div className="topbar">
          <Header />
            <SearchBar />
        </div>
        <SideBar /> 
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