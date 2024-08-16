const express = require('express');
const path = require('path');
require('dotenv').config();

console.log(">>> check env: ", process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check ABC')
})

app.get('/hoidanit', (req, res) => {
    //res.send('Hello World!')
    res.render('sample.ejs')
})

app.listen(port, hostname || 'localhost', () => {
    console.log(`Example app listening on http://${hostname || 'localhost'}:${port}`)
});
