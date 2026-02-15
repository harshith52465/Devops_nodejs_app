const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Pipeline is Working!");
});

test("GET / should return success message", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
});

