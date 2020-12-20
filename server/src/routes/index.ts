import express from 'express';
const router = express.Router();
const nounsRouter = require('./nouns');
const verbsRouter = require('./verbs');
const searchRouter = require('./search');

router.use('/nouns', nounsRouter);
router.use('/verbs', verbsRouter);
router.use('/search', searchRouter);

export default router;
