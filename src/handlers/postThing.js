const log4js = require("log4js");

const logger = log4js.getLogger();

const postThing = (req, res) => {
  const requestBody = req.body;
  logger.info(`Post request made with body ${JSON.stringify(requestBody)}`);
  res.json(requestBody);
};

module.exports = {
  postThing
};