'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Resort.hasMany(models.Run, {
        foreignKey: 'resortId',
        as: 'runs'
      })
    }
  }
  Resort.init({
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    visited: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Resort',
  });
  return Resort;
};
