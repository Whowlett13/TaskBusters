const Job_Apply = require("../Models");
const Job_ApplyData = [
  { job_id: 1, user_id: 1, job_id: 1, comment_text: "I will do the job" },
];
const seedsJob_Apply = () => Job_Apply.bulkCreate(Job_ApplyData);

module.exports = seedsJob_Apply;
