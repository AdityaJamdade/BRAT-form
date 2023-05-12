const express = require('express')
const { getProfiles, addProfile, updateProfile, deleteProfile, deleteAllProfiles } = require('../controllers/profileControllers')
const router = express.Router()

router
.route('/')
.get(getProfiles)
.post(addProfile)
.put(updateProfile)
.delete(deleteProfile)

router
.route('/all')
.delete(deleteAllProfiles)

module.exports = router