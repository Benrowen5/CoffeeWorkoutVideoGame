const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const userRoutes = require('./user-routes');
const gameRoutes = require('./game-routes');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);
router.use('/comments', commentRoutes);

module.exports = router;

