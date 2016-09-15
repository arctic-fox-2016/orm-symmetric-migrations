"use strict"

let model = require("./models/index")
let repl = require("repl")
let Sequelize = require("sequelize")

// model.Student.create({first_name: "Halo", last_name: "Dakas", age:10, phone: "013415801348", email: "unieuqa@gmail.com"})
// model.Student.create({first_name: "lo", last_name: "Jas", age:20, phone: "01543801348", email: "uieuq@gmail.com"})
// model.Student.create({first_name: "Hao", last_name: "Dakas", age:17, phone: "03213415801348", email: "uniq@gmail.com"})

let getName = function(){
  model.Student.findAll().then(function(students){
    let string = []
    for(let i in students){
      console.log(students[i].first_name+" "+students[i].last_name)
    }
  })
}

let getAge = function(){
  model.Student.findAll().then(function(students){
    let string = []
    for(let i in students){
      console.log(students[i].first_name+" "+students[i].last_name+" berumur "+ students[i].age)
    }
  })
}

queryInterface.addColumn("Student","address",Sequelize.STRING)

let replServer = repl.start({prompt:">"})
replServer.context.getAge = getAge
