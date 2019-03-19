import request from "supertest";
import app from "../src/index.js";

describe("route tests", () => {
    test("get home route GET /", done => {
        request(app)
            .get("/api")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual({
                    version: "0.3.0"
                });
                done();
            });
    });

    test("get home route GET /", done => {
        request(app)
            .get("/api/facets")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual([]);
                done();
            });
    });
});