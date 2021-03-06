const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// test commit

const userSchema = new Schema({
    schemaVersion: {
        type: Number,
        required: [true, "Schema version required"],
    },
    _id: {
        type: ObjectID,
        required: [true, "ID required"],
    },
    email: { // need to add validation against using dupEmail
        type: String,
        required: [true, "Email required"],
    },
    password: { // this needs to be stored by using salted bcrypt, but for now, plain text it is
        type: String,
        required: [true, "Password required"],
    },
    roles: {
        type: Object,
        required: [true, "Roles required"],
        validate: {
            validator: (roles) => {
                // no orgs contained in roles prop should fail
                if (!roles){
                    return false;
                }
                // each org should just have one string for credibility
                for (org in roles){
                    if (!(roles[org]) || !(typeof roles[org] === 'string')){
                        return false;
                    }
                }
                return true;
            },
            message: "Roles bad formatting"
        },
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