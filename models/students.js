'use strict';
module.exports = function(sequelize, DataTypes) {
  var Students = sequelize.define('Students', {
    email: DataTypes.STRING,
    dob: DataTypes.DATE,
    full_name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Students;
};
