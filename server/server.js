// const { authMiddleware } = require('./utils/auth');
const express = require('express');
const path = require('path');

// connection
const db = require('./config/connection');

const app = express();
const PORT = 80;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes'));

// serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
});