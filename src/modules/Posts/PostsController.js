const Post = require('./PostsModel');

exports.index = (req, res, next) => {
    Post.find((err, posts) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        return res.status(200).json(posts);
    });
};

exports.store = (req, res, next) => {
    res.status(201).json({
        message: 'This is the store of posts'
    });
};

exports.show = (req, res, next) => {
    res.status(200).json({
        message: 'This is the show of posts'
    });
};

exports.update = (req, res, next) => {
    res.status(200).json({
        message: 'This is the update of posts'
    });
};

exports.destroy = (req, res, next) => {
    res.status(200).json({
        message: 'This is the destroy of posts'
    });
};

