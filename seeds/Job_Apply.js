const { Job_Apply } = require("../models");

const jobApplyData = [
  {
    job_id: 1,
    user_id: 1,
    comment_text: "I will do this job",
  },
  {
    job_id: 1,
    user_id: 1,
    comment_text: "I will do this job NOW",
  },
];

const seedsJobApply = () => Job_Apply.bulkCreate(jobApplyData);

module.exports = seedsJobApply;
