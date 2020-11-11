const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const mongo = require('../mongo');
const User = require('../models/user');
const { ObjectID } = require('mongodb');

async function addUser(){
    const user = new User({
        _id: ObjectID(),
        schemaVersion: 1.0,
        firstName: "Deku",
        lastName: "Harms",
        dob: new Date('1990-08-15T06:15:30.000+00:00'),
        address: {
            country: "United States", 
            firstLine: "400 Pacheco Way",
            secondLine: "",
            city: "San Luis Obispo",
            state: "CA",
            zipCode: "93410",
        },
        phoneNumber: "530-391-9054"
    });
    await user.save();
    return user;
}

describe("CRUD testing user model", function() {
    let user = null;
    before(async function(){
        user = await addUser();
    });

    beforeEach(async function() {
        try{
            await mongo.dropCollection('users');
            user = await addUser();
        }
        catch(err){
            console.log(err.message);
        }
    });

    after(async function() {
        try{
            await mongo.dropCollection('users');
            await mongo.close();
        }
        catch(err){
            console.log(err.message);
        }
    });

    it("Successfuly add user to db", async function (){
        // save on a model inserts a new document
        // save on a document updates the document
        console.log(user._id);
        assert.isFalse(user.isNew, "Check that the user saved correctly");
    });

    it("Find user by id", async function(){
        // since isNew is a property of the user model,
        // save is trying to call an update and cant find user since it was dropped
        console.log(user._id);
        const actual = await User.findById(user._id);
        assert.equal(actual._id.toString(), user._id.toString(), "The found document should be the one we just saved");
    });

});