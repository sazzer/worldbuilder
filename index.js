var express = require('express');
var graphqlHTTP = require('express-graphql');
var graphql = require('graphql');

var schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: graphql.GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema, 
    pretty: true,
    graphiql: true 
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
