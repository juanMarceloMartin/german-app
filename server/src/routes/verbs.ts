import express, { Request, Response } from 'express';
import Verb from '../interaces/verb';
const router = express.Router();
const Verb = require('../models/Verb');

router.get('/', (req: Request, res: Response) => {
    Verb.findAll({
        orderBy: [['id', 'ASC']],
    })
        .then((verbs: Verb[]) => res.send(verbs))
        .catch((err: any) => res.send(err));
});


module.exports = router;
