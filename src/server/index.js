import express from 'express';
import graphqlHttp from 'express-graphql';
import {GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';

const schema = new GraphQLSchema({
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

const app = express();

app.use((req, res, next) => {
    req.authentication = {
        token: req.get('Authorization')
    };
    next();
});

app.use('/api/graphql', graphqlHttp(request => ({
    schema: schema,
    pretty: true,
    graphiql: true,
    rootValue: {
        authentication: request.authentication
    }
})));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
