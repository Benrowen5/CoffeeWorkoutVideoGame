const router = require('express').Router();
const { getAllUsers, getUserById, addUser, loginUser } = require('../../controllers/user-controller');

// GET all users and post new users
router.route('/')
    .get(getAllUsers)
    .post(addUser);


router.route('/:id')
    .get(getUserById);

router.route('/login')
    .post(loginUser);


module.exports = router;