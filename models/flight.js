var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    destination: {
        type: String,
        required: true,
        enum: ['DAL', 'AUS', 'LAX', 'SEA', 'SFO']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});



var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Alaska']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return Date.now() + (3.1536*(10^10)) //add one year in milliseconds to current time
        }
    },
    airport: {
        type: String,
        required: true,
        enum: ['DAL', 'AUS', 'LAX', 'SEA', 'SFO'],
        default: 'SEA'
    },
    flightPlan: {
        type: Array
    },
    destination: [destinationSchema]
}, {
  timestamps: true
});


// Compile schema into model and export!
module.exports = mongoose.model('Flight', flightSchema);