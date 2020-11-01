const mongoose = require('mongoose');
const keys = require('./config/keys');

// connect to MongoDB 
const uri = keys.mongoURI;
console.log("NODE_ENV: " + process.env.NODE_ENV);
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

// check connection
let db = mongoose.connection;
db.once('open', () => console.log("connected to mongodb"));

db.on('error', (err) => console.log(err));

module.exports = db;