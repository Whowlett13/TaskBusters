
const User = require("../models");



const sequelize = require("../config/connection");
const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const UserData = [
    {
      first_name: "Wyatt",
      last_name: "Howlett",
      username: "Whowlett13",
      linkedin: "hello",
      contact_number: 613,
      date_of_birth: 28,
      email: "wyatt@gmail.com",
      password: "hello",
    },
  ];

  User.bulkCreate(UserData);
  process.exit(0);
};

seedDatabase();
