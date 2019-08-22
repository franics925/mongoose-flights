var express = require('express');
var router = express.Router();
var flightsCtrl = require('../controllers/flights');
var ticketsCtrl = require('../controllers/tickets');


// router.get('/new', ticketsCtrl.new);
router.get('/', flightsCtrl.index);
/* GET /flights/new */
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.show);
router.post('/', flightsCtrl.create);


module.exports = router;
