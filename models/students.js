'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    dob: DataTypes.DATE,
    email: DataTypes.STRING,
    nopol: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};