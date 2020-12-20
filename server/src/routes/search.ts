import express, { Request, Response } from 'express';
import sequelize, { Op } from 'sequelize';
import Noun from '../interaces/noun';
import Verb from '../models/Verb';
const router = express.Router();
const Noun = require('../models/Noun');

router.get('/noun/:input', (req: Request, res: Response) => {
  const input = req.params.input.toLowerCase();
  Noun.findAll({
    where: {
      [Op.or]: [
        { noun: sequelize.where(sequelize.fn('lower', sequelize.col('noun')), 'like', `%${input}%`)},
        { plural: sequelize.where(sequelize.fn('lower', sequelize.col('plural')), 'like', `%${input}%`) },
        { translation: sequelize.where(sequelize.fn('lower', sequelize.col('translation')), 'like', `%${input}%`) }
      ],
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    }
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => res.send(err));
});

router.get('/verb/:input', (req: Request, res: Response) => {
  const input = req.params.input.toLowerCase();
  Verb.findAll({
    where: {
      [Op.or]: [
        { verb: sequelize.where(sequelize.fn('lower', sequelize.col('verb')), 'like', `%${input}%`)},
        { participle: sequelize.where(sequelize.fn('lower', sequelize.col('participle')), 'like', `%${input}%`) },
        { translation: sequelize.where(sequelize.fn('lower', sequelize.col('translation')), 'like', `%${input}%`) }
      ],
    },
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'deletedAt'],
    }
  })
    .then((result: any) => res.send(result))
    .catch((err: any) => res.send(err));
});

module.exports = router;
