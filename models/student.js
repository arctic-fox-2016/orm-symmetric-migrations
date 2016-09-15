'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    email: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};
