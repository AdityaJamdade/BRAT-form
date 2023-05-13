const express = require('express');
const router = express.Router();
const { getLogin, postLogin, createUser } = require('../controllers/loginController');

router
.route('/')
.get(getLogin)
.post(postLogin)

router
.route('/create')
.post(createUser)

module.exports = router