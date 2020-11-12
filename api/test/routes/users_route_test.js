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
        console.log(JSON.stringify(users));
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
        const expected = users.map((user) => user._id);
        const doc = await User.find();
        //const res = await request(app).get('/users');
        const actual = doc.map((user) => user._id);

        assert.deepStrictEqual(expected, actual);
    });
});