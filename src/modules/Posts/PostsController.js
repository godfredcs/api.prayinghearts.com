const Post = require('./PostsModel');
const Validator = require('validatorjs');

exports.index = (req, res, next) => {
    Post.find((err, posts) => {
        if (err) {
            return res.status(500).json({error: err});
        }

        return res.status(200).json(posts);
    }).populate('user', 'id email username createdAt updatedAt');
};

exports.store = (req, res, next) => {
    const data = {
        user: req.body.user,
        title: req.body.title,
        body: req.body.body
    };

    const rules = {
        user: 'required',
        title: 'required',
        body: 'required'
    };

    const validation = new Validator(data, rules);

    if (validation.fails()) {
        return res.status(422).json(validation.errors.all());
    }

    const post = new Post(data);

    post.save((err, post) => {
        if (err) {
            return res.status(422).json({error: err});
        }

        return res.status(200).json(post);
    });
};

exports.show = (req, res, next) => {
    Post.findById(req.params.id, (err, posts) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (!posts) {
            return res.status(404).json({error: 'Post not found'});
        }

        return res.status(200).json(posts);
    }).populate('user', 'id email username createdAt updatedAt');
};

exports.showAll = (req, res, next) => {
    Post.find({user: req.params.id}, (err, posts) => {
        if (err) {
            return res.status(500).json(err);
        }

        if (!posts) {
            return res.status(404).json({error: 'Posts not found'});
        }

        return res.status(200).json(posts);
    }).populate('user', 'id email username createdAt updatedAt');
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

