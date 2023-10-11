'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Curso.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clave: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    creditos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};