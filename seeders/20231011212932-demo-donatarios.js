'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Donatarios', [{
      rfc: 1,
      nombre: 'Diego',
      imagen: 'diego.jpg'
    },
    {
      rfc: 3,
      nombre: 'Anna',
      imagen: 'anna.jpg',
    },
    {
      rfc: 4,
      nombre: 'Alejandro',
      imagen: 'ale.jpg',
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Donatarios', {}, {});
  }
};
