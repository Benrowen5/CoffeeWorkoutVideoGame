const { Game } = require('../models');

const gameController = {
    // get all games
    getAllGames(req, res) {
        Game.find({})
            .select('-__V')
            .sort({ _id: -1 })
            .then(dbGameData => res.json(dbGameData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    }
};

module.exports = gameController;