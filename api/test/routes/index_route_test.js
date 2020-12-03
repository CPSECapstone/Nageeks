const request = require("supertest");
const { assert } = require("chai");
const app = require("../../app");

describe("Testing / route", function(){
    it("Test GET welcome page - GET /", async function(){
        const expected = "Cloud Haven Express Backend API";
        const res = await request(app).get('/').expect(200);
        const actual = res.body;
        assert(expected, actual);
    });
});