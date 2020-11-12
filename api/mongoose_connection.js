const mongoose = require('mongoose');
const keys = require('./config/keys');

// connect to MongoDB 
const uri = keys.mongoURI;
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

module.exports = db;