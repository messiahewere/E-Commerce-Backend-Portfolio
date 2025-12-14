const authSchema = require('../schema/auth-schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const registerUser = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const userExists = await authSchema.findOne({email});
        if(userExists) {
            return res.status(400).json({message: 'User already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const validUser = await authSchema.create({username, email, password: hashedPassword});
        res.status(201).json({id: validUser._id, username: validUser.username, email: validUser.email});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: 'All fields are required'});
        }
        const validUser = await authSchema.findOne({email});
        if(!validUser) {
            return  res.status(400).json({message: 'Invalid credentials'});
        }
        const isPasswordMatch = await bcrypt.compare(password, validUser.password);
        if(!isPasswordMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const authToken = jwt.sign({userId: validUser._id, username: validUser.username, email: validUser.email}, 
                          process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({token: authToken});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = { registerUser, loginUser}