const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var moment = require('moment');
var objectIdToTimestamp = require('objectid-to-timestamp');

const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000,
    useNewUrlParser: true
};

mongoose.connect('mongodb://localhost:27017/myblog', option);

var UserSchema = new Schema({
    name: { type: 'string' },
    password: { type: 'string' },
    avatar: { type: 'string' },
    gender: { type: 'string', enum: ['m', 'f', 'x'] },
    bio: { type: 'string' },
    pv: { type: 'number' }
});
var PostSchema = new Schema({
    author: { type: Schema.Types.ObjectId },
    title: { type: 'string' },
    content: { type: 'string' },
    pv: { type: 'number' }
});
var CommentSchema = new Schema({
    author: { type: Schema.Types.ObjectId },
    content: { type: 'string' },
    postId: { type: Schema.Types.ObjectId }
})

exports.User = mongoose.model('User', UserSchema);
exports.Post = mongoose.model('Post', PostSchema);
exports.Comment = mongoose.model('Comment', CommentSchema);