const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    _id: ObjectID,
    username: String 
});
const customer = mongoose.model('customer', customersSchema, 'customers');
module.exports = customer;