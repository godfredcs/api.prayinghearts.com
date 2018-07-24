// Load required modules
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// bcrypt salting rounds
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    }
}, {
    timestamps: true
});

// Hash password before saving to database
UserSchema.pre('save', function (next) {
    var user = this;

    bcrypt.hash(user.password, saltRounds, function (err, hash) {
        if (err) {
            return next(err);
        }

        user.password = hash;
        next();
    });
});

module.exports = mongoose.model('User', UserSchema);
