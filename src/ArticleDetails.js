import React from 'react'
import {
  useLocation
} from "react-router-dom";

export default function ArticleDetails() {

  let location = useLocation();

  const article = location.state.article

  return (
    <div className="article-details">
      <h1>ArticleDetails</h1>
        <div className="article-item" key={article.title}>
          <h2><a href={article.url} target="_blank" rel="noreferrer">{article.title}</a></h2>

          <div className="article-author">
            {article.author} - {article.publishedAt}
          </div>
          <p><img src={article.urlToImage} alt={article.title}/></p>
          <p className="article-article">{article.content}</p> 
        </div>
    </div>
  )
}