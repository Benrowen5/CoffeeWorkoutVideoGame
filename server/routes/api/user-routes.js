const router = require('express').Router();
const { getAllUsers, getUserById, addUser } = require('../../controllers/user-controller');

// GET all users and post new users
router.route('/')
    .get(getAllUsers)
    .post(addUser);


    router.route('/:id')
        .get(getUserById);



module.exports = router;