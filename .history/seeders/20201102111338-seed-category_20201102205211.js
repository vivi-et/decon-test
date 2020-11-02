const Category = require('../models/Category');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const time = new Date().toISOString().slice(0, 19).replace('T', ' ');

    await queryInterface.bulkInsert('categories',
      [


      ]);

    const a = await Category.findAll();
    console.log(a);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
