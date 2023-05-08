const express = require('express')
const { getProfiles, addProfile, updateProfile } = require('../controllers/profileControllers')
const router = express.Router()

router
.route('/')
.get(getProfiles)
.post(addProfile)
.put(updateProfile)

module.exports = router