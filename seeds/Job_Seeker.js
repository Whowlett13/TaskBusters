const { Job_Seeker } = require("../models");
const Job_SeekerData = [
  {
    first_name: "wyatt",
    last_name: "howlett",
    contact_number: 613,
    username: "whowlett13",
    password: "Soda69",
  },
];

const seedsJob_Seeker = () => Job_Seeker.bulkCreate(Job_SeekerData);

module.exports = seedsJob_Seeker;
