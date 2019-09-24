const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  getThing(id: ID!): Thing!
}

type Things {
  id: ID!
  description: String!
  createdAt: String!
  updatedAt: String!
}
`;

module.exports = {
  typeDefs
};