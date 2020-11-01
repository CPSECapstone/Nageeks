const mongo = require('../mongo');
const userModel = require('../models/user');
const addressModel = require('../models/address');
const { ObjectID } = require('mongodb');

describe("CRUD testing DB models", () => {
    test("Read existing user in mdb", async () => {
        const id = ObjectID("5f9e46edf567cc07652abdb2");
        const expected = "Kyle Harms";
        const query = userModel.findById(id);
        const doc = await query.exec();
        const actual = doc.getName();
        expect(actual).toEqual(expected);
    });

    afterAll(async () => {
        await mongo.close();
    });
});