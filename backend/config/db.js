const mongoose = require('mongoose')
require('dotenv').config()

const connectToMongo = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(conn.connection.host)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;