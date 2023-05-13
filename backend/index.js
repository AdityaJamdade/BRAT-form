require('dotenv').config();
const express = require('express');
const colors = require('colors');
const cors = require('cors')
const connectToMongo = require('./config/db')
const PORT = process.env.PORT

connectToMongo()
const app = express()

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
    req.headers['content-type'] = 'application/json';
    next();
});

app.use('/api/user/profile', require('./routes/profileRoutes'))
app.use('/api/user/login', require('./routes/loginRoutes'))

app.use('/', (req, res) => {
    res.json({ msg: 'This is base endpoint!' });
})

app.listen(PORT, () => {
    console.log(`Server listning on port - ${PORT}`.underline.cyan);
})