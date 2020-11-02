import './Articles.css';
import React from 'react';
import {
  Link
} from "react-router-dom";

function Articles(props) {

  const {articles} = props
  return (
    <>
        <h1>Aritles</h1>
        <div className="article-list">
          {articles.map((article) =>  
            {
              return (
              <div className="article-item" key={article.title}>
                <h2><Link to={{
                  pathname: `/article-details/`,
                  state: {article : article}
                }}>{article.title}</Link></h2>
                <div className="article-author">
                  {article.author} - {article.publishedAt}
                </div>
                <p><img src={article.urlToImage} alt={article.title}/></p>
                <p>{article.description}</p> 
              </div>)
            }
          )}
        </div>
    </>
  );
}

export default Articles;
