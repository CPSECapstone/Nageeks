const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const addressSchema = new mongoose.Schema({
    _id: ObjectID,
    country: String, // Country, Region
    firstLine: String, // Street address, P.O. box, company name, c/o
    secondLine: String, // Apartment, suite, unit, building, floor, etc.
    city: String,
    state: String, // State, Province, Region
    zipCode: String, // State, Province, Region
  });
const address = mongoose.model('address', addressSchema, 'addresses');
module.exports = address;