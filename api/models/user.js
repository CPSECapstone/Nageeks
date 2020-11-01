const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    _id: ObjectID,
    firstName: String,
    lastName: String,
    dob: Date,
    addressId: ObjectID, 
    phoneNumber: String
});

userSchema.methods.getName = function(){
  return this.firstName + " " + this.lastName;
}

const user = mongoose.model('user', userSchema, 'users');

module.exports = user;