const mongo = require('../mongo');
const User = require('../models/user');
const { ObjectID } = require('mongodb');

describe("CRUD testing DB models", () => {
    const uid = ObjectID();
    const addressId = ObjectID();

    test("Add a user to mdb and read that user", async () => {
        const user = new User({
            _id: uid,
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
        // save on a model inserts a new document
        // save on a document updates the document
        await user.save();

        const actual = await User.findById(uid);
        console.log(actual);
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