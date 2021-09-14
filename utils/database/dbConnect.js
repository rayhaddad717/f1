const username = process.env.mongoUsername ? process.env.mongoUsername : process.argv[2];
const password = process.env.mongoPassword ? process.env.mongoPassword : process.argv[3];
console.log(username, password);
const mongoose = require('mongoose');
module.exports = () => {
    mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.ugkjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', () => {
        console.log('Database connected')
    })
}
