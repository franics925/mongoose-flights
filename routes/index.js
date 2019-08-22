var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/flights');
});

module.exports = router;


// var express = require('express');
// var router = express.Router();

// router.get('/', function(req, res, next) {
//   res.redirect('/flights');
// });

// module.exports = router;