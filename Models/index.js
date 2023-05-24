const User = require("./User");
// const Job_Apply = require("./Job_Apply");
const Jobs = require("./Jobs");

User.hasMany(Jobs, {
  foreignKey: "user_id",
});

Jobs.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Job_Apply, {
//   foreignKey: "user_id",
// });

// Jobs.hasMany(Job_Apply, {
//   foreignKey: "job_id",
// });

module.exports = { Jobs, User };
