import React from 'react';
import { Link } from 'react-router-dom';
import articleContent from './article-content';

export default function ArticlesList() {
    return (
        <React.Fragment>
            <h1>Articles</h1>
            <ul>
                {articleContent.map((article, key) => (
                    <Link to={`/article/:${article.name}`} key={key}>{article.title}</Link>
                ))}
            </ul>
        </React.Fragment>
    )
}
