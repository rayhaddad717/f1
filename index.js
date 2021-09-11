const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate')
const path = require('path');
app.engine('ejs', ejsMate)

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/constructors', (req, res) => {
    res.render('constructors');
})
const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})