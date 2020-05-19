import React from 'react';
import articles from './article-content';

export default function ArticlesList({match}) {
    const name = match.params.name;
    const article = articles.find((article) => article.name === name);
    return (
        <React.Fragment>
            <h1>This is the {article.name} article </h1>
        </React.Fragment>
    )
}
