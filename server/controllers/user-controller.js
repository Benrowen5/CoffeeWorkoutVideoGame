const { User, Game, Comment } = require('../models');
const { populate } = require('../models/User');

const userController = {
    // Post new user
    addUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'comments',
                select: '-__V'
            })
            .select('-__V')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    // get single user
    getUserById({params}, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    }
};



module.exports = userController;