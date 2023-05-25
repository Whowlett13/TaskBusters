const { Jobs } = require("../models");
const jobsData = [
  {
    user_id: 1,
    job_title: "Mover",
    job_description:
      "Duis tempor adipisicing deserunt veniam eu quis proident mollit ex commodo eiusmod enim cillum.",
    job_location: "Toronto",
    job_date: 2023 - 12 - 31,
    hourly_wage: 40,
    job_duration: 1,
  },
  {
    user_id: 1,
    job_title: "General labour",
    job_description:
      "help around the house",
    job_location: "Ottawa",
    job_date: 2023 - 10 - 11,
    hourly_wage: 20,
    job_duration: 8,
  },
];
const seedJobs = () => Jobs.bulkCreate(jobsData);
module.exports = seedJobs;
