var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    seat: {
        type: String
    },
    price: {
        type: Number,
        min: 0,
        default: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: "flight",
        required: true
    }

}, {
    timestamps: true
});



module.exports = mongoose.model('Ticket', ticketSchema);