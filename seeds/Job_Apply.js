const { Job_Apply } = require('../models');

const commentData = [
    {
        user_id: 1,
        job_id: 1,
        comment_text: "loremLabore aute sint ea tempor id dolor."
    }
]

const seedComments = () => Job_Apply.bulkCreate(commentData);

module.exports = seedComments;
