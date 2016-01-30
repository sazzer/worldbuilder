import express from 'express';
import graphqlHttp from 'express-graphql';
import {schema} from './graphql';
import {authenticateRequest} from './authentication/middleware';

export function createServer() {
    const app = express();

    app.use(authenticateRequest);

    app.use('/api/graphql', graphqlHttp(request => ({
        schema: schema,
        pretty: true,
        graphiql: true,
        rootValue: {
            authentication: request.authentication
        }
    })));

    return app;
}
