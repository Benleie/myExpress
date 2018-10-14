const mongoose = require('mongoose');
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/myblog', option);

var UserSchema = new mongoose.Schema({
    name: { type: 'string' },
    password: { type: 'string' },
    avatar: { type: 'string' },
    gender: { type: 'string', enum: ['m', 'f', 'x'] },
    bio: { type: 'string' },
    pv: { type: 'number' }
});
var PostSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId },
    title: { type: 'string' },
    content: { type: 'string' },
    pv: { type: 'number' }
});
var CommentSchema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId },
    content: { type: 'string' },
    postId: { type: mongoose.Schema.Types.ObjectId }
})

exports.User = mongoose.model('User', UserSchema);
exports.Post = mongoose.model('Post', PostSchema);
exports.Comment = mongoose.model('Comment', CommentSchema);