const mongoose = require('mongoose');
const connectToDB = require('../utils/database/dbConnect');
const Login = require('../models/Logins');
connectToDB();
const user = {
    firstName: "ray",
    lastName: 'haddad',
    dateOfBirth: 'jan',
    username: 'ray619',
    password: 'pass',
    country: 'lebanon'
}
const makeUser = require('./seedUsers');
const makeLogin = async (user) => {
    const newUser = await makeUser(user);
    const newLogin = new Login({ username: user.username, password: user.password });
    newLogin.user = newUser;
    await newLogin.save();
}
// makeLogin(user);
Login.findOne({ username: 'ray619' }).populate('user').then(u => console.log(u)).catch(e => { console.log(e) })
