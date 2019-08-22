var Ticket = require('../models/ticket');


module.exports = {
    newTicket
}

function newTicket(req, res) {
    var ticket = new Ticket(req.body);
    ticket.save(function(err, ticket) {
      if (err) return res.render('flights/ticket');
      console.log(ticket);
    });
  }