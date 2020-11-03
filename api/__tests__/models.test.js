const mongo = require('../mongo');
const User = require('../models/user');
const Address = require('../models/address');
const { ObjectID } = require('mongodb');

describe("CRUD testing DB models", () => {
    const uid = ObjectID();
    const addressId = ObjectID();

    test("Add a user to mdb", async () => {
        const expected = new User({
            _id: uid,
            schemaVersion: 1.0,
            firstName: "Deku",
            lastName: "Harms",
            dob: new Date('1990-08-15T06:15:30.000+00:00'),
            addressId: addressId,
            phoneNumber: "530-391-9054"
        });
        // save on a model inserts a new document
        // save on a document updates the document
        actual = await expected.save();
        expect(actual).toEqual(expected);
    });

    test("Read existing user in mdb", async () => {
        const expected = "Deku Harms";
        const doc = await User.findById(uid);
        const actual = doc.getName();
        expect(actual).toEqual(expected);
    });

    test("Update existing user in mdb", async () => {
        // change the users first name
        // was added as Deku, change to Kyle
        const expected = "Kyle Harms";

        // get doc from db
        let doc = await User.findById(uid);

        // update
        doc.firstName = "Kyle";
        await doc.save();

        // re-query to make sure update succeeded
        doc = await User.findById(uid);

        const actual = doc.getName();
        expect(actual).toEqual(expected);
    });

    test("Delete existing user in mdb", async () => {
        expected = uid;
        const doc = await User.findByIdAndDelete(uid);
        const actual = doc._id;
        expect(actual).toEqual(expected);
    });

    afterAll(async () => {
        await mongo.close();
    });
});