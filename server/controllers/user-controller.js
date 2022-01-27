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
    },
    loginUser({ body }, res) {
        
        User.findOne({ username: body.username })
            .then(dbUser => {
                // check for valid username
               
                if(!dbUser) {
                    return res.status(400).json({ message: 'Username not found.'});
                }
                // check for correct password
                const correctPw = dbUser.isCorrectPassword(body.password);
                if(!correctPw) {
                    return res.status(400).json({ message: 'Incorrect password.'});
                }
                
                const token = signToken(dbUser);
                res.json({ token, dbUser });
            })
            .catch(err => res.status(400).json(err));
    }
};



module.exports = userController;