const mongoose = require('mongoose');

const Note = mongoose.Schema({
    subject: {type: String, required: [true, 'The Subject cannot be empty!']},
    note: {type: String, required: [true, 'The Note cannot be empty!']},
    decision: {type: String},
    createAt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('notes',Note);