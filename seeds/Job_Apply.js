const sequelize = require("../config/connection");
const Job_Apply = require("../models");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
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
  Jobs.bulkCreate(Jobs_ApplyData);
  process.exit(0);
};
seedDatabase();
