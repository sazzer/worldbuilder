import express from 'express';
import graphqlHttp from 'express-graphql';
import {GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

const app = express();

app.use('/api/graphql', graphqlHttp({
    schema: schema,
    pretty: true,
    graphiql: true
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
