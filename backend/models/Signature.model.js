const mongoose = require('mongoose')

const SignatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
}, { timestamps: true })

module.exports = mongoose.model('Signature', SignatureSchema)