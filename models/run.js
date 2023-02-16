'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Run extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Run.belongsTo(models.Resort, {
        foreignKey: 'resortId'
      })
    }
  }
  Run.init({
    name: DataTypes.STRING,
    difficulty: {
      type: DataTypes.ENUM('Green', 'Blue', 'Black', 'Double Black'),
      defaultValue: 'Green'
    },
    resortId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Resorts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Run',
  });
  return Run;
};
