const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passSchema = new Schema({
    _id: {
        type: ObjectID,
        required: [true, "ID required"],
    },
    user_id: {
        type: ObjectID,
        required: [true, "User ID required"],
    },
    hashCode: {
        type: String,
        required: [true, "Hash Code required"],
        minLength: 60,
        maxLength: 60,
    },
})

const Password = mongoose.model('Password', passSchema, 'passwords');

module.exports = Password;