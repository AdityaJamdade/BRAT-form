const Address = require('../models/Address')

const addAddress = async (req, res) => {
    try {
        const data = await Address.create(req.body);
        res.status(200).json({ success: true, data })
    } catch (err) {
        console.log(err)
    }
}

const updateAddress =  async (req, res) => {
    try {
        const data = await Address.updateOne({email: req.body.email}, req.body);
        res.status(200).json({ success: true, data })
    } catch (err) {
        console.log(err)
    }
}

const getAddress = async (req, res) => {
    try {
        const data = await Address.find({});
        res.status(200).json({success: true, data})
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAddress, addAddress, updateAddress }