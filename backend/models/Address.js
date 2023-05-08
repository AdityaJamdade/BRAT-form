const mongoose = require('mongoose')

const AddressSchema = new mongoose.Schema({
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

}, {timestamps: true})

module.exports = mongoose.model('Address', AddressSchema);