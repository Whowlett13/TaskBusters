const { Jobs } = require("../models");
const JobsData = [
  {
    job_poster_id: 1,
    job_seeker_id: 1,
    job_title: "painting",
    job_description: "paint my house",
    job_location: "Ottawa",
    job_date: "May 22nd",
  },
];

const seedsJobs = () => Jobs.bulkCreate(JobsData);

module.exports = seedsJobs;
