var express = require('express');
var router = express.Router();

const data = {
  title: 'Express' ,
  detail : 'test view',
  firstName : 'Pakin',
  lastName : 'Peeratanawanit',
  age : '36'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data)
});

module.exports = router;
