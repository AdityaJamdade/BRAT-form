const express = require('express')
const { getProfiles, addProfile, updateProfile, deleteAllProfiles } = require('../controllers/profileControllers')
const router = express.Router()

router
.route('/')
.get(getProfiles)
.post(addProfile)
.put(updateProfile)
.delete(deleteAllProfiles)

module.exports = router