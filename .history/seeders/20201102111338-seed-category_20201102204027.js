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
        { name: '로고&아이덴티티', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
        { name: '웹&앱 디자인', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
        { name: '비즈니스&광고', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
        { name: '아트&일러스트', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
        { name: '패키지&라벨', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },
        { name: '북&매거진', createdAt: new Date().toISOString().slice(0, 19).replace('T', ' ') },

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
