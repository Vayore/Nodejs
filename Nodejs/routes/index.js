var express = require('express');
var router = express.Router();
const sql = require('../database')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express server' });
});

// test connection
router.get('/connect', function(req, res, next) {
  sql.database();
  res.render('index', { title: 'Server Started' });
});

module.exports = router;
