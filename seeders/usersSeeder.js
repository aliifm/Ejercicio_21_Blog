const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

faker.locale = "es";

module.exports = async () => {
  const users = [];
  /*
  users.push({
    firstname: Pepito,
    lastname: Gonzalez,
    email: pepito@gmail.com,
    avatar: http:,
    username: pepigon,
    password: root,
  });
  */

  for (let i = 0; i < 10; i++) {
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(true),
      username: faker.internet.userName(),
      password: await bcrypt.hash("1234", 8),
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
