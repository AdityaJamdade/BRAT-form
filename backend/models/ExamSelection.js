const mongoose = require('mongoose')

const ExamSelectionSchema = new mongoose.Schema({
    exam_name: {
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
},  
    { timestamps: true })


module.exports = mongoose.model('ExamSelection', ExamSelectionSchema);