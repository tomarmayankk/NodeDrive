const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minlength: [3, 'userName must be 3 characters long'],
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [10, 'Your email address must be at least 10 characters long']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'Your password must be at least 5 characters long']
    }
})

const user  = mongoose.model('user', userSchema);
module.exports = user;