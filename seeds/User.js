const { User } = require("../models");
const UserData = [
  {
    first_name: "Wyatt",
    last_name: "Howlett",
    username: "Whowlett13",
    linkedin: "hello",
    contact_number: 613,
    date_of_birth: 1999 - 03 - 28,
    email: "wyatt@gmail.com",
    password: "hello",
  },
];

const seedsUser = () => User.bulkCreate(UserData);

module.exports = seedsUser;
