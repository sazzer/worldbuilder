import express from 'express';
import {authenticateRequest} from './authentication/middleware';
import {addRoutes as addWorldRoutes} from './worlds';

export function createServer() {
    const app = express();

    app.use(authenticateRequest);

    addWorldRoutes(app);
    return app;
}
