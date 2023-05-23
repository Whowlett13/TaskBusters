const { Jobs } = require('../models');

const jobsData = [
    {
      user_id: 1,
      job_title: "Mover",
      job_description: "Duis tempor adipisicing deserunt veniam eu quis proident mollit ex commodo eiusmod enim cillum.",
      job_location: "Toronto",
      job_date: 2023-12-31,
      hourly_wage: 40,
      job_duration: 1
    }
]

const seedJobs = () => Jobs.bulkCreate(jobsData);

module.exports = seedJobs;
