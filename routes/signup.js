const express = require('express');
const router = express.Router();
const Login = require('../models/Logins');
const passwordFunctions = require('../utils/passwordFunctions');

const checkIfLoggedIn = (req, res, next) => {
    if (req.session.loginID) {
        req.flash('message', 'already logged in!');
        res.redirect('/');
    } else {
        next();
    }
}

router.get('/', checkIfLoggedIn, (req, res) => {
    res.render('users/signup');

})

router.post('/', async (req, res) => {
    const hashedPassword = await passwordFunctions.hashPassword(req.body.password);
    req.body.password = hashedPassword;
    const newUser = await Login.create(req.body);
    req.session.loginID = newUser._id;
    res.redirect('/')
})
module.exports = router;