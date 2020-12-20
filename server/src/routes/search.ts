import express, { Request, Response } from 'express';
import { Op } from 'sequelize';
import setNounsResponse from '../helpers/setNounsResponse';
import Noun from '../interaces/noun';
import Verb from '../interaces/verb';
const router = express.Router();
const Noun = require('../models/Noun');
const Verb = require('../models/Verb');
const Vocabulary = require('../models/Vocabulary');

router.get('/:input', (req: Request, res: Response) => {
    Noun.findAll({
        // where: {
        //     [Op.or]: [
        //         { noun: { [Op.like]: `%${req.params.input}` } },
        //         { plural: { [Op.like]: `%${req.params.input}` } },
        //         { translation: { [Op.like]: `%${req.params.input}` } },
        //         { verb: { [Op.like]: `%${req.params.input}` } },
        //         { participle: { [Op.like]: `%${req.params.input}` } },
        //     ],
        // },
        where: {
            [Op.or]: [
                { noun: req.params.input },
                { verb: req.params.input }
            ]

        },
    })
        .then((result: any) => {
            if (result) {
                res.send(result).json();
            } else {
                res.send({ status: "no result" })
            }
        })
        .catch((err: any) => res.send(err))
}
);

module.exports = router;
