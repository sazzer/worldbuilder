import {GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve(parentValue, _, { rootValue: { authentication } }) {
          return authentication.token;
        }
      }
    }
  })
});
