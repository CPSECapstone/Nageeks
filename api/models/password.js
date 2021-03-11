const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hashCodeLength = 60;

const passSchema = new Schema({
    _id: {
        type: ObjectID,
        required: [true, "ID required"],
    },
    user_id: {
        type: ObjectID,
        unique: true,
        required: [true, "User ID required"],
    },
    hashCode: {
        type: String,
        required: [true, "Hash Code required"],
        minLength: hashCodeLength,
        maxLength: hashCodeLength,
    },
})

const Password = mongoose.model('Password', passSchema, 'passwords');

module.exports = Password;
