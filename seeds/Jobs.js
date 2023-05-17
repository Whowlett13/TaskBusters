const { Jobs } = require("../models");

const JobsData = [
  {
    user_id: 1,
    job_title: "painter",
    job_description: "painting my house",
    job_location: "Ottawa",
    job_date: 2023 - 05 - 16,
    hourly_wage: 20,
    job_duration: 20,
  },
];

const seedsJobs = () => Jobs.bulkCreate(JobsData);

module.exports = seedsJobs;
