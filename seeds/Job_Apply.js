const sequelize = require("../config/connection");
const Job_Apply = require("../models/Job_Apply");
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
<<<<<<< HEAD

=======
>>>>>>> c59279e9684c197461396e7f6484db16260ff904
  Job_Apply.bulkCreate(jobApplyData);
  process.exit(0);
};
seedDatabase();
