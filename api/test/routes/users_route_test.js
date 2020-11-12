const request = require("supertest");
const { assert } = require("chai");
const app = require("../../app");

const mongoose = require('../../mongoose_connection');
const User = require('../../models/user');
const { ObjectID } = require('mongodb');

async function createUsers(){
    const users = [
        {
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
        },
        {
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
        }
    ];
    await User.create(users);
    return users;
}

describe("Testing /users route", function() {
    let users = null;

    before(async function(){
        users = await createUsers();
    });

    beforeEach(async function() {
        try{
            await mongoose.dropCollection('users');
            users = await createUsers();
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
    })

    it("Find all users", async function(){
        const expected = users.map((user) => user._id.toString());
        const res = await request(app).get('/users');
        const actual = res.body.map((user) => user._id);
        console.log(res.body);
        // console.log(typeof expected[0]); bson object because user model uses bson
        // console.log(typeof actual[0]); string because of res.json
        assert.deepEqual(expected, actual);
    });

    it("Find user by uid", async function(){
        const expected = users[0]._id.toString();
        const res = await request(app).get(`/users/${users[0]._id.toString()}`);
        const actual = res.body._id;
        //console.log(res.body);
        // console.log(typeof expected[0]); bson object because user model uses bson
        // console.log(typeof actual[0]); string because of res.json
        console.log(res.body)
        assert.deepEqual(expected, actual);
    });
});