
require("dotenv").config();

const express = require("express");

const PORT = process.env.APP_PORT || 5861;

const app = express();

app.use(express.json());

app.post("/api/v1/create", (req, res) => {
  console.log("app posted to create endpoint");
  res.json(req.body);
});
app.get("/api/v1/get", (req, res) => {
  console.log("app get to get endpoint");
  res.json("got");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

console.log(process.env.DB_PORT);