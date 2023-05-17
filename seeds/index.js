const sequelize = require("../config/connection");

const seedJobApply = require("./Job_Apply");
// const seedProducts = require("./product-seeds");
// const seedTags = require("./tag-seeds");
// const seedProductTags = require("./product-tag-seeds");

// const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedJobApply();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  process.exit(0);
};

seedAll();
