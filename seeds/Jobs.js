const Jobs = require("../models/Jobs");
const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
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

  Jobs.bulkCreate(JobsData);
  process.exit(0);
};

seedDatabase();

// module.exports = seedsJobs;
