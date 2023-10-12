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
    await queryInterface.bulkInsert('Persona', [{
      rfc: 1,
      name: 'Diego',
      imagen: 'diego.jpg'
    },
    {
      rfc: 2,
      name: 'Anna',
      imagen: 'anna.jpg',
    },
    {
      rfc: 3,
      name: 'Alejandro',
      imagen: 'ale.jpg',
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Persona', {}, {});
  }
};
