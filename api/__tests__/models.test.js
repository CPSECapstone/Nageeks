const mongo = require('../mongo');
const User = require('../models/user');
const Address = require('../models/address');
const { ObjectID } = require('mongodb');

describe("CRUD testing DB models", () => {
    test("Add a user to mdb", async () => {
        //expect.assertions(1);
        const expected = new User({
            _id: ObjectID(),
            firstName: "Deku",
            lastName: "Harms",
            dob: new Date('1998-08-12T06:15:30.000+00:00'),
            addressId: ObjectID(),
            phoneNumber: "530-391-9054"
        });
        // save on a model inserts a new document
        // save on a document updates the document
        actual = await expected.save();
        expect(actual).toEqual(expected);
    });

    test("Read existing user in mdb", async () => {
        const id = ObjectID("5f9e46edf567cc07652abdb2");
        const expected = "Kyle Harms";
        const query = User.findById(id);
        const doc = await query.exec();
        const actual = doc.getName();
        expect(actual).toEqual(expected);
    });

    afterAll(async () => {
        await mongo.close();
    });
});