const Profile = require('../models/Profile.model')

const addProfile = async (req, res) => {
    try {
        const data = await Profile.create(req.body);
        res.status(200).json({ success: true, data })
    } catch (err) {
        console.log(err)
        res.json({ success: false, err: err.message })
    }
}

const updateProfile = async (req, res) => {
    try {
        const data = await Profile.updateOne({ email: req.body.email }, req.body);
        res.status(200).json({ success: true, data })
    } catch (err) {
        console.log(err)
    }
}

const getProfile = async (req, res) => {
    try {
        console.log(req.query.email)
        const data = await Profile.find({email: req.query.email});
        res.status(200).json({ success: true, data })
    } catch (error) {
        console.log(error)
    }
}

const getAllProfiles = async (req, res) => {
    try {
        const data = await Profile.find({});
        res.status(200).json({ success: true, data })
    } catch (error) {   
        console.log(error)
    }
}

const deleteProfile = async (req, res) => {
    const email = req.query.email;
    try {
        const profile = await Profile.findOne({ email })
        if (profile) {
            const data = await Profile.deleteOne({ email })
            res.status(200).json({ success: true, data })
        }
        // res.status(400).json({ success: false, msg: 'Profile not found' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, msg: 'Internal server error', error_info: error });
    }
}

const deleteAllProfiles = async (req, res) => {
    try {
        const data = await Profile.deleteMany({})
        res.status(200).json({ success: true, data })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { getProfile, getAllProfiles, addProfile, updateProfile, deleteProfile, deleteAllProfiles }