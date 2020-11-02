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
        { name: '로고&아이덴티티', createdAt: time, updatedAt: time },
        { name: '웹&앱 디자인', createdAt: time, updatedAt: time },
        { name: '비즈니스&광고', createdAt: time, updatedAt: time },
        { name: '아트&일러스트', createdAt: time, updatedAt: time },
        { name: '패키지&라벨', createdAt: time, updatedAt: time },
        { name: '북&매거진', createdAt: time, updatedAt: time },

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
