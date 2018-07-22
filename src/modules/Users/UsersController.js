const User = require('./UsersModel');

exports.index = async (req, res, next) => {
    await User.find((err, users) => {
        if (err) {
            return res.status(422).json(err);
        }

        return res.status(200).json(users);
    });
};

exports.register = async (req, res, next) => {
    const user = new User(req.body);

    await user.save((err, user) => {
        if (err) {
            return res.status(422).json(err);
        }

        return res.status(201).json(user);
    });
};

exports.login = (req, res, next) => {
    return res.status(200).json(req.body);
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

