const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 characters long']
    },
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);