import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";







function App() {
  const [posts,setPosts]=useState([]);

  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
                setPosts(data);
                })
                })

                // console.log(posts);




  return (
    <div>
      <Header></Header>

      <Router>
        <Switch>

        <Route path="/home">
        <Home posts={posts}></Home>
        </Route>

        {/* <Route path="/post">
        <Post posts={posts} comments={comments}></Post>
        </Route> */}


        <Route path="/post/:id">
        <PostDetails posts={posts}></PostDetails>
        </Route>


        <Route path="/">
        <Home></Home>
        </Route>

        <Route path="*">
        <NotFound></NotFound>
        </Route>

          

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;