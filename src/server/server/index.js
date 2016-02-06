
import express from 'express';
import {authenticateRequest} from './authentication/middleware';
import {addRoutes as addWorldsRoutes} from './worlds';
import {addRoutes as addUsersRoutes} from './users';

export function createServer() {
    const app = express();

    app.use(authenticateRequest);

    addWorldsRoutes(app);
    addUsersRoutes(app);
    return app;
}
