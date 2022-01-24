const router = require('express').Router();
// require controller functions here
const { getAllGames } = require('../../controllers/game-controller');

// set up GET ALL at /api/games
router.route('/')
    .get(getAllGames);

    
module.exports = router;