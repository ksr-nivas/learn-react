import React from 'react';
import articleContent from './article-content';

export default function ArticlesList({match}) {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);
    return (
        <React.Fragment>
            <h1>This is the {article.title} </h1>
            {article.content.map((para, key) => (
                <p key={key}>{para}</p>
            ))}
        </React.Fragment>
    )
}
