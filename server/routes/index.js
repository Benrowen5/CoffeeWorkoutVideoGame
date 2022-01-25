const router = require('express').Router();
const htmlRoutes = require('./html/html-routes');
// import all API routes from /api/index
const apiRoutes = require('./api');

// add /api prefix to all of the api routes imported from api directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
