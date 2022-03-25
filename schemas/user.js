const { Schema } = require('mongoose');

const userSchema = new Schema({
    name: String,
    last_name: String,
    photo: String,
    type: String,
    created_at: { type: Date, default: Date.now } 
});

module.exports = userSchema;