import express from 'express';
import graphqlHttp from 'express-graphql';
import {schema} from './graphql';

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
