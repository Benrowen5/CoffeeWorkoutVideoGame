const router = require('express').Router();
// require controller functions here
const { getAllGames, createGame, getGameById } = require('../../controllers/game-controller');

// set up GET ALL at /api/games
router.route('/')
    .get(getAllGames)
    .post(createGame);

    router.route('/:gameId')
        .get(getGameById);

module.exports = router;