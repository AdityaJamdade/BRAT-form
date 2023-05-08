const mongoose = require('mongoose')

const LoginDetailsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be atleast 8 characters long']
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
},
    { timestamps: true })
