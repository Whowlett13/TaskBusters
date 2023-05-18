const Job_Apply = require("../models/Job_Apply");
const sequelize = require("../config/connection");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const Job_ApplyData = [
    { job_id: 1, user_id: 1, job_id: 1, comment_text: "I will do the job" },
  ];

  Job_Apply.bulkCreate(Job_ApplyData);
  process.exit(0);
};

seedDatabase();
