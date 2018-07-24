const Post = require('./PostsModel');

exports.index = async (req, res, next) => {
    await Post.find((err, posts) => {
        if (err) {
            return res.status(500).json({error: err});
        }

        return res.status(200).json(posts);
    }).populate('user');
};

exports.store = async (req, res, next) => {
    const post = new Post(req.body);

    await post.save((err, post) => {
        if (err) return res.status(422).json({error: err});

        return res.status(200).json(post);
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

