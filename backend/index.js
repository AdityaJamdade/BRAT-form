require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectToMongo = require('./config/db')
const PORT = process.env.PORT

connectToMongo()
const app = express()


app.use(express.json())
app.use((req, res, next) => {
    req.headers['content-type'] = 'application/json';
    next();
});

app.use('/api/user/profile', require('./routes/profileRoutes'))


const multer = require('multer')
const Signature = require('./models/Signature.model')
const Storage = multer.diskStorage({
    destination: "uploads/",
    filename:  (req, file, callback) => {
        callback(null, Date.now+file.originalname);
    },
})
const upload = multer({
    storage:Storage
}).single('testImage')

app.post('/upload', (req, res)=> {
    upload(req, res, (err)=>{
        if(err){console.log(err)}
        else{
            const newImage  = new Signature({
                name: req.body.name,
                image:{
                    data: req.file.filename,
                    contentType: 'image/png'
                }
            })
            newImage
            .save()
            .then(()=>res.send('image uploaded'))
            .catch(err=>console.log(err))
        }

    })
})

app.use('/', (req, res) => {
    res.json({ msg: 'This is base endpoint!' });
})

app.listen(PORT, () => {
    console.log(`Server listning on port - ${PORT}`.underline.cyan);
})