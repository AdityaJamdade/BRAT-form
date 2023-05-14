const express = require('express')
const { getProfiles, getAllProfiles, addProfile, updateProfile, deleteProfile, deleteAllProfiles } = require('../controllers/profileControllers')
const router = express.Router()

router
.route('/')
.get(getProfiles)
.post(addProfile)
.put(updateProfile)
.delete(deleteProfile)

router
.route('/all')
.get(getAllProfiles)
.delete(deleteAllProfiles)

module.exports = router