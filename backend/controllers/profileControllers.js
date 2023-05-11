const Profile = require('../models/Profile')

const addProfile = async (req, res) => {
    try {
        console.log('addprofile', req.body)
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

const getProfiles = async (req, res) => {
    try {
        const data = await Profile.find({});
        res.status(200).json({ success: true, data })
    } catch (error) {
        console.log(error)
    }
}

const deleteAllProfiles = async (req, res) => {
    try{
        const data = await Profile.deleteMany({})
        res.status(200).json({success:true, data})
    }catch(err){
        console.log(err)
    }
} 

module.exports = { getProfiles, addProfile, updateProfile, deleteAllProfiles }