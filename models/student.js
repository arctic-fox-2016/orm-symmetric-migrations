'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    age: {type: "STRING",
    validate:{
      min: 5,
      // msg: "Must be older than 5"
    }
  },

  phone: {type: "STRING",
  validate:{
    isNumeric: {msg:"phone must be numeric only"},
    isLong: function(value){
      if(value.length<10){
        throw new Error('Phone number must be longer than 10 digits')
      }
    }}
  },

  address: DataTypes.STRING,

  email: {type: "STRING",
  validate:{
    isEmail: {msg:"email must be in correct format"},
    isUnique: function(value){
      Student.findAll().then(function(students){
        for(let i in students){
          if(value == students[i].email){
            throw new Error('Email is already in use')
          }
        }
      })
    }
  }
  },
}, {
  classMethods: {
    associate: function(models) {
      // associations can be defined here
    }
  }
});
return Student;
};
