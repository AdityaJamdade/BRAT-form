const express = require('express')
const { getAddress, addAddress, updateAddress } = require('../controllers/addressController')
const router = express.Router()

router
.route('/')
.get(getAddress)
.post(addAddress)
.put(updateAddress)

module.exports = router