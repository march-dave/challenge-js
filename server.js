import express from 'express';
import apiRouter from './api';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const server = express();
server.use(morgan('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.port || 8080;

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
});


server.use('/api', apiRouter);
server.use(express.static('public'));
server.listen(port, () => {
    console.info(`Express listening on port: ${port}`);
});