const express = require('express');
const router = express.Router();
const Login = require('../models/Logins');
const passwordFunctions = require('../utils/passwordFunctions');

const checkIfLoggedIn = (req, res, next) => {
    if (req.session.loginID) {
        console.log('already logged in');
        res.redirect('/');
    } else {
        next();
    }
}
router.get('/', checkIfLoggedIn, (req, res) => {
    res.render('users/login');

})

router.post('/', async (req, res) => {
    const foundUser = await Login.findAndValidate(req.body);
    if (foundUser) {
        req.session.loginID = foundUser._id;
    }
    res.redirect('/')
})
module.exports = router;