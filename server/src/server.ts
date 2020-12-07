import express, { Application, Request, Response, NextFunction } from 'express';
require('dotenv').config();
import bodyParser from 'body-parser';
import api from './routes/index';

const app: Application = express();

const db = require('../config/database.js');

db.authenticate()
  .then(() => console.log('db ok!'))
  .catch((err: Error) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();
  }
});

app.get('/', (req: Request, res: Response) => res.send('ok'));

app.use('/', api);

const PORT = process.env.PORT || 4201;

app.listen(PORT, () => console.log('server running'));
