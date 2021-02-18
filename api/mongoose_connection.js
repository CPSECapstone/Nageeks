const mongoose = require('mongoose');
const keys = require('./config/keys');
var app = require('./app.js');

// connect to MongoDB 
const SESS_LIFETIME = 2 * 60 * 60 * 1000; // 2 hours
const uri = keys.mongoURI;
var mongoConnect = null;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

// check connection
let db = mongoose.connection;
db.on('open', () => console.log("Mongoose connected"));
db.on('close', () => console.log("\nClosing mongoose"));

// If the Node process ends, close the Mongoose connection
// Closing the app with ctrl-c will trigger this close
process.on('SIGINT', function() {
    db.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });

db.on('error', (err) => console.log(err));

module.exports = db, mongoConnect;