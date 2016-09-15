"use strict"

let model = require("./models/index")
let repl = require("repl")

model.Student.create({first_name: "halossa", last_name: "Dakas", age:10, phone: "013415801348", email: "unieuq@gmail.com"})

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

let replServer = repl.start({prompt:">"})
replServer.context.getAge = getAge
