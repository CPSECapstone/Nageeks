const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const customersSchema = new mongoose.Schema({
    _id: ObjectID,
    username: String 
  });
const Customers = mongoose.model('Customers', customersSchema, 'Customers');
module.exports = Customers;