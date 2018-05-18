var express = require("express");
var router = express.Router();

// graphQL apollo server
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

//import schema with all data
const systemStatsSchema = require("../graphqlSchema/").systemStatsSchema;



// MOC

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];



// The GraphQL schema in string form
const typeDefs = `
  type Query { systemStats: [Stat], books: [Book]  }
  type Stat { data: String, stats: String, aditionalInfo : String }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { systemStats: () => systemStatsSchema, books: () => books }
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
      schema
    };
  })
);

module.exports = router;
