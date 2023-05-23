const User = require("../models");
const { User } = require('../models');

const sequelize = require("../config/connection");
const User = require("../models");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const UserData = [
    {
        first_name: "himali",
        last_name: "panchal",
        username: "hp",
        linkedin: "himalipanchal",
        contact_number: 34,
        date_of_birth: 1996-12-31,
        email:"hi@gmail.com",
        password: "ew78aa11"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
