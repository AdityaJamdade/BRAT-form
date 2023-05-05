const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    father_name: {
        type: String,
        required: true
    },
    mother_name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum:['M','F','O']
    },
    type_of_identification: {
        type: String,
        required: true,
        enum:['PAN','AADHAR'],
    },
    identification_number: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    email_id: {
        type: String,
        required: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema);