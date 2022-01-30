const { Game } = require('../models');

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

    // Get one game 
    getGameById({ params }, res) {
        Game.findOne({ _id: params.gameId })
            .populate({path: 'comments', select: '-__V'})
            .then(dbGameData => {
                if(!dbGameData) {
                    res.status(404).json({ message: 'No game found with this ID.'});
                    return;
                }
                res.json(dbGameData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // create new game
    createGame({body}, res) {
        Game.create(body)
            .then(dbGameData => res.json(dbGameData))
            .catch(err => res.json(err));
    }
};

module.exports = gameController;