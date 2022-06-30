const { User } = require('../models');

const users = [
    {
        username: 'test1',
        password: 'test1'
    },
    {
        username: 'test2',
        password: 'test2'
    },
    {
        username: 'test3',
        password: 'test3'
    }
];

const userSeeds = () => User.bulkCreate(users);

module.exports = userSeeds;

