import React from 'react';
import articleContent from './article-content';

export default function ArticlesList() {
    return (
        <React.Fragment>
            <h1>Articles</h1>
            <ul>
                {articleContent.map(article => (
                    <li>{article.title}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}
