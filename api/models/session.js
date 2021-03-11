const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    schemaVersion: {
        type: Number,
        required: [true, "Schema version required"],
    },
    _id: {
        type: String,
        required: [true, "ID required"],
    },
    uid: {
        type: ObjectID,
        required: [true, "UID required"]
    },
    loginTime: {
        type: Number,
        required: [true, "Login time required"]
    }
});

//userSchema.methods.getName = function(){
    //return this.firstName + " " + this.lastName;
//}

const User = mongoose.model('Session', sessionSchema, 'sessions');


module.exports = User;