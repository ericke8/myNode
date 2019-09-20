
const log4js = require("log4js");
const Sequelize = require("sequelize");

const name = process.env.DB_NAME || "postgres";
const username = process.env.DB_USER || "postgres";
const password = process.env.DB_PASSWORD || "password";
const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT || 5432;

const logger = log4js.getLogger();

const sequelize = new Sequelize(name, username, password, {
  host,
  port,
  dialect: "postgres",
  logging: false
});

const authenticateDB = () => {
  sequelize.authenticate().then(() => {
    logger.info("Successfully connected to database");
  }).catch((error) => {
    logger.error("Could not connect to database");
    log4js.shutdown(() => {
      throw error;
    });
  });
};

module.exports = {
  authenticateDB
};