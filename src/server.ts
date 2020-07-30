import express from "express";

import { graphqlHTTP } from "express-graphql";

const server: express.Application = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema: null,
    graphiql: true,
  })
);

server.listen(5000, () => {
  console.log("server listening");
});
