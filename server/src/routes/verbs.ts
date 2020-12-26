import express, { Request, Response } from 'express';
import setVerbsResponse from '../helpers/setVerbsResponse';
import Verb from '../interaces/verb';
const router = express.Router();
const Verb = require('../models/Verb');

router.get('/:level?/:qty?', (req: Request, res: Response) => {
  const level = req.params.level;
  const qty = req.params.qty;

  if (level === 'all') {
    Verb.findAll()
        .then((verbs: Verb[]) => {
          res.send(setVerbsResponse(verbs, qty)).json();
        })
        .catch((err: any) => res.send({ message: err }));
  } else {
    Verb.findAll({
      where: { level },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'deletedAt'],
      },
    })
      .then((verbs: Verb[]) => {
        res.send(setVerbsResponse(verbs, qty)).json();
      })
      .catch((err: any) => res.send({ message: err }));
  }
});

module.exports = router;
