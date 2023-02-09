const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isReplied: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('contacts', contact, 'contacts');
