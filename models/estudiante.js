'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estudiante.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    semestreIngreso: {
      type: DataTypes.STRING,
      allowNull: true
    },
    creditosCursados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Estudiante',
  });
  return Estudiante;
};