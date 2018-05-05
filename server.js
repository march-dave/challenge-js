import express from 'express';
import apiRouter from 'api';

const server = express();
const port = process.env.port || 8080;

server.use('/', apiRouter);

server.listen(port, () => {
    console.info(`Note ${port}`);
});