const mongoose = require('mongoose');
const connectToDB = require('../utils/database/dbConnect');
const User = require('../models/Users');
const makeLogin = require('./seedLogins');
// connectToDB();

const makeUser = async (user) => {
    const newUser = new User({
        firstName: user.firstName,
        lastName: user.lastName,
        dateOfBirth: user.dateOfBirth,
        country: user.country
    });
    await newUser.save();
    return newUser;
};
// makeUser(user);

module.exports = makeUser;