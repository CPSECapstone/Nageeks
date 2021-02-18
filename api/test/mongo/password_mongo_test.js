const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert = chai.assert;

const mongoose = require('../../mongoose_connection');
const Encrypt = require('../../models/encrypt');
const Password = require('../../models/password');
const { ObjectID } = require('mongodb');

const username = "Username";
const password = "Password";

async function createPassword() {
    const encrypt = new Encrypt(password);

    const pword = new Password({
        _id: ObjectID(),
        user_id: ObjectID(),
        hashCode: encrypt.getHash(),
    });
    await pword.save();
    return pword;
}

describe("CRUD testing password model", function() {
    let pword = null;
    before(async function() {
        pword = createPassword();
    });

    beforeEach(async function() {
        try {
            await Password.deleteMany({});
            pword = await createPassword();
        }
        catch(err) {
            console.log(err.message);
        }
    });

    after(async function() {
        try {
            await Password.deleteMany({});
        }
        catch(err) {
            console.log(err.message);
        }
    });

    it("Successfully add password", async function() {
        assert.isFalse(pword.isNew, "Instance of password model is not new after saving");
    });

    it("Find password by id", async function() {
        const actual = await Password.findById(pword._id);
        assert.equal(actual._id.toString(), pword._id.toString(), "");
    });

    it("Find password by user id", async function() {
        const actual = await Password.find({ user_id: pword.user_id });
        assert.equal(actual[0]._id.toString(), pword._id.toString(), "");
    });

    it("Update password", async function() {
        let newpass = new Encrypt("newpassword");
        const expected = newpass.getHash();

        const doc = await Password.findById(pword._id);
        doc.hashCode = expected;
        await doc.save();

        const actual = await Password.findById(pword._id);
        assert.equal(actual.hashCode, expected, "The found document should be the one we just saved");
    });

    it("Successfully delete password", async function() {
        const actual = await Password.findByIdAndDelete(pword._id);
        assert.equal(actual._id.toString(), pword._id.toString(), "Id of deleted user should match desired user id");
    });

    it("Add password with duplicate user ID", async function() {
        let newpass = new Encrypt("newpassword");
        const newhash = newpass.getHash();

        const invalidPass = new Password({
            _id: ObjectID(),
            user_id: pword.user_id,
            hashCode: newhash,
        });

        try {
            await invalidPass.save();

            assert.fail("Accepts duplicate user IDs");
        }
        catch(err) {
            assert.exists(err, "Does not accept duplicate user IDs");
        }
    });

});