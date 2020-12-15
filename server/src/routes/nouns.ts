import express, { Request, Response } from 'express';
import Noun from '../interaces/noun';
import NounResponse from "../interaces/noun-response";
const router = express.Router();
const Noun = require('../models/Noun');

router.get('/', (req: Request, res: Response) => {
  Noun.findAll()
    .then((nouns: Noun[]) => {
      let result: any = [];
      nouns.forEach((data) => {
        let entry: NounResponse = {
          noun: data.noun,
          article: data.article,
          plural: data.plural,
          translation: data.translation
        };
        result.push(entry);
      });
      res.send(result).json();
    })
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

router.get('/:level?/:qty?', (req: Request, res: Response) => {
  const level = req.params.level;
  const qty = parseInt(req.params.qty);

  if (level === 'all') {
    if (!qty) {
      Noun.findAll()
        .then((noun: Noun[]) => {
          res.send(noun);
        })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Noun.findAll()
        .then((noun: Noun[]) => {
          let result = [];
          for (let i = 0; i < qty; i++) {
            const index = Math.floor(Math.random() * noun.length);
            result.push(noun[index]);
          }
          res.send(result);
        })
        .catch((err: any) => res.send({ message: err }));
    }
  } else {
    if (!qty) {
      Noun.findAll({
        where: { level: req.params.level },
      })
        .then((noun: Noun[]) => {
          res.send(noun);
        })
        .catch((err: any) => res.send({ message: err }));
    } else {
      Noun.findAll({
        where: { level: req.params.level },
      })
        .then((noun: Noun[]) => {
          let result = [];
          for (let i = 0; i < qty; i++) {
            const index = Math.floor(Math.random() * noun.length);
            result.push(noun[index]);
          }
          res.send(result);
        })
        .catch((err: any) => res.send({ message: err }));
    }
  }
});

module.exports = router;
