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
        { name: '로고&아이덴티티', moment().format('YYYY-MM-DD HH:mm:ss'); },
        { name: '웹&앱 디자인', moment().format('YYYY-MM-DD HH:mm:ss'); },
        { name: '비즈니스&광고', moment().format('YYYY-MM-DD HH:mm:ss'); },
        { name: '아트&일러스트', moment().format('YYYY-MM-DD HH:mm:ss'); },
        { name: '패키지&라벨', moment().format('YYYY-MM-DD HH:mm:ss'); },
        { name: '북&매거진', moment().format('YYYY-MM-DD HH:mm:ss'); },

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
