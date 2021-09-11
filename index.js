const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about')
})
const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})