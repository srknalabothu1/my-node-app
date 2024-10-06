// controllers/userController.js
const User = require('../models/userModel');

// Create a new user
exports.createUser = async (req, res, next) => {
    console.log(req, 'reqreqreq');
    try {
        const user = new User(req.body);
        const result = await user.save();
        const resp ={...result, message: "User created successfully" }
        res.status(201).json(resp);
    } catch (error) {
        next(error);
    }
};

// Get all users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Get a single user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Update a user
exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Delete a user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (error) {
        next(error);
    }
};
