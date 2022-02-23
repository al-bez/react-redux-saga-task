import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'
import SinglePostPage from './pages/SinglePostPage'
import CreateNewPost from './pages/CreateNewPost';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={DashboardPage} />
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:id" component={SinglePostPage} />
        <Route exact path="/create_post" component={CreateNewPost} />
        <Route exact path="/edit_post/:id" component={CreateNewPost} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
