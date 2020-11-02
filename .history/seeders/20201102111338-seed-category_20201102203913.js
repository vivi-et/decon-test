const moment = require('moment');

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

    await queryInterface.bulkInsert('categories',
      [
        { name: '로고&아이덴티티', createdAt: Date.now() },
        { name: '웹&앱 디자인', createdAt: Date.now() },
        { name: '비즈니스&광고', createdAt: Date.now() },
        { name: '아트&일러스트', createdAt: Date.now() },
        { name: '패키지&라벨', createdAt: Date.now() },
        { name: '북&매거진', createdAt: Date.now() },

      ]);
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
