const router = require('express').Router();
const { getAllUsers, getUserById, addUser, loginUser, addFavorite, deleteFavorite } = require('../../controllers/user-controller');

// GET all users and post new users
router.route('/')
    .get(getAllUsers)
    .post(addUser);


router.route('/:id')
    .get(getUserById);

router.route('/login')
    .post(loginUser);

// post and delete favorited games at (api/users/:userId/favorites/:gameId')
router.route('/:userId/favorites/:gameId')
    .post(addFavorite)
    .delete(deleteFavorite)

module.exports = router;