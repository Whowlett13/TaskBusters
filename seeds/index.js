const sequelize = require("../config/connection");
const seedsUser = require("./User");
const seedJobApply = require("./Job_Apply");
const seedJobs = require("./Jobs");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
<<<<<<< HEAD
  // await seedsUser();
  // await seedJobApply();
  // await seedJobs();
=======
  // await seedJobApply();
>>>>>>> c59279e9684c197461396e7f6484db16260ff904
  console.log("\n----- CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
