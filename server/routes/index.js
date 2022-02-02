const router = require('express').Router();
// import all API routes from /api/index
const apiRoutes = require('./api');

// add /api prefix to all of the api routes imported from api directory
router.use('/api', apiRoutes);

module.exports = router;
