var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.post('/tickets/:id/tickets', ticketsCtrl.newTicket);

module.exports = router;