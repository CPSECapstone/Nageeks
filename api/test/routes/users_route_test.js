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
            schemaVersion: 1.1,
            roles: ["UCDavisClient"],
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
            schemaVersion: 1.1,
            roles: ["UCDavisDoctor"],
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

// Only tested happy paths so far - need to test error handling
describe("Testing /users route", function() {
    let users = null;

    before(async function(){
        users = await createUsers();
    });

    beforeEach(async function() {
        try{
            await User.deleteMany({});
            users = await createUsers();
        }
        catch(err){
            console.log(err.message);
        }
    });

    after(async function() {
        try{
            await User.deleteMany({});
        }
        catch(err){
            console.log(err.message);
        }
    })

    it("Find all users (200) - GET on /users", async function(){
        const expected = users.map((user) => user._id.toString());
        const res = await request(app).get('/users')
            .expect('Content-Type', /json/)
            .expect(200);
        const actual = res.body.map((user) => user._id);
        // console.log(typeof expected[0]); bson object because user model uses bson
        // console.log(typeof actual[0]); string because of res.json
        assert.deepStrictEqual(expected, actual);
    });

    it("Find user by uid - GET on /users/:uid", async function(){
        const expected = users[0]._id.toString();
        const res = await request(app).get(`/users/${users[0]._id.toString()}`)
            .expect('Content-Type', /json/)
            .expect(200);
        const actual = res.body._id;
        assert.strictEqual(expected, actual);
    });
    
    it("Find user by uid that does not exist - GET on /users/:uid", async function(){
        const uid = ObjectID().toString()
        const expected = "Error 404: Not Found";
        const res = await request(app).get(`/users/${uid}`)
            .expect(404);
        const actual = res.body.message;
        assert.strictEqual(expected, actual);
    });


    // this request is not allowed, expect a 400 response
    it("Add user by uid - POST on /users/:uid", async function(){
        const expected = {message: "Error 400: Post requests to existing users are not allowed."};
        const res = await request(app).post(`/users/${users[0]._id.toString()}`)
            .expect('Content-Type', /json/)
            .expect(400);
        const actual = res.body;
        assert.deepStrictEqual(expected, actual);
    });

    it("Add a new user - POST on /users", async function(){
        const uid = ObjectID();
        const expected = uid.toString();
        const location = `http://api.cloudhaven.com/users/${expected}`;

        // post request to add new user to db
        let res = await request(app).post(`/users`)
            .send({
                _id: uid,
                schemaVersion: 1.0,
                firstName: "Carlos",
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
            })
            .expect('Location', location)
            .expect(201);
        
        let actual = res.body._id;
        assert.strictEqual(expected, actual);
        
        // get request to check if user is actually there
        res = await request(app).get(`/users/${expected}`)
            .expect('Content-Type', /json/)
            .expect(200);
        
        actual = res.body._id;
        assert.strictEqual(expected, actual);
    });

    it("Bulk update of users - Put on /users/", async function(){
        // ex - when we need to update userinfo for batches of users
        // can use put /users in intervals to improve performance rather than
        // calling many put /users/:id 

        // make a deep copy
        let reqBody = JSON.parse(JSON.stringify(users));
        reqBody[0].phoneNumber = '123-456-7890'
        reqBody[1].lastName = 'Smith'

        // put request to update user
        let res = await request(app).put(`/users`)
            .send(reqBody)
            .expect(200);
        
        // get request to check first user updated phone number
        res = await request(app).get(`/users/${users[0]._id}`)
            .expect('Content-Type', /json/)
            .expect(200);
        
        actual = res.body.phoneNumber;
        assert.strictEqual(reqBody[0].phoneNumber, actual);

        // get request to check second user updated lastName
        res = await request(app).get(`/users/${users[1]._id}`)
            .expect('Content-Type', /json/)
            .expect(200);
        
        actual = res.body.lastName;
        assert.strictEqual(reqBody[1].lastName, actual);
    });

    it("Remove all users, 204 on DELETE - DELETE /users", async function(){
        // there are customers to delete
        await request(app).delete(`/users`)
            .expect(204);
        let res = await request(app).get(`/users`)
            .expect(200); // should get an empty array []
        assert.deepEqual([], res.body);
    });

});