'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init({
      // Define fields here
      name: {
        type: DataTypes.STRING,
        allowNull: false, // ✔ Fixed placement of allowNull
      },
      age: {
        type: DataTypes.INTEGER, // ✔ Moved age inside field definitions
        allowNull: true, // Example setting, adjust as needed
      },
    }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};