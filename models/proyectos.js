'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Proyectos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Proyectos.belongsTo(models.Persona, {
        as: 'donatario',
        foreignKey: 'donatarioId',
        constraints: false,
      });
      models.Proyectos.belongsToMany(models.Persona, {through: models.Donadores, as: 'donadores', foreignKey: 'proyectoId', otherKey: 'personaId'});
      // models.Proyectos.belongsTo(models.Persona, {foreignKey: 'personaId'});
    }
  }
  Proyectos.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    donacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    donatarioId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Proyectos',
  });
  return Proyectos;
};