"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require('dotenv').config();
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = __importDefault(require("./routes/index"));
const app = express_1.default();
const db = require('../config/database.js');
db.authenticate()
    .then(() => console.log('db ok!'))
    .catch((err) => console.log(err));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});
app.get('/', (req, res) => res.send('ok'));
app.use('/', index_1.default);
const PORT = process.env.PORT || 4201;
app.listen(PORT, () => console.log('server running'));
