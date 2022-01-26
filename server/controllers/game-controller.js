const { Game } = require('../models');
const { populate } = require('../models/Comment');
const gameController = {
    // get all games
    getAllGames(req, res) {
        Game.find({})
            .populate('comments')
            .select('-__V')
            .sort({ _id: -1 })
            .then(dbGameData => res.json(dbGameData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },

    // Get an one game 
    getGameById({params}, res) {
        Game.findOne({ _id: params.GameId })
            .then(dbGameData => res.json(dbGameData))
            .catch(err => res.status(400).json(err));
    },

    createGame({body}, res) {
        Game.create(body)
            .then(dbGameData => res.json(dbGameData))
            .catch(err => res.json(err));
    }
};

module.exports = gameController;