const { User } = require("../models");
const userData = [
  {
    first_name: "himali",
    last_name: "panchal",
    contact_number: 34,
    email: "hi@gmail.com",
    password: "ew78aa11",
  },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
