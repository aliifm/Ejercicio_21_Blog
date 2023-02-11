const { faker } = require("@faker-js/faker");
const { Article } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      content: faker.lorem.lines(10),
      image: faker.image.abstract(700, 400, true),
      userId: faker.datatype.number({ min: 1, max: 10 }),
      createdAt: faker.date.past(5),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
