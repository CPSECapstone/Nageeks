const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const mongoose = require('../../mongoose_connection');
const User = require('../../models/user');
const { ObjectID } = require('mongodb');

async function createUser(){
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
        user = await createUser();
    });

    beforeEach(async function() {
        try{
            await mongoose.dropCollection('users');
            user = await createUser();
        }
        catch(err){
            console.log(err.message);
        }
    });

    after(async function() {
        try{
            await mongoose.dropCollection('users');
        }
        catch(err){
            console.log(err.message);
        }
    });

    it("Successfuly add user", async function (){
        /* 
            save on a model inserts a new document
            save on a document updates the document
            since isNew is a property of the user model,
            save tries to call an update and cant find user since it was dropped
        */
        assert.isFalse(user.isNew, "Instance of user model is not new after saving");
    });

    it("Find user by id", async function(){
        const actual = await User.findById(user._id);
        assert.equal(actual._id.toString(), user._id.toString(), "");
    });

    it("Update user first name", async function(){
        const expected = "Kyle";

        const doc = await User.findById(user._id);
        doc.firstName = expected;
        await doc.save();

        const actual = await User.findById(user._id);
        assert.equal(actual.firstName, expected, "The found document should be the one we just saved");
    });

    it("Successfuly delete user", async function(){
        // finds doc by id, removes it, passes found doc (if any) to callback
        const actual = await User.findByIdAndDelete(user._id);
        assert.equal(actual._id.toString(), user._id.toString(), "Id of deleted user should match desired user id");
    });

});