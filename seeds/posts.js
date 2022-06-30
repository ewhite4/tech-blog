const { Post } = require('../models');

const posts = [
    {
        title: 'testpost1',
        content: 'testcontent1',
        userId: 1
    },
    {
        title: 'testpost2',
        content: 'testcontent2',
        userId: 2
    },
    {
        title: 'testpost3',
        content: 'testcontent3',
        userId: 3
    }
];

const postSeeds = () => Post.bulkCreate(posts);

module.exports = postSeeds;

