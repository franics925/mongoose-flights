var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    destination: {
        type: String,
        required: true,
        enum: ['DAL', 'AUS', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Ticket', ticketSchema);