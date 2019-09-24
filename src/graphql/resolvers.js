const { Thing } = require("../database");

const getThing = async (_, { id }) => {
  return await Thing.findAll({
    where: {
      id
    },
    raw: true
  });
};

const resolvers = {
  Query: {
    getThing,
  }
};

module.exports = {
  resolvers
};