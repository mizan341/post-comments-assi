import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import NoMatch from './components/NoMatch/NoMatch';
import Friends from './components/Friends/Friends';
import Groups from './components/Groups/Groups';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div>
      <Header />
      <Router>
        <Switch>
           <Route path="/post">
            <Post />
          </Route>
           <Route path="/home">
            <Post />
          </Route>
           <Route path="/friends">
            <Friends />
          </Route>
           <Route path="/groups">
            <Groups/>
          </Route>
           <Route path="/userDetail/:userId">
            <PostDetail/>
          </Route>
          
          <Route exact path="/">
            <Post />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
