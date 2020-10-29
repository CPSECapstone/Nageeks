const request = require("supertest");
const app = require("../api/app");

describe("GET / ", () => {
    test("Respond with an array of customers", async () => {
        const expected = [{"_id":"5f97cbaa5da6005906710cb9","username":"John"},{"_id":"5f97cbc75da6005906710cba","username":"Jane"}];
        const response = await request(app).get("/customers");
        expect(response.body).toEqual(expected);
        expect(response.statusCode).toBe(200);
    });
});