const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate')
const path = require('path');
const connectToDB = require('./utils/database/dbConnect');
const session = require('express-session');
connectToDB();
const Login = require('./models/Logins');
app.engine('ejs', ejsMate)

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'mysecret', resave: false, saveUninitialized: false }));

const loginRoutes = require('./routes/login')
app.use('/login', loginRoutes);
const signupRoutes = require('./routes/signup')
app.use('/signup', signupRoutes);

app.get('/', async (req, res) => {
    if (req.session.loginID) {
        const user = await Login.findById(req.session.loginID).populate('user');
    }
    res.render('index');
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/constructors', (req, res) => {
    res.render('constructors');
})

app.get('/logout', (req, res, next) => {
    req.session.destroy();
    res.redirect('/');
})

const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})