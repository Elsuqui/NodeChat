
const mongoose = require('mongoose');

module.exports = {
    Chat: mongoose.model('Chat', require('./chat')),
    User: mongoose.model('User', require('./user')),
};