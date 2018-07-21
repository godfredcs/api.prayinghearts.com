

exports.index = (req, res, next) => {
    res.send('You are getting all users');
};

exports.register = (req, res, next) => {
    res.send('You are trying to register now');
};

exports.login = (req, res, next) => {
    res.send('You are trying to login now');
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

