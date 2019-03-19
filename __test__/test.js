import request from "supertest";
import app, { appServer } from "../src/index.js";

describe("route tests", () => {
    afterAll(() => {
        appServer.close();
    });

    it("get home route GET /", done => {
        return request(app)
            .get("/api")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual({
                    version: "0.3.0"
                });
                done();
            });
    });

    it("get facets route GET /", done => {
        return request(app)
            .get("/api/facets")
            .then(response => {
                expect(response.statusCode).toBe(200);
                expect(response.body).toEqual([]);
                done();
            });
    });
});