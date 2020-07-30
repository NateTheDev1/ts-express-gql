import express from "express";

import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const server: express.Application = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

server.listen(5000, () => {
  console.log("server listening");
});
