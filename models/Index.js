const Comment = require('./comment');
const Post = require('./Post');
const User = require('./User');

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Comment.belongsTo(Post, {
    foreignKey: 'postId',
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
});

User.hasMany(Post, {
    foreignKey: 'userId',
});

User.hasMany(Comment, {
    foreignKey: 'userId',
});

module.exports = { Comment, Post, User };
