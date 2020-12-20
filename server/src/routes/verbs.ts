import express, { Request, Response } from 'express';
import setVerbsResponse from '../helpers/setVerbsResponse';
import Verb from '../interaces/verb';
const router = express.Router();
const Verb = require('../models/Verb');

router.get('/', (req: Request, res: Response) => {
  Verb.findAll({
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    },
  })
    .then((verbs: Verb[]) => res.send(setVerbsResponse(verbs)).json())
    .catch((err: any) => res.send(err));
});

router.get('/:level?/:qty?', (req: Request, res: Response) => {
  const level = req.params.level;
  const qty = parseInt(req.params.qty);

  if (level === 'all') {
    if (!qty) {
      Verb.findAll()
        .then((Verbs: Verb[]) => {
          res.send(setVerbsResponse(Verbs)).json();
        })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Verb.findAll()
        .then((Verbs: Verb[]) => {
          res.send(setVerbsResponse(Verbs, qty)).json();
        })
        .catch((err: any) => res.send({ message: err }));
    }
  } else {
    if (!qty) {
      Verb.findAll({
        where: { level },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'deletedAt'],
        },
      })
        .then((Verbs: Verb[]) => {
          res.send(setVerbsResponse(Verbs)).json();
        })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Verb.findAll({
        where: { level: req.params.level },
      })
        .then((Verbs: Verb[]) => {
          res.send(setVerbsResponse(Verbs, qty)).json();
        })
        .catch((err: any) => res.send({ message: err }));
    }
  }
});

module.exports = router;
