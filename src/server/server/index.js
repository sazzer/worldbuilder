import express from 'express';
import {authenticateRequest} from './authentication/middleware';

export function createServer() {
    const app = express();

    app.use(authenticateRequest);

    return app;
}
