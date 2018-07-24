const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },
    liked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Like', LikeSchema);
