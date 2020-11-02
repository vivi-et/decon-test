module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', [{
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@example.com',
    createdAt: new Date(),
    updatedAt: new Date(),
  }]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
