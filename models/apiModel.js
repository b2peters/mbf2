'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var JournalSchema = new Schema({
    title:{
        type: String,
        required: 'Please title this entry'
    },
    Created_on : {
        type: Date,
        default: Date.now()
    },
    entry: {
        type: String,
        required: 'Please record your entry.'
    }
});

module.exports = mongoose.model('Journals', JournalSchema);