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

}, {timestamps: true})

module.exports = mongoose.model('Address', AddressSchema);