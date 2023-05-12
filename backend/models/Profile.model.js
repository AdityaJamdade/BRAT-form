const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum:['M','F','O']
    },
    mobNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    // address details
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country: {
        type: String,
        required:true
    },
    pincode:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema);