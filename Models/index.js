const Job_Apply = require('./Job_Apply');
const Job_Poster = require('./Job_Poster');
const Jobs = require('./Jobs');
const Job_Seeker = require('./Job_Seeker');


Job_Poster.hasMany(Jobs, {
    foreignKey: 'job_poster_id'
});

Jobs.belongsTo(Job_Poster, {
    foreignKey: 'job_poster_id',
});

Job_Apply.belongsTo(Job_Seeker, {
    foreignKey: 'job_seeker_id'
});

  Job_Apply.belongsTo(Jobs, {
    foreignKey: 'job_id'
});

Job_Seeker.hasMany(Job_Apply, {
    foreignKey: 'job_seeker_id'
});

Job_Seeker.hasMany(Job_Apply, {
  foreignKey: 'job_seeker_id'
});

Job_Poster.hasMany(Jobs, {
  foreignKey: 'job_poster_id'
});

Jobs.hasOne(Job_Poster, {
  foreignKey: 'job_id'
})

Jobs.hasMany(Job_Apply, {
    foreignKey: 'job_id'
});

module.exports = {Job_Apply, Job_Poster, Job_Seeker, Jobs};
