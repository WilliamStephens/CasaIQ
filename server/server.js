const express = require('express');
const path = require('path');
const configureMiddleware = require('./middleware/webpackDevMiddleware');

const app = express();

configureMiddleware(app);
app.use(express.static('dist'));

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));// eslint-disable-line no-console
