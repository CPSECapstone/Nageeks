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
    address: {
        country: {
            type: String, // Country, Region
            required: [true, "Country address field required"]
        },
        firstLine:{
            type: String, // Street address, P.O. box, company name, c/o
            required: [true, "First line address field required"]
        },
        secondLine: String, // Apartment, suite, unit, building, floor, etc.
        city: {
            type: String,
            required: [true, "City address field required"]
        },
        state: {
            type: String, // State, Province, Region
            required: [true, "State address field required"]
        },
        zipCode: {
            type: String, // Zip Code
            required: [true, "Zip Code address field required"]
        }
    },
    phoneNumber: {
        type: String,
        required: [true, "Phone number required"],
        validate: {
            validator: (v) => {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number`
          },
    },
});

//userSchema.methods.getName = function(){
    //return this.firstName + " " + this.lastName;
//}

const User = mongoose.model('User', userSchema, 'users');


module.exports = User;