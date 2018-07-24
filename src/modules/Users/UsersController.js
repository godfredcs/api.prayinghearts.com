const User = require('./UsersModel');
const Validator = require('validatorjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {JWT_KEY} = require('../../config/env');

exports.index = async (req, res, next) => {
    await User.find((err, users) => {
        if (err) {
            return res.status(422).json(err);
        }

        return res.status(200).json(users);
    });
};

exports.register = async (req, res, next) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
    };

    const rules = {
        email: 'required|email',
        username: 'required|min:3',
        password: 'required|confirmed|min:6'
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
        return res.status(422).json(validation.errors.all());
    }

    delete data.password_confirmation;

    const user = new User(data);

    await user.save((err, user) => {
        if (err) {
            return res.status(422).json(err);
        }

        return res.status(201).json(user);
    });
};

exports.login = async (req, res, next) => {
    const data = {
        username_or_email: req.body.username_or_email,
        password: req.body.password
    };

    const rules = {
        username_or_email: 'required',
        password: 'required|min:6'
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
        return res.status(422).json(validation.errors.all());
    }

    User.findOne({ $or: [{username: data.username_or_email}, {email: data.username_or_email}] }, (err, user) => {
        if (err) {
            return res.status(404).json(err);
        }

        bcrypt.compare(data.password, user.password, (err, result) => {
            if (err) {
                return res.status(422).json(err);
            }

            if (result) {
                const token = jwt.sign({
                    email: user.email,
                    id: data._id
                }, JWT_KEY, { expiresIn: "30d" })
            }
        });

        return res.status(200).json(user);
    });
};

exports.passwordReset = (req, res, next) => {
    res.send('You are trying to login now');
};


exports.show = (req, res, next) => {
    res.send('You are trying to get your details now');
};

exports.update = (req, res, next) => {
    res.send('You are trying to update your details now');
};

exports.destroy = (req, res, next) => {
    res.send('You are trying to delete your account now');
};

