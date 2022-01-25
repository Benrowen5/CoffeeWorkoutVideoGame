const router = require('express').Router();
// require controller functions here
const { getAllGames, createGame } = require('../../controllers/game-controller');

// set up GET ALL at /api/games
router.route('/')
    .get(getAllGames)
    .post(createGame);

    
module.exports = router;