'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const date = new Date()
    
    await queryInterface.bulkInsert('Resorts', [{
      name: 'Vail',
      state: 'Colorado',
      visited: true,
      createdAt: date,
      updatedAt: date,
    }, {
      name: 'Crested Butte',
      state: 'Colorado',
      visited: false,
      createdAt: date,
      updatedAt: date,
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('Resorts', null, {});
  }
};
