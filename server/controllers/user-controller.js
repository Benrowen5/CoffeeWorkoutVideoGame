const res = require('express/lib/response');
const { User, Game, Comment } = require('../models');
const { populate } = require('../models/User');
const { signToken } = require('../utils/auth');

const userController = {
    // Post new user
    addUser({ body }, res) {
        User.create(body)
            .then(dbUserData => {
                const token = signToken(dbUserData);
                res.json({token, dbUserData});
            })
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
            .populate({
                path: 'favorites',
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
            .populate({
                path: 'comments',
                select: '-__V'
            })
            .populate({
                path: 'favorites',
                select: '-__V'
            })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },
    async loginUser({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
        return res.status(400).json({ message: "Can't find this user" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
        return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    addFavorite({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { favorites: params.gameId } },
            { new: true }
        )
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'No game found with this ID.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.status(400).json(err));
    },
    deleteFavorite({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { favorites: params.gameId } },
            { new: true }
        )
            .then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'No game found with this ID.'});
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    }
};



module.exports = userController;