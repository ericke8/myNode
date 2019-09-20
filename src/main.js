
require("dotenv").config();

const express = require("express");
const log4js = require("log4js");

const { postThing, getThing } = require("./handlers");
const { configureLogging } = require("./config/logging");
const { authenticateDB } = require("./database");

const logger = log4js.getLogger();

const PORT = process.env.APP_PORT || 5861;


configureLogging();
authenticateDB();

const app = express();

app.use(express.json());

app.post("/api/v1/post", postThing);

app.get("/api/v1/get", getThing);


app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});