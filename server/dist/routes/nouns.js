"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Noun = require('../models/Noun');
router.get('/', (req, res) => {
    Noun.findAll()
        .then((nouns) => res.send({ data: nouns }).json())
        .catch((err) => res.send({ message: err }));
});
router.get('/:id', (req, res) => {
    Noun.findAll({
        where: { id: req.params.id },
    })
        .then((noun) => {
        if (noun.length) {
            res.send(noun);
        }
        else {
            res.send('invalid id');
        }
    })
        .catch((err) => res.send({ message: err }));
});
module.exports = router;
