const request = require("supertest");
const express = require("express");
const cors = require("cors");
const api = require("../src/api/index");
const db = require("../src/config/config");

// db.sync().catch((e) => console.error(e.message));
// db.authenticate().catch((e) => {
//   throw Error("Database connection error");
// });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", api);
// app.listen({ port: 5000 });

describe("Role", () => {
  it("should add new role", async () => {
    const response = await request(app)
      .post("/api/roles")
      .send({ name: "managing partner" });
    expect(response.statusCode).toEqual(200);
  });
});
