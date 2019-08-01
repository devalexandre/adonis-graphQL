"use strict";

const Route = use("Route");
const GraphqlAdonis = use("ApolloServer");
const schema = require("../app/schema");

Route.route(
  "/graphql",
  ({ request, auth, response }) => {
    return GraphqlAdonis.graphql(
      {
        schema,
        context: { auth }
      },
      request,
      response
    );
  },
  ["GET", "POST"]
);

Route.get("/graphiql", ({ request, response }) => {
  return GraphqlAdonis.graphiql({ endpointURL: "/graphql" }, request, response);
});
