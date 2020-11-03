const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: {
        type: ObjectID,
        required: [true, "ID required"],
    },
    schemaVersion: {
        type: Number,
        required: [true, "Schema version required"],
    },
    firstName: {
        type: String,
        required: [true, "First name required"],
        minlength: 1,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: [true, "Last name required"],
        minlength: 1,
        maxlength: 50
    },
    // mongoose casts value given to Date to native js date
    dob: Date, 
    addressId: {
        type: ObjectID, 
        required: [true, "Address required"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number required"],
        validate: {
            validator: (v) => {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number.`
          },
    }
});

userSchema.methods.getName = function(){
    return this.firstName + " " + this.lastName;
}

const user = mongoose.model('user', userSchema, 'users');

module.exports = user;