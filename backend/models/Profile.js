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
        type: String,
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
        required: true,
        unique: true
    },

    // address details
    premises_name: {
        type: String,
        required: true
    },
    sub_locality: {
        type: String,
    },
    locality:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    district:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    permanent_address:{
        type: String,
        required: true
    },
    local_address:{
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Profile', ProfileSchema);