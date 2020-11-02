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

    await queryInterface.bulkInsert('categories', [
      { name: '로고&아이덴티티' },
      { name: '웹&앱 디자인' },
      { name: '비즈니스&광고' },
      { name: '아트&일러스트' },
      { name: '로고&아이덴티티' },
      { name: '로고&아이덴티티' },
      { name: '로고&아이덴티티' },
      { name: '로고&아이덴티티' },
    ], {});
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
