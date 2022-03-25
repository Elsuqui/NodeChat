const { Schema } = require('mongoose');

const chatSchema = new Schema({
    name: String,
    description: String,
    photo: String,
    type: String,
    created_at: { type: Date, default: Date.now } 
});

module.exports = chatSchema;