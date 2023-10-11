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
    return queryInterface.bulkInsert('Estudiantes', [
      {
        nombre: 'John Doe',
        matricula: 1000,
        semestreIngreso: '2016-2',
        creditosCursados: 300,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Jane Doe',
        matricula: 2000,
        semestreIngreso: '2018-2',
        creditosCursados: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Estudiantes', {}, {});
  }
};
