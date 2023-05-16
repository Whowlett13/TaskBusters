const User = require('./User');
const Jobs = require('./Jobs');
const Job_Apply = require('./Job_Apply');


User.hasMany(Jobs, {
    foreignKey: 'user_id'
});

Jobs.belongsTo(User, {
    foreignKey: 'user_id',
});

Job_Apply.belongsTo(User, {
    foreignKey: 'user_id'
  });

Job_Apply.belongsTo(Jobs, {
    foreignKey: 'job_id'
});

User.hasMany(Job_Apply, {
    foreignKey: 'user_id'
});

Jobs.hasMany(Job_Apply, {
    foreignKey: 'job_id'
});

module.exports = {Jobs, Job_Apply, User};
