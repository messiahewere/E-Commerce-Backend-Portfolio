const mongoose = require('mongoose');
const {Schema} = mongoose;

const authSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['user', 'admin'], default: 'user'}
});

module.exports = mongoose.model('Auth', authSchema);