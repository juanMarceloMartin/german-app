import express from 'express';
const router = express.Router();
const nounsRouter = require('./nouns');
const verbsRouter = require('./verbs');

router.use('/nouns', nounsRouter);
router.use('/verbs', verbsRouter);

export default router;
