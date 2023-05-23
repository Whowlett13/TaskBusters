const sequelize = require("../config/connection");
const seedsUser = require("./User");
const seedJobApply = require("./Job_Apply");
const seedJobs = require("./Jobs");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  // await seedJobApply();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
