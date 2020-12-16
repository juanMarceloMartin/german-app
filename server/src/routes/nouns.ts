import express, { Request, Response } from 'express';
import Noun from '../interaces/noun';
import setNounsResponse from '../helpers/setNounsResponse';
const router = express.Router();
const Noun = require('../models/Noun');

router.get('/', (req: Request, res: Response) => {
  Noun.findAll()
    .then((nouns: Noun[]) => { res.send(setNounsResponse(nouns)).json() })
    .catch((err: any) => res.send({ message: err }));
});

router.get('/:level?/:qty?', (req: Request, res: Response) => {
  const level = req.params.level;
  const qty = parseInt(req.params.qty);

  if (level === 'all') {
    if (!qty) {
      Noun.findAll()
        .then((nouns: Noun[]) => { res.send(setNounsResponse(nouns)).json() })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Noun.findAll()
        .then((nouns: Noun[]) => { res.send(setNounsResponse(nouns, qty)).json() })
        .catch((err: any) => res.send({ message: err }));
    }
  } else {
    if (!qty) {
      Noun.findAll({
        where: { level: req.params.level },
      })
        .then((nouns: Noun[]) => { res.send(setNounsResponse(nouns)).json() })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Noun.findAll({
        where: { level: req.params.level },
      })
        .then((nouns: Noun[]) => { res.send(setNounsResponse(nouns, qty)).json() })
        .catch((err: any) => res.send({ message: err }));
    }
  }
});

module.exports = router;
