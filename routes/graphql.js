var express = require("express");
var router = express.Router();


// graphQL apollo server
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");


const systemStatsSchema = require("../graphqlSchema/").systemStatsSchema;
console.log(systemStatsSchema.systemStatsSchema);

// The GraphQL schema in string form
const typeDefs = `
  type Query { stats: [Stat] }
  type Stat { data: String, stats: String }

`;

// The resolvers
const resolvers = {
  Query: { stats: () => systemStatsSchema }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

/* GET home page. */
router.all(
  "/",
  graphqlExpress(req => {
    return {
      schema,
      context: {
        value: "sdfsdfsdf"
      }
    };
  })
);

module.exports = router;
