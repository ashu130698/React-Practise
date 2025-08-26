const Usermodel = require('../../models/userModel');

const register=async (req, res) => {
    
    const { name, email, username, password } = req.body;
    if (!name || !email || !username || !password) {
        return res.status(403).send({ message: 'All fields are mandatory' });
    }
    const user = await Usermodel.findOne({ email });
    if (user) {
        return res.status(403).send({ message: 'Email id is already exist' });
    }
    const newUser = new Usermodel({ name, email, username, password });
    const resp = await newUser.save();
    return res.status(201).send({ message: 'User Created succesfully', resp });
}

module.exports = {
    register,
}