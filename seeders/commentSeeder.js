const { faker } = require("@faker-js/faker");
const { Comment } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const comments = [];

  for (let i = 0; i < 100; i++) {
    comments.push({
      content: faker.lorem.words(50),
      createdAt: faker.date.past(2),
      updateAt: faker.date.past(2),
      userId: faker.datatype.number({ min: 1, max: 10 }),
      articleId: faker.datatype.number({ min: 1, max: 30 }),
    });
  }

  await Comment.bulkCreate(comments);
  console.log("[Database] Se corrió el seeder de Comments.");
};
