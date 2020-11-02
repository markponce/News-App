import './App.css';
import React, { useState, useEffect } from 'react';
import Articles from './Articles'
import ArticleDetails from './ArticleDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  const [articles, setArticles] = useState([])

  // const API_URL = "/v2/everything?q=bitcoin&from=2020-09-27&sortBy=publishedAt&apiKey=f94f33d466c2452a810861ce766667d4"
  const API_URL = "/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=f94f33d466c2452a810861ce766667d4"

  useEffect(() => {
    getArticles()
  }, [])

  const getArticles = async () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setArticles(data.articles)
      }).catch(err => alert(err.message)) 
  } 

  return (

    <Router>
    <div className="app-container">
      <Switch>
        <Route path="/article-details">
          <ArticleDetails/>
        </Route>
        <Route path="/">
          <Articles articles={articles}/>
        </Route>
      </Switch>
    </div>
  </Router>

  );

}

export default App;