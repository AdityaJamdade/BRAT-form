require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectToMongo = require('./config/db')
const PORT = process.env.PORT

connectToMongo()
const app = express()

app.use('/', (req, res) => {
    res.json({ msg: 'This is base endpoint!' });
})

app.listen(PORT, () => {
    console.log(`Server listning on port - ${PORT}`.underline.cyan);
})