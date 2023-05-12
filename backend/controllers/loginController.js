const User = require('../models/User.model');
const Profile = require('../models/Profile.model')

const getLogin = async (req, res) => {
    try {
        const data = await User.find({ email: req.body.email });
        if (data.length === 0) return res.status(400).json({ success: false, msg: 'User not found' });
        const isMatch = req.body.password === data[0].password;
        if (isMatch){
            const profileData = await Profile.find({ email: req.body.email }); 
            return res.status(200).json({ success: true, msg: 'Login successful', data: { user: data[0], profile: profileData[0] } });
        } 
        else return res.status(400).json({ success: false, msg: 'Incorrect password' });
    } catch (error) {
        res.status(500).json({ success: false, msg: 'Internal server error', error_info: error });
    }
};

const postLogin = async (req, res) => {
   try {
        res.json({ msg: 'This is postLogin endpoint!' })
   } catch (error) {
        res.status(500).json({ success: false, msg: 'Internal server error', error_info: error });    
   }
}
module.exports = { getLogin, postLogin }