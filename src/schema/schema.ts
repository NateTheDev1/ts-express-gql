import graphql from "graphql";

const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const userType = new GraphQLObjectType({
  name: "user",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});
