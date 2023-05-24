const { User } = require("../models");
const userData = [
  {
    first_name: "himali",
    last_name: "panchal",
    username: "hp",
    linkedin: "himalipanchal",
    contact_number: 34,
    date_of_birth: 1996 - 12 - 31,
    email: "hi@gmail.com",
    password: "ew78aa11",
  },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;
