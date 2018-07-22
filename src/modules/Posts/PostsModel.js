const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);
