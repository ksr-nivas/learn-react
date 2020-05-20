import express from 'express';
import bodyParser from 'body-parser';

const articlesInfo = {
    'learn-react': {upvotes: 0, comments: []},
    'learn-node': {upvotes: 0, comments: []},
    'learn-angular': {upvotes: 0, comments: []}
};

const app = express();
app.use(bodyParser.json());

app.post('/api/articles/:name/upvote', (req, res) => {
    const articleName = req.params.name;
    articlesInfo[articleName].upvotes += 1;
    res.status(200).send('upvoted');
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const articleName = req.params.name;
    const {userName, text} = req.body;
    articlesInfo[articleName].comments.push({userName, text});
    res.status(200).send(articlesInfo[articleName]);
});

app.listen(8000, () => console.log('Server started: Listening on 8000'));