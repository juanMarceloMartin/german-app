import express, { Request, Response } from 'express';
import Noun from '../interaces/noun';
import setNounsResponse from '../helpers/setNounsResponse';
const router = express.Router();
const Noun = require('../models/Noun');

router.get('/:level/:qty', (req: Request, res: Response) => {
  const level = req.params.level;
  const qty = req.params.qty;

  if (level === 'all') {
    Noun.findAll()
        .then((nouns: Noun[]) => {
          res.send(setNounsResponse(nouns, qty)).json();
        })
        .catch((err: any) => res.send({ message: err }));
  } else {
    Noun.findAll({
      where: { level },
    })
      .then((nouns: Noun[]) => {
        res.send(setNounsResponse(nouns, qty)).json();
      })
      .catch((err: any) => res.send({ message: err }));
  }
});

module.exports = router;
