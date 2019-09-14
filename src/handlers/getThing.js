const log4js = require("log4js");

const logger = log4js.getLogger();

const getThing = (req, res) => {
  const requestBody = req.body;
  logger.info("Get request made");
  res.sendStatus(200);
};

module.exports = {
  getThing
};