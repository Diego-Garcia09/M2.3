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
    await queryInterface.bulkInsert('Proyectos', [{
      nombre: 'Gundam',
      descripcion: 'Robot gigante de combate',
      donacion: 1000
    },
    {
      nombre: 'Pagina Web',
      descripcion: 'Pagina web super original e innovadora',
      donacion: 500
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
    await queryInterface.bulkDelete('Proyectos', {}, {});
  }
};
