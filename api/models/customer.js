const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const customersSchema = new mongoose.Schema({
    _id: ObjectID,
    username: String 
  });
const customer = mongoose.model('customer', customersSchema, 'customers');
module.exports = customer;