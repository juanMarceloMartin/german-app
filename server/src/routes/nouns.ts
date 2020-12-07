import express, { Request, Response } from 'express';
import Noun from '../interaces/noun';
const router = express.Router();
const Noun = require('../models/Noun');

router.get('/', (req: Request, res: Response) => {
  Noun.findAll()
    .then((nouns: Noun[]) => res.send({ data: nouns }).json())
    .catch((err: any) => res.send({ message: err }));
});

router.get('/:id', (req: Request, res: Response) => {
  Noun.findAll({
    where: { id: req.params.id },
  })
    .then((noun: Noun[]) => {
      if (noun.length) {
        res.send(noun);
      } else {
        res.send('invalid id');
      }
    })
    .catch((err: any) => res.send({ message: err }));
});

module.exports = router;
