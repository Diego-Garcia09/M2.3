'use strict';

const donadores = require('../models/donadores');

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
    await queryInterface.bulkInsert('Donadores', [{
      rfc: 1,
      nombre: 'Diego',
      imagen: 'diego.jpg',
      donacion: 1000
    },
    {
      rfc: 2,
      nombre: 'Andre',
      imagen: 'andre.jpg',
      donacion: 500
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
    await queryInterface.bulkDelete('Donadores', {}, {});
  }
};
